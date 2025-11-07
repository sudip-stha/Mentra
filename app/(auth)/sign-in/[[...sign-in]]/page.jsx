import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn appearance={{
  elements: {
    footer: { display: "none" },
    logoBox: { display: "none" }
  },

}} />;
}
