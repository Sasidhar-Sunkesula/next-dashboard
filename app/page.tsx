import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  } else {
    redirect("/auth/signin");
  }

  // This won't be reached, but is needed for TypeScript
  return null;
}
