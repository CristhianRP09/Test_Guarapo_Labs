import Link from "next/link";
import GoBackButton from "../../components/details/GoBackButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Details({ data }) {
    return (
        <div className="relative min-w-[360px] w-[100vw] min-h-[100vh] h-fit bg-white z-0 overflow-x-hidden ">
            <Header />
            <h1>{data.name}</h1>
            <Footer />
        </div>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await res.json();
        const paths = data.results.map(character => {
            return { params: { id: `${character.id}` } }
        })
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getStaticProps({ params }) {
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
        const data = await res.json();
        return { props: { data } }
    } catch (error) {
        console.log(error);
    }
}