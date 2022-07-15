export default function SpecieMobile() {
    return (
        <select className={`block w-[280.6px] h-[56px] font-roboto text-black text-[16px] font-normal text-opacity-60 my-[0px] pl-[14px] bg-white border-[1px] border-black border-opacity-38 rounded-lg appearance-none bg-[url('../public/img/arrow_icon.svg')] bg-no-repeat bg-[top_26px_right_21px]`} defaultValue="">
            <option value="">Specie:</option>
            <option value="Human">Human</option>
            <option value="Humanoid">Human</option>
            <option value="Alien">Alien</option>
        </select>
    )
}
