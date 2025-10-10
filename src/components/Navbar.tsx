import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "./DarkModeToggle";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TimeTable Pro
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <Link to="/login">
              <Button className="gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
