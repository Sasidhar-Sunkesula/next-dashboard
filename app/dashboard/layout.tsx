import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar user={user} />
        <main className="ml-64 mt-4 flex-1 overflow-y-auto p-4 md:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}