export default function StatusDesktop() {
    return (
        <select className={`block w-[240px] h-[56px] font-roboto text-black text-[16px] font-normal text-opacity-60 my-[0px] pl-[14px] bg-white border-[1px] border-black border-opacity-38 rounded-lg appearance-none bg-[url('../public/img/arrow_icon.svg')] bg-no-repeat bg-[top_26px_right_21px]`} defaultValue="">
            <option value="">Status:</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
    )
}
