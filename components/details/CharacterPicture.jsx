import Image from "next/image";

export default function CharacterPicture({ img }) {
    return (
        <div className="relative mt-[16px]">
            <div className="relative mx-auto w-[146px] h-[148px] small:w-[200px] small:h-[200px] medium:w-[225px] medium:h-[225px] large:w-[300px] large:h-[300px] rounded-[150px] overflow-hidden border-[5px] border-[#f2f2f7] box-content small:bottom-[45px]">
                <Image
                    alt='character picture'
                    src={`${img}`}
                    layout='fill'
                    objectFit='fill'
                    priority={true}
                />
            </div>
        </div>
    )
}
