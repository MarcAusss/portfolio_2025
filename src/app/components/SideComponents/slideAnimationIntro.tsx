import IntroDesc from "./introduction";
import NameAnimation from "./nameAnimation";


export default function IntroSlideAnimation(){
    return (
        <div className="">
            <div className="bg-black w-[1905px] h-10 animation-bg1"></div>
            <div className="bg-black w-[1905px] h-14 animation-bg2"></div>
            <div className="bg-black w-[1905px] h-20 animation-bg3"></div>
            <div className="bg-black w-[1905px] h-28 animation-bg4"></div>
            <div className="bg-black w-[1905px] h-36 animation-bg5"></div>
            <div className="bg-black w-[1905px] h-44 animation-bg6 flex flex-col items-end justify-center ">
              <IntroDesc/>
            </div>
            <div className="bg-black h-[350px] animation-bg7 flex items-center justify-center">
              <NameAnimation/>
            </div>
        </div>
    )
}