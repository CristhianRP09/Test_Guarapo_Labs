import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
    return (
        <div className="relative min-w-[360px] w-100% min-h-screen bg-white">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
