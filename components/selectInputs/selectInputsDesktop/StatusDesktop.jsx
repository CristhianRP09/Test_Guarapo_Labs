import { useContext } from "react";
import { UrlFilterContext } from "../../../contexts/UrlFilterContext";

export default function StatusDesktop() {
    const { status, setStatus } = useContext(UrlFilterContext);

    const addStatus = stat => {
        if (stat !== '') {
            setStatus(`&status=${stat}`);
        }
    }

    const deleteStatus = () => {
        setStatus('');
    }

    const updateStatus = stat => {
        setStatus(`&status=${stat}`);
    }

    const filterByStatus = e => {
        const data = e.target.value;
        if (!status) {
            addStatus(data);
        } else {
            if (data === '') {
                deleteStatus();
            } else if (status !== `&status=${data}`) {
                updateStatus(data);
            }
        }
    }

    return (
        <select onChange={filterByStatus} className={`block w-[240px] h-[56px] font-roboto text-black text-[16px] font-normal text-opacity-60 my-[0px] pl-[14px] bg-white border-[1px] border-black border-opacity-38 rounded-lg appearance-none bg-[url('../public/img/arrow_icon.svg')] bg-no-repeat bg-[top_26px_right_21px]`} defaultValue="">
            <option value=''>Status:</option>
            <option value='alive'>Alive</option>
            <option value='dead'>Dead</option>
            <option value='unknown'>Unknown</option>
        </select>
    )
}
