import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function MushroomsPage() {
  return (
    <div className="py-16 md:py-32">
      <div className="container-wide text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          HighVibe Mushrooms
        </h1>
        <p className="text-xl mb-12 max-w-3xl mx-auto">
          Coming soon - Mike Chang's premium functional mushroom products designed to boost your energy, immunity, and cognitive function naturally.
        </p>
        <Link href="/">
          <Button className="bg-flow-brown hover:bg-flow-brown/90 text-white px-8 py-6 rounded-md text-lg font-medium">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
