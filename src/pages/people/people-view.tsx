import { ChevronLeft, ChevronRight } from "lucide-react"
import usePeopleViewModel, { Result } from "./_people-view-model"
import Breadcrumbs from "../../components/breadcrumbs"

const tableHeadColumn = [
  { label: `Name` },
  { label: `Gender` },
  { label: `Height` },
  { label: `Mass` },
  { label: `Birth Year` },
]

export default function PeopleView() {
  const model = usePeopleViewModel()

  return (
    <div className="h-screen py-6 px-10 flex flex-col gap-4">

      <Breadcrumbs
        menus={[]}
      />

      <div className="bg-gray-950 text-white flex flex-col gap-4 p-6 rounded-lg border-2 border-yellow-400 shadow-md shadow-yellow-400">
        <h1 className="text-4xl font-bold">People</h1>

        <div className="flex justify-between items-center bg-slate-800 p-2 px-3">
          <input
            className="border rounded-lg px-4 py-2 w-[256px] text-gray-950"
            type="text"
            placeholder="Search..."
            {...model.register(`q`)}
          />
          <div className="flex items-center gap-2 font-semibold">
            <button
              className="flex items-center disabled:text-gray-300"
              onClick={() => model.setValue(`page`, model.watch(`page`) - 1)}
              disabled={model.data?.previous === null || model.isLoading || model.watch(`page`) === 1}
            >
              <ChevronLeft size={18} className="mt-1" />
              <p>Prev</p>
            </button>
            <p>{model.watch(`page`)}</p>
            <button
              className="flex items-center disabled:text-gray-300"
              onClick={() => model.setValue(`page`, model.watch(`page`) + 1)}
              disabled={model.data?.next === null || model.isLoading || model.watch(`page`) === Math.round(model.data?.count! / 10)}
            >
              <p>Next</p>
              <ChevronRight size={18} className="mt-1" />
            </button>
          </div>
        </div>

        <div className="border rounded-lg text-sm">
          <table className="divide-y w-full table-fixed">
            <thead className="">
              <tr className="divide-x ">
                <th className="py-2 px-3">Name</th>
                <th className="py-2 px-3">Gender</th>
                <th className="py-2 px-3">Height</th>
                <th className="py-2 px-3">Mass</th>
                <th className="py-2 px-3">Birth Year</th>
              </tr>
            </thead>
            <tbody className="">
              {model.isSuccess &&
                model.data?.results?.map((val: Result, index: number) => (
                  <tr className={`divide-x ${index % 2 === 0 && "bg-slate-900"}`}>
                    <td className="py-2 px-3">{val.name}</td>
                    <td className="py-2 px-3">{val.gender}</td>
                    <td className="py-2 px-3">{val.height}</td>
                    <td className="py-2 px-3">{val.mass}</td>
                    <td className="py-2 px-3">{val.birth_year}</td>
                  </tr>
                ))
              }
              {model.isLoading &&
                Array(10).fill("").map((_, i) =>
                  <tr key={i} className={`divide-x ${i % 2 === 0 && "bg-slate-900"}`}>
                    {Array(tableHeadColumn.length).fill("").map((_, i) =>
                      <td key={i}>
                        <div className="animate-pulse py-2 px-3">
                          <div className="h-[18px] w-full bg-gray-300 rounded-lg" />
                        </div>
                      </td>
                    )}
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
}
