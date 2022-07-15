import CharacterInformation from "./CharacterInformation";

export default function Informations({ data }) {
  return (
    <div className="relative mt-[32px] small:mt-[0px] mb-[52px] small:mb-[0px]">
        <div className="relative mb-[16px] font-roboto font-[500] text-[20px] text-[#8E8E93] tracking-[0.15px]">Informations</div>
        <CharacterInformation attibute={"Gender"} value={data.gender}  />
        <CharacterInformation attibute="Status" value={data.status}  />
        <CharacterInformation attibute="Specie" value={data.species}  />
        <CharacterInformation attibute="Origin" value={data.origin.name}  />
        <CharacterInformation attibute="Type" value={data.type}  />
        <CharacterInformation attibute="Location" value={data.location.name}  />
    </div>
  )
}