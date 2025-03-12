import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#f76f20]">
      <div className="container-wide relative">
        {/* Decorative element */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

        <div className="relative bg-[#f76f20] rounded-2xl max-w-4xl mx-auto">
          <div className="text-white text-center space-y-8 px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Commencez votre transformation aujourd'hui
            </h2>

            <p className="text-xl max-w-2xl mx-auto">
              Ne remettez plus à demain ce que vous pouvez commencer aujourd'hui. Rejoignez Club Fasting et transformez votre corps et votre santé.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="font-bold text-xl">+1000</h3>
                <p>Membres actifs</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="font-bold text-xl">97%</h3>
                <p>Satisfaction client</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/adhesion">
                <Button className="bg-white hover:bg-white/90 text-[#f76f20] px-8 py-6 rounded-md text-lg font-bold w-full sm:w-auto">
                  Rejoindre maintenant
                </Button>
              </Link>
              <p className="text-white/80 flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Satisfait ou remboursé pendant 14 jours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
