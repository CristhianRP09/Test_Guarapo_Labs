import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex justify-center">
            <div className="w-78 h-26 mt-8 small:w-105 small:h-35 medium:w-150 medium:h-50 medium:mt-6.25">
                <Image
                    alt="rick morty logo"
                    src="/img/rick-morty-logo.svg"
                    width={312}
                    height={104}
                    layout="responsive"
                />
            </div>
        </div>
    )
}
