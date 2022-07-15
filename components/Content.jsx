import Link from "next/link";
import Image from "next/image";

export function Content({ ch }) {

    return (
        <div className="relative mx-auto mt-[48px] medium:mt-[61px] w-[312px] small:w-[644px] medium:w-[760px] large:w-[1020px] grid small:grid-cols-2 medium:grid-cols-3 large:grid-cols-4 gap-x-[20px] gap-y-[24px]">
            {
                ch.map(ch =>
                    <Link key={ch.id} href={`/details/${ch.id}`}>
                        <a>
                            <div className="relative w-[312px] medium:w-[240px] h-[308px] medium:h-[244px] shadow-characterBoxShadow rounded-[4px]  overflow-hidden hover:cursor-pointer">
                                <div className="absolute w-[100%] h-[100%] hover:bg-black hover:bg-opacity-20 z-10"></div>

                                <div className="relative w-[312px] medium:w-[240px] h-[232px] medium:h-[168px]">
                                    <Image
                                        alt='character image'
                                        src={`${ch.image}`}
                                        layout='fill'
                                        objectFit='cover'
                                        priority={true}
                                    />
                                </div>

                                <div className="relative w-[312px] medium:w-[240px] h-[76px]">
                                    <div className="absolute top-[12px] left-[16px] font-roboto font-medium text-black text-opacity-[0.87] text-[100%] tracking-[0.15px]">
                                        {ch.name}
                                    </div>
                                    <div className="absolute bottom-[12px] left-[16px] font-roboto text-black text-opacity-[0.60] text-[14px] tracking-[0.25px]">
                                        {ch.species}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                )
            }
        </div>
    )
}

