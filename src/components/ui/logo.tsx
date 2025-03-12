import Link from 'next/link'
import { ClubFastingLogo } from './club-fasting-logo'

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <ClubFastingLogo width={180} height={60} />
    </Link>
  )
}
