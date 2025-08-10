import { notFound } from 'next/navigation'

export default function Profile({ params }: { params: { id: string } }) {
  const userId = params.id
  // In a real app fetch profile by id, check subscription to show contact.
  const profile = {
    id: userId,
    name: 'Hannah',
    age: 28,
    bio: 'Loves hikes, coffee, and design.'
  }

  if (!profile) notFound()

  const hasPremium = false

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow">
      <div className="flex gap-6">
        <div className="w-44 h-44 bg-gray-200 rounded-xl" />
        <div>
          <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
          <p className="text-gray-600 mt-2">{profile.bio}</p>

          <div className="mt-4">
            {hasPremium ? (
              <button className="px-4 py-2 bg-primary text-white rounded-lg">Message</button>
            ) : (
              <a href="/pricing" className="px-4 py-2 bg-primary text-white rounded-lg">Subscribe to contact</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
