import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-5xl font-extrabold tracking-tight leading-tight">
            Find real connections <span className="text-primary">near you</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Lovely is a modern dating experience for adults 18+. Matches, chat, and premium features behind a simple subscription.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/signup" className="px-6 py-3 rounded-lg bg-primary text-white font-semibold">Get Started</Link>
            <Link href="/pricing" className="px-6 py-3 rounded-lg border">Pricing</Link>
          </div>
        </div>
        <div>
          <div className="rounded-2xl shadow-xl overflow-hidden">
            <img src="/hero.jpg" alt="couple" className="w-full object-cover h-96" />
          </div>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Feature title="Smart Matching" desc="AI-assisted suggestions and filter-based search." />
        <Feature title="Secure Messaging" desc="Private chats with safety controls and reporting." />
        <Feature title="Verified Adults" desc="Designed for 18+ with verification workflows." />
      </section>
    </div>
  )
}

function Feature({title, desc}:{title:string, desc:string}) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  )
}
