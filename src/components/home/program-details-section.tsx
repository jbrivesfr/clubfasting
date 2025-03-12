import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const programFeatures = [
  {
    image: 'https://web-assets.same.dev/1715808706/1627675905.jpeg',
    title: 'Coaching and Mentoring',
    description: 'Coaching and Support from Mike via audio, text, and video. Have all your questions answered and get advice tailored to your specific case.'
  },
  {
    image: 'https://web-assets.same.dev/504036275/57489499.jpeg',
    title: 'LIVE Training and Coaching Sessions with Mike Chang',
    description: 'LIVE GROUP SESSION EACH WEEK with Mike (2 hours each) that consist of Physical, Mental, and Emotional training. All sessions are recorded and available to replay in case you miss one.'
  },
  {
    image: 'https://web-assets.same.dev/1394254997/3572231551.jpeg',
    title: 'Iron Will Accountability System',
    description: 'Our accountability system provides you with support and motivation for the ENTIRE 60 days.'
  },
  {
    image: 'https://web-assets.same.dev/2622329122/3928525026.jpeg',
    title: 'Training and Coaching Resources',
    description: 'Videos, Print outs, and other tools and Resources to support you in getting more results.'
  },
  {
    image: 'https://web-assets.same.dev/1992644129/2317164137.jpeg',
    title: 'Start Together, End Together',
    description: 'Go thru the entire transformation journey together with other like-minded individuals and build deep connections and lasting relationships. Everyone starts on the same day and ends on the same day.'
  },
  {
    image: 'https://web-assets.same.dev/2324200087/3438830670.jpeg',
    title: 'Lifetime Access',
    description: 'You will have lifetime access to all the LIVE Sessions and all the resources to keep as part of your personal development library to use at any time.'
  }
]

export function ProgramDetailsSection() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The 60 Day Body Mind Transformation Program
        </h2>

        <div className="mb-12 text-center">
          <div className="aspect-video w-full max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://web-assets.same.dev/466627704/3412966558.jpeg"
              alt="60 Day Body Mind Transformation Program"
              width={1200}
              height={675}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg">Apply now for the 60 Day Body-Mind Transformation program</p>
            <p className="font-bold mb-6">Starts on March 15th, 2025</p>

            <Link href="https://form.typeform.com/to/iim2mNXS" target="_blank">
              <Button className="bg-flow-brown hover:bg-flow-brown/90 text-white px-8 py-6 rounded-md text-lg font-medium">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">What will you gain at the end of this program?</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li className="text-lg">Massive transformation in your physique</li>
            <li className="text-lg">A sense of mental peace and contentment wellness</li>
            <li className="text-lg">A new approach to nutrition so you never have to do another diet again</li>
            <li className="text-lg">Released old mental programming and adopted new empowering ways of thinking</li>
            <li className="text-lg">More confidence and trust in yourself</li>
            <li className="text-lg">Ability to express authentically without worrying about other peoples opinions</li>
          </ol>

          <div className="mt-12 text-center">
            <p className="mb-4">Apply now for the 60 Day Body-Mind Transformation program</p>
            <p className="text-sm mb-6"><strong>Starts on March 15th, 2025</strong></p>

            <Link href="https://form.typeform.com/to/iim2mNXS" target="_blank">
              <Button className="bg-flow-brown hover:bg-flow-brown/90 text-white px-8 py-6 rounded-md text-lg font-medium">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
