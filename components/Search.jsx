import AdvancedFilterButton from "./AdvancedFilterButton";
import FilterByName from "./FilterByName";

export default function Search() {
  return (
    <div className="absolute top-57 w-screen small:top-66 medium:top-75.5">
        <FilterByName />
        <AdvancedFilterButton />
    </div>
  )
}
