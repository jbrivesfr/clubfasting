import Image from 'next/image'
import { Clock, Utensils, Dumbbell, LineChart, Heart, Users } from 'lucide-react'

const features = [
  {
    icon: <Clock className="w-10 h-10 text-[#f76f20]" />,
    title: "Jeûne Intermittent 16:8",
    description: "Une méthode prouvée pour améliorer votre métabolisme, perdre du poids et augmenter votre énergie quotidienne."
  },
  {
    icon: <Utensils className="w-10 h-10 text-[#f76f20]" />,
    title: "Recettes Low-Carb",
    description: "Des recettes délicieuses à faible teneur en glucides pour vous aider à maintenir votre jeûne et optimiser vos résultats."
  },
  {
    icon: <Dumbbell className="w-10 h-10 text-[#f76f20]" />,
    title: "Exercices HIIT",
    description: "Des entraînements par intervalles à haute intensité courts et efficaces pour maximiser la combustion des graisses."
  },
  {
    icon: <LineChart className="w-10 h-10 text-[#f76f20]" />,
    title: "Suivi Personnalisé",
    description: "Suivez vos progrès et obtenez des recommandations adaptées à votre profil et à vos objectifs."
  },
  {
    icon: <Heart className="w-10 h-10 text-[#f76f20]" />,
    title: "Bien-être Global",
    description: "Améliorez votre santé cardiovasculaire, réduisez l'inflammation et augmentez votre clarté mentale."
  },
  {
    icon: <Users className="w-10 h-10 text-[#f76f20]" />,
    title: "Communauté Active",
    description: "Rejoignez une communauté motivante de personnes qui partagent votre parcours et vous soutiennent."
  }
]

export function FeaturesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Tout ce dont vous avez besoin pour réussir avec <span className="text-[#f76f20]">Le Fasting</span>
        </h2>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16">
          Notre approche complète combine le jeûne intermittent, la nutrition optimale et l'exercice intelligent pour des résultats durables.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-20">
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <Image
              src="https://web-assets.same.dev/2368998511/1217485369.jpeg"
              alt="Le Fasting lifestyle"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-[#f76f20]/90 p-4 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
