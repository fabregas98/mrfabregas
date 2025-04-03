import React from 'react';
import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-wide py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/achievements" className="nav-link text-sm">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/promoted-players" className="nav-link text-sm">
                  Promoted Players
                </Link>
              </li>
              <li>
                <Link href="/#what_they_say" className="nav-link text-sm">
                  What they say
                </Link>
              </li>
              <li>
                <Link href="/moments" className="nav-link text-sm">
                  Moments
                </Link>
              </li>
              <li>
                <Link href="/into-the-game" className="nav-link text-sm">
                  Into the game
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="nav-link text-sm">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/press-clipping" className="nav-link text-sm">
                  Clipping
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Language Selector */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Language</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="flex items-center space-x-2 nav-link text-sm">
                  <img
                    src="https://ext.same-assets.com/830437270/804489185.png"
                    alt="English"
                    className="w-5 h-auto"
                  />
                  <span>English</span>
                </Link>
              </li>
              <li>
                <Link href="/pt-pt" className="flex items-center space-x-2 nav-link text-sm">
                  <img
                    src="https://ext.same-assets.com/830437270/1387985880.png"
                    alt="Portuguese"
                    className="w-5 h-auto"
                  />
                  <span>Portuguese (Portugal)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com/CoachMCardoso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.facebook.com/Miguel-Cardoso-1674219346026987/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/miguelcardoso.coach/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Miguel Cardoso - Official Website.
          </div>
          <div className="text-sm text-muted-foreground">
            Developed by <a href="https://www.branditnext.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">branditnext.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
