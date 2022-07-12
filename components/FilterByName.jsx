import Image from 'next/image';

export default function FilterByName() {
    return (
        <div className="relative p-0 m-0 w-78 h-14 mx-auto border-solid border-1.5 border-black border-opacity-50 rounded-md small:w-161">
            <div className="absolute left-4.75 top-5">
                <Image
                    alt="lupa"
                    src="/img/lupa.svg"
                    width={17.5}
                    height={17.5}
                    priority={true}
                />
            </div>

            <div className="absolute top-4 left-12">
                <input className="w-62 h-6 focus:outline-none" type="text" placeholder="Filter by name..." />
            </div>
        </div>
    )
}
