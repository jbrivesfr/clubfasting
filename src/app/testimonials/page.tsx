import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    image: "https://web-assets.same.dev/1237442926/2638206993.jpeg",
    quote: "A whole world that I was searching for my entire life and I am now experiencing",
    name: "Sarah Johnson",
    video: true
  },
  {
    image: "https://web-assets.same.dev/2973375897/2410798650.jpeg",
    quote: "Flowtribe is me the best company I've ever joined.",
    name: "Michael Chen",
    video: true
  },
  {
    image: "https://web-assets.same.dev/3348039214/1012340949.jpeg",
    quote: "Highly recommend it to anyone seeking a strong physical and mental update in mindfulness.",
    name: "John Peterson",
    video: true
  },
  {
    image: "https://web-assets.same.dev/1164755820/3482683857.jpeg",
    quote: "Mike is helping me understand myself better and break free from the pain of past and fear.",
    name: "Brandon Siebert",
    title: "Mike is always there for you... Everyday.",
    video: true
  },
  {
    image: "https://web-assets.same.dev/3864634147/2684667897.png",
    quote: "Less judgment and tension. I'm more present now.",
    name: "Matteo Arellano",
    video: true
  },
  {
    image: "https://web-assets.same.dev/95241128/3463315792.png",
    quote: "Flow practice helps me feel more gratitude and positive energy in my body.",
    name: "Lungta",
    video: true
  },
  {
    image: "https://web-assets.same.dev/2194498846/2828148752.png",
    quote: "My lower back pain is gone",
    name: "Marcello Antonio Dreier",
    video: true
  },
  {
    image: "https://web-assets.same.dev/1136011318/2148833592.png",
    quote: "I love having this routine in my life",
    name: "Iain Taylor",
    video: true
  }
]

export default function TestimonialsPage() {
  return (
    <div className="testimonials-page py-16 md:py-24">
      <div className="container-wide">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Members Around the World are Saying about Flow60
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              {testimonial.video ? (
                <div className="relative aspect-video">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full flex items-center justify-center border border-white/30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="p-6">
                {testimonial.title && (
                  <h3 className="text-xl font-bold mb-4">{testimonial.title}</h3>
                )}
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm font-medium text-gray-500">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Experience Flow60 for Yourself
          </h2>
          <Link href="/">
            <Button className="bg-flow-brown hover:bg-flow-brown/90 text-white px-8 py-6 rounded-md text-lg font-medium">
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
