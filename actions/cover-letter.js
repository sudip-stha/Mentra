"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

async function getAuthenticatedUser() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: {
      id: true,
      industry: true,
      experience: true,
      skills: true,
      bio: true,
    },
  });

  if (!user) throw new Error("User not found");
  return user;
}

export async function generateCoverLetter(data) {
  const user = await getAuthenticatedUser();

  const prompt = `Write a professional cover letter for a ${
    data.jobTitle
  } position at ${data.companyName}.

About the candidate:
- Industry: ${user.industry}
- Years of Experience: ${user.experience}
- Skills: ${user.skills?.join(", ") || "Not specified"}
- Professional Background: ${user.bio || "Not provided"}

Job Description:
${data.jobDescription}

Requirements:
1. Use a professional, enthusiastic tone
2. Highlight relevant skills and experience
3. Show understanding of the company's needs
4. Keep it concise (max 400 words)
5. Use proper business letter formatting in markdown
6. Include specific examples of achievements
7. Relate candidate's background to job requirements

Format the letter in markdown.`;

  try {
    const result = await model.generateContent(prompt);
    const content = result.response.text().trim();

    const coverLetter = await db.coverLetter.create({
      data: {
        content,
        jobDescription: data.jobDescription,
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        status: "completed",
        userId: user.id,
      },
    });

    return coverLetter;
  } catch (error) {
    console.error("Error generating cover letter:", error.message);
    throw new Error("Failed to generate cover letter");
  }
}

export async function getCoverLetters() {
  const user = await getAuthenticatedUser();

  return await db.coverLetter.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      jobTitle: true,
      companyName: true,
      status: true,
      createdAt: true,
    },
  });
}

export async function getCoverLetter(id) {
  const user = await getAuthenticatedUser();

  const coverLetter = await db.coverLetter.findUnique({
    where: {
      id,
      userId: user.id,
    },
  });

  if (!coverLetter) throw new Error("Cover letter not found");
  return coverLetter;
}

export async function deleteCoverLetter(id) {
  const user = await getAuthenticatedUser();

  const coverLetter = await db.coverLetter.findUnique({
    where: {
      id,
      userId: user.id,
    },
  });

  if (!coverLetter) throw new Error("Cover letter not found");

  return await db.coverLetter.delete({
    where: { id },
  });
}
