
const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-xs disabled:opacity-50 disabled:cursor-not-allowed  ">
        Prev
      </button>
      
      <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-xs disabled:opacity-50 disabled:cursor-not-allowed  ">
        Next
      </button>
    </div>
  )
}

export default Pagination
