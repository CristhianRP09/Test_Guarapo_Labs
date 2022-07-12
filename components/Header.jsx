import Image from "next/image";

export default function Header() {
    return (
        <div className="relative top-0 w-screen h-15 bg-white shadow-headerShadow">
            <div className="absolute left-6 top-1.5 small:left-12 medium:left-30 large:left-52.5">
                <Image
                    alt="rick-morty-navbar"
                    src="/img/rick-morty-navbar.svg"
                    width={46}
                    height={49}
                    priority={true}
                />
            </div>
        </div>
    )
}
