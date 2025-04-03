import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, X, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container-wide flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-primary font-bold text-2xl font-abril">MC</span>
            <div className="ml-2 leading-tight">
              <div className="text-sm uppercase font-bold tracking-wider">MIGUEL</div>
              <div className="text-sm uppercase font-bold tracking-wider">CARDOSO</div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/achievements" className="nav-link text-sm uppercase font-medium">
            Achievements
          </Link>
          <Link href="/promoted-players" className="nav-link text-sm uppercase font-medium">
            Promoted Players
          </Link>
          <Link href="/#what_they_say" className="nav-link text-sm uppercase font-medium">
            What they say
          </Link>
          <Link href="/moments" className="nav-link text-sm uppercase font-medium">
            Moments
          </Link>
          <Link href="/into-the-game" className="nav-link text-sm uppercase font-medium">
            Into the game
          </Link>
          <Link href="/timeline" className="nav-link text-sm uppercase font-medium">
            Timeline
          </Link>
          <Link href="/press-clipping" className="nav-link text-sm uppercase font-medium">
            Clipping
          </Link>
          <Link href="/contact" className="nav-link text-sm uppercase font-medium">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://twitter.com/CoachMCardoso" target="_blank" rel="noopener noreferrer" className="nav-link">
            <Twitter size={18} />
          </a>
          <a href="https://www.facebook.com/Miguel-Cardoso-1674219346026987/" target="_blank" rel="noopener noreferrer" className="nav-link">
            <Facebook size={18} />
          </a>
          <a href="https://www.instagram.com/miguelcardoso.coach/" target="_blank" rel="noopener noreferrer" className="nav-link">
            <Instagram size={18} />
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background">
            <SheetHeader>
              <SheetTitle className="text-primary">MIGUEL CARDOSO</SheetTitle>
              <SheetDescription>UEFA Pro Coach</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/achievements" className="nav-link text-sm uppercase font-medium py-2">
                Achievements
              </Link>
              <Link href="/promoted-players" className="nav-link text-sm uppercase font-medium py-2">
                Promoted Players
              </Link>
              <Link href="/#what_they_say" className="nav-link text-sm uppercase font-medium py-2">
                What they say
              </Link>
              <Link href="/moments" className="nav-link text-sm uppercase font-medium py-2">
                Moments
              </Link>
              <Link href="/into-the-game" className="nav-link text-sm uppercase font-medium py-2">
                Into the game
              </Link>
              <Link href="/timeline" className="nav-link text-sm uppercase font-medium py-2">
                Timeline
              </Link>
              <Link href="/press-clipping" className="nav-link text-sm uppercase font-medium py-2">
                Clipping
              </Link>
              <Link href="/contact" className="nav-link text-sm uppercase font-medium py-2">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4 mt-8">
              <a href="https://twitter.com/CoachMCardoso" target="_blank" rel="noopener noreferrer" className="nav-link">
                <Twitter size={18} />
              </a>
              <a href="https://www.facebook.com/Miguel-Cardoso-1674219346026987/" target="_blank" rel="noopener noreferrer" className="nav-link">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/miguelcardoso.coach/" target="_blank" rel="noopener noreferrer" className="nav-link">
                <Instagram size={18} />
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
