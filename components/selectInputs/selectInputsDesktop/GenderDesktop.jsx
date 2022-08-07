import { useContext } from "react";
import { UrlFilterContext } from "../../../contexts/UrlFilterContext";

export default function GenderDesktop() {
    const { gender, setGender } = useContext(UrlFilterContext);

    const addGender = gen => {
        if (gen !== '') {
            setGender(`&gender=${gen}`);
        }
    }

    const deleteGender = () => {
        setGender('');
    }

    const updateGender = gen => {
        setGender(`&gender=${gen}`);
    }

    const filterByGender = e => {
        const data = e.target.value;
        if (!gender) {
            addGender(data);
        } else {
            if(data === ''){
                deleteGender();
            } else if(gender !== `&gender=${data}`){
                updateGender(data);
            }
        }
    }

    return (
        <select onChange={filterByGender} className={`block w-[240px] h-[56px] font-roboto text-black text-[16px] font-normal text-opacity-60 my-[0px] pl-[14px] bg-white border-[1px] border-black border-opacity-38 rounded-lg appearance-none bg-[url('../public/img/arrow_icon.svg')] bg-no-repeat bg-[top_26px_right_21px]`} defaultValue="">
            <option value="">Gender:</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
    )
}

