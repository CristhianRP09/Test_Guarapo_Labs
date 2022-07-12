import Image from 'next/image';

export default function AdvancedFilterButton() {
    return (
        <div className="relative w-78 h-14 p-0 mx-auto mt-4 bg-#E3F2FD rounded flex justify-center items-center shadow-advancedOptionsShadow small:w-161">
            <div className="absolute left-5.375 top-5.25 w-4.65 h-3 flex justify-center items-center">
                <Image
                    alt="filter icon"
                    src="/img/filter_icon.svg"
                    width={18.6}
                    height={12}
                    priority={true}
                />
            </div>

            <p className="font-roboto text-#2196F3 text-sm tracking-separation">ADVANCED FILTERS</p>
        </div>
    )
}
