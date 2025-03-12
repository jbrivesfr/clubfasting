import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-center px-4">
      <h1 className="text-6xl font-bold text-flow-brown mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button className="bg-flow-brown hover:bg-flow-brown/90 text-white px-6 py-2">
          Return to Home
        </Button>
      </Link>
    </div>
  )
}
