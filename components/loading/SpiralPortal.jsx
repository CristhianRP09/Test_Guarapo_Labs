import Image from 'next/image';

export default function SpiralPortal() {
    return (
        <div className="top-[40px] left-[65px] absolute w-[200px] h-[200px] animate-rotateSpiral">
            <Image
                alt="spiral-portal"
                src="/img/spiral-frame.svg"
                width={165}
                height={165}
                layout='fill'
                objectFit='fill'
                priority={true}
            />
        </div>
    )
}
