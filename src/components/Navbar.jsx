import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <span className="font-semibold text-lg tracking-tight"><Link to="/">Nadim's LMS</Link></span>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <Link to={'/courses'}>Courses</Link>
          </Button>
          <Button variant="ghost" size="sm">
            About
          </Button>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
          <Button><Link to={'/login'}>Login</Link></Button>
          <Button><Link to={'/register'}>Register</Link></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
