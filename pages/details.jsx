import Link from "next/link";
import GoBackButton from "../components/details/GoBackButton";
import Layout from "../components/Layout";

export default function Details() {
    return (
        <Layout>
            <Link href="/">
                <a><GoBackButton /></a>
            </Link>
        </Layout>
    )
}
