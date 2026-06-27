import { AppTopNav } from "@/components/layout/AppTopNav";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-purple-500 to-indigo-600">
      <AppTopNav />
      <div className="px-3 sm:px-6">
        <div className="mx-auto flex min-h-[85vh] max-w-[1400px] overflow-hidden rounded-t-[2.5rem] bg-white">
          <AppSidebar />
          <main className="flex-1 px-6 py-8 sm:px-10 sm:py-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
