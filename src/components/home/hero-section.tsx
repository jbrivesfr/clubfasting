import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#333] to-[#333]/90 text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
           style={{ backgroundImage: "url('https://web-assets.same.dev/671759307/2716206023.png')" }}></div>
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#f76f20]/20 text-[#f76f20] font-medium text-sm mb-6">
            Méthode prouvée scientifiquement
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Rejoignez <span className="text-[#f76f20]">Club Fasting</span> et transformez votre corps en 30 jours
          </h1>
          <h4 className="text-lg md:text-xl mb-8 text-white/90">
            Notre communauté exclusive vous donne accès à tout ce dont vous avez besoin pour réussir avec <span className="text-[#f76f20]">Le Fasting 16:8</span> : conseils experts, recettes low-carb et exercices HIIT
          </h4>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#f76f20]/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f76f20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>+100 recettes low-carb</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#f76f20]/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f76f20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Séances HIIT efficaces</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#f76f20]/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f76f20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Accompagnement personnalisé</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/adhesion">
              <Button className="bg-[#f76f20] hover:bg-[#f76f20]/90 text-white px-8 py-6 rounded-md text-lg font-medium w-full sm:w-auto">
                Rejoindre maintenant à 29€/mois
              </Button>
            </Link>
            <Link href="/le-fasting">
              <Button className="bg-white hover:bg-white/90 text-[#f76f20] px-8 py-6 rounded-md text-lg font-medium w-full sm:w-auto">
                En savoir plus
              </Button>
            </Link>
          </div>

          <p className="text-sm text-white/70">
            Déjà plus de 1000 membres • Satisfait ou remboursé pendant 14 jours
          </p>
        </div>
      </div>
    </section>
  )
}
