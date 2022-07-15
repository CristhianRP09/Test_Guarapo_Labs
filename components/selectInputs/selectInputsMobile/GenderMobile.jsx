export default function GenderMobile() {
    return (
        <select className={`block w-[280.6px] h-[56px] font-roboto text-black text-[16px] font-normal text-opacity-60 my-[0px] pl-[14px] bg-white border-[1px] border-black border-opacity-38 rounded-lg appearance-none bg-[url('../public/img/arrow_icon.svg')] bg-no-repeat bg-[top_26px_right_21px]`} defaultValue="">
            <option value="">Gender:</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
    )
}

