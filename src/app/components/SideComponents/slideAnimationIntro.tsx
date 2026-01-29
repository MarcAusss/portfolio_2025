import IntroDesc from "./introduction";
import NameAnimation from "./nameAnimation";


export default function IntroSlideAnimation(){
    return (
        <div className="">
            <div className="bg-black w-[1905px] h-9 animation-bg1"></div>
            <div className="bg-black w-[1905px] h-12 animation-bg2"></div>
            <div className="bg-black w-[1905px] h-16 animation-bg3"></div>
            <div className="bg-black w-[1905px] h-24 animation-bg4"></div>
            <div className="bg-black w-[1905px] h-32 animation-bg5"></div>
            <div
  className="
    bg-black
    h-40
    animation-bg6
    flex
    flex-col
    justify-center

    w-full
    items-center
    px-4

    xl:w-[1905px]
    xl:items-end
    xl:px-0
  "
>
  <IntroDesc />
</div>

            <div className="bg-black h-[250px] animation-bg7 flex justify-center">
              <NameAnimation/>
            </div>
        </div>
    )
}