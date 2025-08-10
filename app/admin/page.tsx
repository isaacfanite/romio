import Link from 'next/link'

export default function Admin() {
  // In a real app restrict to admin users via middleware
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div>
          <Link href="/admin/users" className="px-4 py-2 rounded-lg border">Users</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat title="Total Users" value="1,204" />
        <Stat title="Premium" value="312" />
        <Stat title="Reports" value="7" />
      </div>

      <section className="mt-8 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold">Recent signups</h2>
        <ul className="mt-4 space-y-2">
          <li className="p-3 border rounded">Hannah — joined 2 hours ago</li>
          <li className="p-3 border rounded">Marcus — joined 1 day ago</li>
        </ul>
      </section>
    </div>
  )
}

function Stat({title, value}:{title:string, value:string}) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
    </div>
  )
}
