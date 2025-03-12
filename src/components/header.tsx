import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { Button } from '@/components/ui/button'

const navLinks = [
  { title: 'Le Fasting', href: '/le-fasting' },
  { title: 'Recettes', href: '/recettes' },
  { title: 'Exercices HIIT', href: '/exercices' },
  { title: 'Témoignages', href: '/temoignages' },
]

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Logo />

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-[#f76f20] transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <Link href="/adhesion">
            <Button className="bg-[#f76f20] hover:bg-[#f76f20]/90 text-white font-medium">
              Adhérer
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
