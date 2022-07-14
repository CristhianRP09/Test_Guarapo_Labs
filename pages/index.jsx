import Layout from "../components/Layout";
import UpperLayout from "../components/UpperLayout";
import CharacterContext from "../contexts/Characters";

export default function Home() {

  return (
    <Layout>
      <UpperLayout />

      <div className="absolute top-[404px] w-[100%] bg-slate-400">
        <div className="w-[312px] h-[308px] bg-green-300 mx-auto mb-[24px]"></div>
        <div className="w-[312px] h-[308px] bg-green-300 mx-auto mb-[24px]"></div>
        <div className="w-[312px] h-[308px] bg-green-300 mx-auto mb-[24px]"></div>
        <div className="w-[312px] h-[308px] bg-green-300 mx-auto mb-[24px]"></div>
      </div>
    </Layout>
  )
}
