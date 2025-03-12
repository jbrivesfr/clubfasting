import Image from 'next/image'
import { Check } from 'lucide-react'

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#f76f20]/10 text-[#f76f20] font-medium text-sm mb-4">
            Votre abonnement premium
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tout ce que vous obtenez avec votre adhésion
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Club Fasting vous offre tous les outils et ressources dont vous avez besoin pour réussir avec le jeûne intermittent 16:8
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://web-assets.same.dev/1992644129/2317164137.jpeg"
              alt="Application Club Fasting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Application exclusive</h3>
                <p>Suivez votre progression et accédez à tout le contenu depuis votre smartphone</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f76f20]/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-[#f76f20]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Programme Le Fasting 16:8 complet</h3>
                <p className="text-gray-600">Guide étape par étape pour maîtriser le jeûne intermittent adapté à votre mode de vie</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f76f20]/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-[#f76f20]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bibliothèque de recettes low-carb</h3>
                <p className="text-gray-600">Plus de 100 recettes délicieuses optimisées pour le jeûne intermittent et mises à jour chaque mois</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f76f20]/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-[#f76f20]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Séances HIIT personnalisées</h3>
                <p className="text-gray-600">Des entraînements courts et efficaces pour tous les niveaux, à faire chez vous sans équipement</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f76f20]/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-[#f76f20]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Coaching et communauté</h3>
                <p className="text-gray-600">Accès à notre groupe privé et sessions de questions-réponses hebdomadaires avec nos experts</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#f76f20]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f76f20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Perte de poids</h3>
              <p className="text-gray-600">87% de nos membres perdent en moyenne 4 à 8 kg au cours des deux premiers mois</p>
            </div>

            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#f76f20]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f76f20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Énergie accrue</h3>
              <p className="text-gray-600">92% des membres rapportent une amélioration significative de leur niveau d'énergie quotidien</p>
            </div>

            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#f76f20]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f76f20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Santé améliorée</h3>
              <p className="text-gray-600">Des marqueurs de santé optimisés avec une réduction moyenne de 18% du taux de cholestérol</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
