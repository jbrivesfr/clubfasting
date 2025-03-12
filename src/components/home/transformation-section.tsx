import Image from 'next/image'

const transformationSteps = [
  {
    icon: "https://web-assets.same.dev/1708721384/2792340084.png",
    title: "LEARN",
    description: "Learning and understanding information mentally. This is done thru Video Lessons, Workbook, Interaction with other students, and Live Sessions"
  },
  {
    icon: "https://web-assets.same.dev/3077661211/2213397958.png",
    title: "APPLY",
    description: "Expressing what you have learned through your words, action, feeling and receiving feedback to continue the learning process. This is done through Role Play Exercises and Games, Contemplation and Self-Realization"
  },
  {
    icon: "https://web-assets.same.dev/811239537/2767574478.webp",
    title: "IMPRINT",
    description: "Reprogramming your subconscious mind and your state of being, to permanently change the way your body feels. This is done through repetitive action using Daily Flow Practices (physical training), Meditation, and Discussions"
  }
]

export function TransformationSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Experience a Permanent Transformation
        </h2>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16">
          Most people quickly forget most of what they learn and never get to apply it to their life. In the 60 Day Body-Mind Transformation, we focus on the entire process needed for real transformation: LEARN &gt; APPLY &gt; IMPRINT. We will go through this entire process over and over during the program to create powerful lasting changes in your mind, body, emotions, and soul.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {transformationSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-6">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
