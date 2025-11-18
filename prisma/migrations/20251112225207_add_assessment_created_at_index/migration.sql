-- DropIndex
DROP INDEX "Assessment_userId_createdAt_idx";

-- CreateIndex
CREATE INDEX "Assessment_userId_createdAt_idx" ON "Assessment"("userId", "createdAt" ASC);
