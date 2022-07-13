import AdvancedFilter from "./AdvancedFilter";
import FilterByName from "./FilterByName";

export default function Search() {
  return (
    <div className="flex justify-center">
      <div className="min-w-[360px] w-screen absolute top-[228px] flex flex-col justify-between items-center small:top-[264px] medium:top-[302px] large:w-[1020px] large:mx-auto large:flex-row large:justify-between large:items-start">
        <FilterByName />
        <AdvancedFilter />
      </div>
    </div>
  )
}
