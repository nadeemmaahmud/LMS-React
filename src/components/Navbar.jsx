import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <span className="font-semibold text-lg tracking-tight">Brand Name</span>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Link 1
          </Button>
          <Button variant="ghost" size="sm">
            Link 2
          </Button>
          <Button variant="ghost" size="sm">
            Link 3
          </Button>
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
