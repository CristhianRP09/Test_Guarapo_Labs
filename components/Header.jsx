import Image from "next/image";

export default function Header() {
    return (
        <div className="w-100% h-15 bg-blue-500 shadow-headerShaow">
            <div>
                <Image
                    alt="rick and morty logo"
                    src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
                    width={1200}
                    height={400}
                />
            </div>
        </div>
    )
}
