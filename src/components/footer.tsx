import Link from 'next/link'

const footerLinks = [
  { title: 'Conditions', href: '/conditions' },
  { title: 'Confidentialité', href: '/confidentialite' },
  { title: 'Contact', href: '/contact' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Mentions légales', href: '/mentions-legales' },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 md:mb-0">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="text-sm text-slate-300">
            &copy; {new Date().getFullYear()} Club Fasting
          </div>
        </div>
      </div>
    </footer>
  )
}
