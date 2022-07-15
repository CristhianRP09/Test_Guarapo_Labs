import Link from "next/link";
import CharacterName from "../../components/details/CharacterName";
import CharacterPicture from "../../components/details/CharacterPicture";
import GoBackButton from "../../components/details/GoBackButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useRouter } from 'next/router';
import Informations from "../../components/details/Informations";
import Episodes from "../../components/details/Episodes";
import Loading from "../../components/Loading";

export default function Details({ data }) {

    const router = useRouter();

    if (router.isFallback) {
        return (
            <div className="relative min-w-[360px] w-[100vw] min-h-[100vh] h-fit bg-white z-0 overflow-x-hidden ">
                <Header />
                <Loading />
                <Footer />
            </div>
        )
    }

    return (
        <div className="relative min-w-[360px] w-[100vw] min-h-[100vh] h-fit bg-white z-0 overflow-x-hidden ">
            <Header />
            <main className="relative m-0 pt-[24px] medium:pt-[16px] pb-[83px] medium:pb-[36px]">
                <Link href="/">
                    <a><GoBackButton /></a>
                </Link>

                <CharacterPicture img={data.image} />

                <CharacterName name={data.name} />

                <div className="relative w-[312px] small:w-[644px] medium:w-[760px] large:w-[846px] mx-auto small:bottom-[13px] medium:bottom-[3px] small:flex justify-between items-start">
                    <Informations data={data} />
                    <Episodes data={data} />
                </div>

            </main>
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
            fallback: true
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