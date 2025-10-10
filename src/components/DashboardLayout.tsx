import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { DarkModeToggle } from "./DarkModeToggle";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-40 border-b glass-effect">
            <div className="flex h-16 items-center gap-4 px-6">
              <SidebarTrigger className="hover:bg-muted rounded-lg transition-colors" />
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  TimeTable Pro
                </span>
              </Link>
              <div className="ml-auto">
                <DarkModeToggle />
              </div>
            </div>
          </header>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
