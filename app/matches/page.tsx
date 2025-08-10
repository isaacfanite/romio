import Link from 'next/link'

export default function Matches() {
  // In a real app, check subscription status from server/session
  const hasPremium = false

  if (!hasPremium) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white p-8 rounded-2xl shadow text-center">
          <h2 className="text-2xl font-bold">Unlock Matches</h2>
          <p className="mt-2 text-gray-600">This feature is behind the premium paywall. Subscribe to see your recommended matches.</p>
          <div className="mt-6">
            <Link href="/pricing" className="px-5 py-3 rounded-lg bg-primary text-white">View pricing</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold">Your Matches</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Render match cards */}
      </div>
    </div>
  )
}
