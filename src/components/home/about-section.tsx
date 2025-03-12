import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mike Chang on Fitness, Health, and Expanding Consciousness
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://web-assets.same.dev/868399571/4232424439.jpeg"
              alt="Mike Chang"
              width={600}
              height={800}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg">
              Mike Chang was the creator of Six Pack Shortcuts, the most subscribed-to fitness channel on Youtube up until he left in 2015 with 4 mil+ subscribers, over 500 million views. His simplistic approach to fitness and transformation changed the lives of millions across the world.
            </p>

            <p className="text-lg">
              Although his success as a trainer and an 8 figure entrepreneur created everything that he had ever dreamed of, like wealth, fame, and material possessions, inside he longed for a deeper sense of fulfillment and decided to pursue a path in self realization in 2015.
            </p>

            <p className="text-lg">
              He received a second chance at life when he experienced an extraordinary awakening experience that led him down the next 7 years of his life focusing on mastering his mind and studying a vast array of tools from Qi Gong, Meditation, Breathwork, Yoga, and above all, flow states.
            </p>

            <p className="text-lg">
              He has returned and alchemized these findings into the ultimate transformational system called Flow 60 that develops muscle, endurance and flexibility while also changing the energetic state within a persons body to support in breaking free from fear, trauma, and the limits of the mind into deep states of flow. Mike currently trains a handful of private clients, including some of the leading CEOs in Silicon Valley.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
