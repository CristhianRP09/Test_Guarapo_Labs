import Image from "next/image";
export default function Logo() {
    return (
        <div className="relative mx-auto w-[312px] h-[104px] small:w-[420px] small:h-[140px] medium:w-[600px] medium:h-[200px]">
            <Image
                alt="rick morty logo"
                src="/img/rick-morty-logo.svg"
                width={312}
                height={104}
                layout="responsive"
                priority={true}
            />
        </div>
    )
}
