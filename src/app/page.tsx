import { Profile } from '@/components/Profile/Profile'
import { Repo } from '@/components/Repo/Repo'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* @ts-expect-error */}
      <Profile id="tsxfabio" />
      {/* @ts-expect-error */}
      <Repo id="tsxfabio" />
    </div>
  )
}
