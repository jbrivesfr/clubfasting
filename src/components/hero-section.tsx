import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://web-assets.same.dev/1644045641/3456660729.jpeg)`
      }}
    >
      <div className="container-wide text-white z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Become Healthy and Strong in Your Body and Mind in 60 Days.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Work Directly with Mike to start feeling happy, peaceful, confident and have more energy and focus to achieve your goals.
          </p>
          <p className="mb-10">
            Apply now for the 60 Day Body-Mind Transformation program.<br />
            <span className="italic">Starts on March 15th, 2025</span>
          </p>
          <Link href="https://form.typeform.com/to/iim2mNXS" target="_blank">
            <Button className="bg-flow-brown hover:bg-flow-brown/90 text-white py-2.5 px-8 rounded text-lg">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
