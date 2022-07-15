import Image from 'next/image';

export default function BackgroundPortal() {
    return (
        <div className='absolute w-[300px] h-[300px] animate-rotateBackground'>
            <Image
                alt="background-portal"
                src="/img/background-frame.svg"
                width={200}
                height={200}
                layout='fill'
                objectFit='fill'
                priority={true}
            />
        </div>
    )
}
