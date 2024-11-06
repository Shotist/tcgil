import React from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black/50 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-8 w-8 text-tcg-accent" />
            <span className="text-xl font-bold">TCG ישראל</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-tcg-accent">ראשי</a>
            <a href="#" className="hover:text-tcg-accent">קלפים</a>
            <a href="#" className="hover:text-tcg-accent">מדריכים</a>
            <a href="https://tcg.shotist.net" target="_blank" rel="noopener noreferrer" className="hover:text-tcg-accent">קהילה</a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 absolute w-full">
          <div className="px-4 py-4 space-y-4">
            <a href="#" className="block hover:text-tcg-accent">ראשי</a>
            <a href="#" className="block hover:text-tcg-accent">קלפים</a>
            <a href="#" className="block hover:text-tcg-accent">מדריכים</a>
            <a href="https://tcg.shotist.net" target="_blank" rel="noopener noreferrer" className="block hover:text-tcg-accent">קהילה</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;