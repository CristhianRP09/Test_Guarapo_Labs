import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
    return (
        <div className="relative min-w-[360px] w-100% min-h-screen bg-white z-0">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
