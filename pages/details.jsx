import Link from "next/link";
import GoBackButton from "../components/details/GoBackButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Details() {
    return (
        <div className="relative min-w-[360px] w-[100vw] min-h-[100vh] h-fit bg-white z-0 overflow-x-hidden ">
            <Header />

            <Link href="/">
                <a><GoBackButton /></a>
            </Link>

            <Footer />
        </div>
    )
}
