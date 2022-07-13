import Image from 'next/image';
import { useState } from 'react';

export default function FilterByName2() {
    return (
        <input className="block h-[56px] py-[16px] pl-[48px] mx-0 my-0 w-[312px] focus:outline-none text-[18px] border-black border-[1px] border-opacity-50 rounded-md bg-[url('../public/img/lupa.svg')] bg-no-repeat bg-[left_19px_top_20px] small:w-[644px] medium:w-[760px] large:w-[240px]" type="text" placeholder="Filter by name..." />
    )
}
