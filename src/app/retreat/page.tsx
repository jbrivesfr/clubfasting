import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function RetreatPage() {
  return (
    <div className="retreat-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#2b2f2a] to-[#2b2f2a]/90 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
             style={{ backgroundImage: "url('https://web-assets.same.dev/671759307/2716206023.png')" }}></div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Rejuvenate Your Health<br />
              Inner Peace and<br />
              Personal Power Within
            </h1>
            <p className="text-lg mb-8 text-white/90">
              Experience 7 days in a tropical oasis with Mike Chang to come back to a state of total well-being
            </p>
            <Button className="bg-flow-brown hover:bg-flow-brown/90 text-white px-8 py-6 rounded-md text-lg font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Retreat Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            A retreat for your body, mind, and emotions
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              The Flow60 Bali Retreat is your chance to step away from daily routines, disconnect from the familiar, and reset your mind and body.
            </p>
            <p className="text-lg mb-6">
              In this retreat, youll spend 7 days with Mike Chang, the creator of Flow60 a unique training system that combines fitness with spirituality into a daily 60 minute practice. Youll learn the foundations of this training system to enhance your strength, endurance, and flexibility while cultivating inner peace and self-acceptance.
            </p>
            <p className="text-lg mb-6">
              Youll learn how to stay present and centered in lifes challenges, break free from old habits, and open yourself to new possibilities. Through the masterclasses and workshops, youll learn to release tension, shift your energy, and cultivate mental clarity and focus.
            </p>
            <p className="text-lg mb-6">
              Well explore how beliefs shape your life, how to change them, and how to free yourself from trapped emotions. Youll take home practical tools to create lasting transformation in any area of life.
            </p>
            <p className="text-lg mb-8">
              Finally, youll integrate these lessons through curated Bali experiences, designed to rejuvenate your body as you explore the beautiful island of Bali, also known as the island of the gods.
            </p>

            <div className="aspect-video w-full rounded-lg overflow-hidden relative">
              <Image
                src="https://web-assets.same.dev/671759307/2716206023.png"
                alt="Bali Retreat"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full flex items-center justify-center border border-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            ReEnergize your life
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://web-assets.same.dev/3276830074/954723695.jpeg"
                  alt="Optimize your Physical Health"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-flow-brown">Optimize your Physical Health, Increase Energy Levels and Transform your Body</h3>
            </div>

            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://web-assets.same.dev/493423794/269400150.jpeg"
                  alt="Reset your State of Mind"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-flow-brown">Reset your State of Mind to be Calm, Relaxed and Centered</h3>
            </div>

            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://web-assets.same.dev/524651994/3297128621.jpeg"
                  alt="Break Free from Old Patterns"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-flow-brown">Break Free from Old Patterns and Ways of Thinking</h3>
            </div>

            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://web-assets.same.dev/912352093/2353312320.jpeg"
                  alt="Gain a Deeper Understanding of Self"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-flow-brown">Gain a Deeper Understanding of Self</h3>
            </div>

            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://web-assets.same.dev/223946065/2044078546.jpeg"
                  alt="Start Living to your Fullest Potential"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-flow-brown">Start Living to your Fullest Potential</h3>
            </div>

            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://web-assets.same.dev/155826932/1786100539.jpeg"
                  alt="Create new Relationships"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-flow-brown">Create new Relationships and make Friends for Life</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Mike Chang */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About your host - Mike Chang
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://web-assets.same.dev/3972225654/3912088259.jpeg"
                alt="Mike Chang"
                width={600}
                height={800}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg">
                Few experiences can match the impact of being in the presence of Mike Chang. You'll learn firsthand from a true master in personal development during this 7 day Flow60 retreat. Mike will guide you through daily exercises, masterclasses, and workshops, coaching you on your specific goals, while offering invaluable insights that will impact your life deeply. Join this week-long immersive experience and be prepared to be inspired, motivated, and equipped with the tools to achieve extraordinary results.
              </p>

              <p className="text-lg">
                Mike Chang, the former creator of Six Pack Shortcuts, revolutionized fitness with his simplistic approach, impacting millions worldwide and had the most subscribed Youtube channel in fitness at the time with over 4 million subscribers. After achieving wealth and fame, he sought deeper fulfillment and embarked on a journey of self-realization in 2015. A life-altering awakening led him to dedicate the next 7 years to mastering his mind and exploring Qi Gong, Meditation, Breathwork, Yoga, and flow states.
              </p>

              <p className="text-lg">
                Now, he has taken everything he has learned to create Flow60, the ultimate transformational system that integrates health and fitness, self realization with a practical approach thats simple to integrate into todays modern busy lifestyle and has transformed thousands of lives through his social media content, video courses, and online 60 day workshops.
              </p>

              <p className="text-lg">
                This retreat will be the ultimate experience to revitalize your energy, purpose, and sense of self, leaving you feeling rejuvenated, peaceful, and fully prepared to pursue your aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-flow-brown text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Experience a life-changing retreat in Bali
            </h2>
            <p className="text-xl mb-10">
              Join Mike Chang for this transformative 7-day journey to rejuvenate your body, clear your mind, and reconnect with your true self.
            </p>
            <Button className="bg-white hover:bg-white/90 text-flow-brown px-8 py-6 rounded-md text-lg font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
