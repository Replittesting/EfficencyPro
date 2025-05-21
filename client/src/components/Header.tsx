import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      closeMobileMenu();
    }
  };

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled ? "scrolled" : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className={cn(
            "text-2xl font-bold",
            isScrolled ? "text-foreground dark:text-white" : "text-white"
          )}>
            Efficiency<span className="text-accent">Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className={cn(
                "hover:text-accent transition",
                isScrolled ? "text-foreground dark:text-white" : "text-white"
              )}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className={cn(
                "hover:text-accent transition",
                isScrolled ? "text-foreground dark:text-white" : "text-white"
              )}
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className={cn(
                "hover:text-accent transition",
                isScrolled ? "text-foreground dark:text-white" : "text-white"
              )}
            >
              Our Process
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={cn(
                "hover:text-accent transition",
                isScrolled ? "text-foreground dark:text-white" : "text-white"
              )}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={cn(
                "hover:text-accent transition",
                isScrolled ? "text-foreground dark:text-white" : "text-white"
              )}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn(
                "h-6 w-6",
                isScrolled ? "text-foreground dark:text-white" : "text-white"
              )} />
            ) : (
              <Menu className={cn(
                "h-6 w-6",
                isScrolled ? "text-foreground dark:text-white" : "text-white"
              )} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full">
          <div className="container-custom py-3">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground dark:text-white hover:text-primary transition py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-foreground dark:text-white hover:text-primary transition py-2"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-foreground dark:text-white hover:text-primary transition py-2"
              >
                Our Process
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground dark:text-white hover:text-primary transition py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground dark:text-white hover:text-primary transition py-2"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
