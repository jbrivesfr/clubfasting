"use client";

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Qu'est-ce que Le Fasting 16:8 ?",
    answer: "Le Fasting 16:8 est une méthode de jeûne intermittent qui consiste à jeûner pendant 16 heures et à manger pendant une fenêtre de 8 heures. Cette approche permet à votre corps d'entrer en état de cétose, brûlant ainsi les graisses stockées et optimisant votre métabolisme."
  },
  {
    question: "Est-ce que je peux boire pendant la période de jeûne ?",
    answer: "Oui, vous pouvez et devez vous hydrater pendant votre période de jeûne. L'eau, le thé sans sucre et le café noir sont autorisés car ils ne contiennent pas de calories significatives et ne rompent pas le jeûne."
  },
  {
    question: "En quoi Club Fasting est différent des autres programmes ?",
    answer: "Club Fasting offre une approche complète combinant le jeûne intermittent 16:8, des recettes low-carb spécialement conçues, des séances HIIT adaptées et un accompagnement personnalisé. Notre communauté active et nos coachs experts vous soutiennent à chaque étape de votre parcours."
  },
  {
    question: "Puis-je faire Le Fasting si j'ai des problèmes de santé ?",
    answer: "Nous recommandons toujours de consulter votre médecin avant de commencer tout programme nutritionnel, particulièrement si vous avez des conditions médicales préexistantes comme le diabète, l'hypoglycémie, ou si vous prenez des médicaments."
  },
  {
    question: "Comment fonctionnent les abonnements à Club Fasting ?",
    answer: "Nous proposons trois formules d'abonnement : mensuel à 29€/mois sans engagement, annuel à 17€/mois (facturé 204€/an) et premium à 49€/mois avec coaching personnalisé. Tous les abonnements incluent l'accès complet à notre programme Le Fasting 16:8, aux recettes, aux séances HIIT et à notre communauté."
  },
  {
    question: "Quelle est la politique de remboursement ?",
    answer: "Nous offrons une garantie satisfait ou remboursé de 14 jours. Si vous n'êtes pas satisfait de votre adhésion pour quelque raison que ce soit, contactez-nous dans les 14 jours suivant votre inscription et nous vous rembourserons intégralement, sans question."
  },
  {
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer: "La plupart de nos membres commencent à observer des changements positifs dès les deux premières semaines, notamment une augmentation d'énergie et une amélioration de la concentration. Les résultats visibles sur la composition corporelle apparaissent généralement après 3-4 semaines de pratique régulière."
  },
  {
    question: "Comment accéder aux recettes et aux séances d'entraînement ?",
    answer: "Dès votre inscription, vous aurez accès à notre plateforme en ligne et notre application mobile, où vous trouverez l'intégralité de nos recettes low-carb et séances HIIT. Nous ajoutons régulièrement de nouveaux contenus pour maintenir votre motivation et éviter la routine."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#f76f20]/10 text-[#f76f20] font-medium text-sm mb-4">
            Questions fréquentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tout ce que vous devez savoir sur Club Fasting
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vous avez des questions sur Le Fasting 16:8 ou notre communauté ? Voici les réponses aux questions les plus courantes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg transition-all ${openIndex === index ? 'border-[#f76f20]/50 shadow-sm' : 'border-gray-200'}`}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-bold text-lg pr-8">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="flex-shrink-0 text-[#f76f20]" />
                  ) : (
                    <ChevronDown className="flex-shrink-0 text-gray-400" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Vous ne trouvez pas la réponse que vous cherchez ?
          </p>
          <a
            href="/contact"
            className="text-[#f76f20] font-medium hover:underline"
          >
            Contactez-nous directement
          </a>
        </div>
      </div>
    </section>
  )
}
