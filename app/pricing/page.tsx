import Link from 'next/link'

export default function Pricing() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-3xl font-extrabold">Pricing</h2>
        <p className="mt-2 text-gray-600">Choose a plan that works for you.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Plan title="Free" price="$0" bullets={["Create profile","Browse limited"]} cta="/signup" />
          <Plan title="Premium" price="$9.99/mo" bullets={["Unlimited matches","Contact profiles","Boost"]} cta="/checkout" />
          <Plan title="Pro" price="$19.99/mo" bullets={["Featured","Priority support","Extra filters"]} cta="/checkout" />
        </div>
      </div>
    </div>
  )
}

function Plan({title, price, bullets, cta}:{title:string, price:string, bullets:string[], cta:string}) {
  return (
    <div className="p-6 rounded-2xl border">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-4 text-2xl font-bold">{price}</div>
      <ul className="mt-4 space-y-2 text-gray-600">
        {bullets.map(b => <li key={b}>• {b}</li>)}
      </ul>
      <div className="mt-6">
        <Link href={cta} className="px-4 py-2 bg-primary text-white rounded-lg inline-block">Choose</Link>
      </div>
    </div>
  )
}
