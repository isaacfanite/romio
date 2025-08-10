export default function Avatar({name}:{name:string}) {
  return (
    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-semibold">
      {name[0]}
    </div>
  )
}
