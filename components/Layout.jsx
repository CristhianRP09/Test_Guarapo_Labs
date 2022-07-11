import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
    return (
        <div className="relative min-w-90 w-100% min-h-screen bg-white">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
