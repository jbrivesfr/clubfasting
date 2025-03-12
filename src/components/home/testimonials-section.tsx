import Image from 'next/image'

const testimonials = [
  {
    image: "https://web-assets.same.dev/2367607747/2197636187.webp",
    name: "Sophie Martin",
    role: "Membre depuis 6 mois",
    weight_loss: "-7kg",
    quote: "Grâce à Club Fasting, j'ai enfin trouvé une méthode qui fonctionne avec mon emploi du temps chargé. Les recettes low-carb sont délicieuses et j'ai perdu 7kg en suivant le programme 16:8. L'accompagnement de la communauté m'a vraiment aidée à rester motivée."
  },
  {
    image: "https://web-assets.same.dev/2311863069/3598068463.webp",
    name: "Thomas Dupont",
    role: "Membre depuis 3 mois",
    weight_loss: "-5kg",
    quote: "Les séances HIIT proposées sont parfaites pour optimiser les résultats du jeûne. En seulement 3 mois, j'ai perdu 5kg et gagné en énergie. L'application est intuitive et les conseils quotidiens m'ont permis de surmonter les difficultés du début."
  },
  {
    image: "https://web-assets.same.dev/4136929768/235760320.jpeg",
    name: "Marie Leblanc",
    role: "Membre depuis 8 mois",
    weight_loss: "-12kg",
    quote: "Après avoir essayé de nombreux régimes sans succès, Le Fasting a transformé ma relation avec la nourriture. J'ai perdu 12kg progressivement et durablement. Le soutien des coachs est exceptionnel et les webinaires ont répondu à toutes mes questions."
  },
  {
    image: "https://web-assets.same.dev/1164755820/3482683857.jpeg",
    name: "Pierre Moreau",
    role: "Membre depuis 4 mois",
    weight_loss: "-8kg",
    quote: "Au-delà de la perte de poids, c'est ma santé qui s'est améliorée. Mon taux de cholestérol a baissé et je me sens beaucoup plus énergique. Les exercices HIIT sont adaptés à mon niveau et j'apprécie les alternatives proposées pour chaque exercice."
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#f76f20]/10 text-[#f76f20] font-medium text-sm mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ils ont transformé leur vie avec Club Fasting
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos membres ont réussi à atteindre leurs objectifs grâce au jeûne intermittent 16:8
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#f76f20]/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[#f76f20] font-bold text-xl">{testimonial.weight_loss}</span>
                </div>
              </div>

              <blockquote className="italic text-gray-700 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-6 flex">
                <div className="flex text-[#f76f20]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <span className="ml-auto text-sm text-gray-500">Vérifié</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
