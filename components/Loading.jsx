import BackgroundPortal from './loading/BackgroundPortal'
import SpiralPortal from './loading/SpiralPortal'

export default function Loading() {
    return (
        <div className="relative w-screen h-screen flex justify-center items-center">
            <div className="absolute w-[450px] h-[450px]">
                <BackgroundPortal />
                <SpiralPortal />
            </div>
        </div>
    )
}



