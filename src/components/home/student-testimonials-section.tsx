import Image from 'next/image'

const testimonials = [
  {
    image: 'https://web-assets.same.dev/2367607747/2197636187.webp',
    name: 'Eden Trejo',
    title: 'Mike is a great coach and mentor, genuinely happy to dig deep into our inner worlds to find ways for us to thrive.',
    quote: 'Besides greatly helping me finding ways to cope with all the emotional and physical aspects of surgery, Flow has become a lifestyle for me. Im always looking forward to practice. My body feels much lighter. My energy has significantly improved. My mind is more at ease. And I can breath so much better. Mike has been a great coach and mentor. He is so genuinely happy to connect with us and dig deep into our inner worlds to help us understanding ourselves better and finding ways to thrive and live life free of pain and fear. We all deserve to live in flow and harmony. Dont think twice and join, you and your body deserve it!'
  },
  {
    image: 'https://web-assets.same.dev/2311863069/3598068463.webp',
    name: 'Alejandro Sobrino',
    title: 'Mike went above and beyond to help me uncover all of the different sides of me that were holding me back.',
    quote: 'Working with Mike was one of the best investments I have ever made in myself. He went above and beyond what I paid for to help me uncover all of the different sides of me that were holding me back. But more than that, he truly cared about seeing me succeed and I guarantee that if you are willing to put in the work he will do the same for you. If you have the opportunity to work with him, dont think twice. The things he teaches will bleed over into all other areas of your life.'
  },
  {
    image: 'https://web-assets.same.dev/4136929768/235760320.jpeg',
    name: 'Anonymous Student',
    title: 'Went to the chiro yesterday and he was so amazed at the difference in my shoulders. He said with a huge huge smile "I can feel the flow of your Chi through your whole body."',
    quote: "I just wanted to thank you again. I have come so far in a week. I knew this was going to be a gift from God and that I needed a plan like this. This is my first week as I started last Thursday, Feb 16th. On that day I wasn't able to get on the floor and do stretching or anything on the floor due to the pain I have told you about. This Thursday I am on the floor stretching and progressing daily. I believe a lot of this is due to your trust in us to do our best and that you don't push to be doing it all perfect. Every day I am better that the day before. Things that use to hurt I breathe through the pain. I know to stop as not to hurt myself but I can breathe through the pains."
  }
]

export function StudentTestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What students are saying about working with Mike
        </h2>

        <div className="grid grid-cols-1 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-flow-brown">{testimonial.title}</h3>
                  <p className="text-gray-700">{testimonial.quote}</p>
                  <p className="text-sm font-medium text-gray-500 italic">- {testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
