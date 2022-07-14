import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="relative min-w-[360px] w-[100%] h-[60px] bg-white shadow-headerShadow">
            <Link href="/">
                <a>
                    <div className="absolute left-[24px] top-[6px] small:left-[48px] medium:left-[120px] large:left-[210px]">
                        <Image
                            alt="rick-morty-navbar"
                            src="/img/rick-morty-navbar.svg"
                            width={46}
                            height={49}
                            priority={true}
                        />
                    </div>
                </a>
            </Link>
        </header>
    )
}
