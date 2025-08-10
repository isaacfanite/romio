export default function Users() {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold">Users</h2>
      <table className="w-full mt-6">
        <thead className="text-left">
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">Hannah</td>
            <td className="py-2">hannah@example.com</td>
            <td className="py-2">active</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
