import logo from "@assets/star_wars_logo.png"
import people_bg from "@assets/people_bg.jpg"
import planets_bg from "@assets/planets_bg.jpg"
import films_bg from "@assets/films_bg.jpg"
import useHomeViewModel from "./_home-view-model"

export default function HomeView() {
  const model = useHomeViewModel()
  return (
    <div className="flex flex-col items-center p-8 gap-10">

      <img src={logo} alt="" className="h-[124px]" />
      <div className="flex gap-8">
        <div
          className="relative h-[320px] w-[240px] bg-white rounded-lg hover:-translate-y-2 duration-300 shadow-lg shadow-yellow-400 cursor-pointer"
          onClick={() => model.navigate(`/people`)}
        >
          <img src={people_bg} alt="" className="object-cover w-full h-full rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg"></div>
          <p className="absolute text-yellow-400 font-bold bottom-8 transform left-1/2 -translate-x-1/2 text-2xl">PEOPLE</p>
        </div>

        <div
          className="relative h-[320px] w-[240px] bg-white rounded-lg hover:-translate-y-2 duration-300 shadow-lg shadow-yellow-400 cursor-pointer"
          onClick={() => model.navigate(`/planets`)}
        >
          <img src={planets_bg} alt="" className="object-cover w-full h-full rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg"></div>
          <p className="absolute text-yellow-400 font-bold bottom-8 transform left-1/2 -translate-x-1/2 text-2xl">PLANETS</p>
        </div>

        <div
          className="relative h-[320px] w-[240px] bg-white rounded-lg hover:-translate-y-2 duration-300 shadow-lg shadow-yellow-400 cursor-pointer"
          onClick={() => model.navigate(`/films`)}
        >
          <img src={films_bg} alt="" className="object-cover w-full h-full rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg"></div>
          <p className="absolute text-yellow-400 font-bold bottom-8 transform left-1/2 -translate-x-1/2 text-2xl">FILMS</p>
        </div>
      </div>

    </div>
  )
}
