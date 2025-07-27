"use client";
import ContactSide from "./components/contact";
import ShowcaseProjects from "./components/projects";
import ShowcaseSkills from "./components/SideComponents/ShowcaseSkills";
import IntroSlideAnimation from "./components/SideComponents/slideAnimationIntro";
import Testimonials from "./components/testimonials";


export default function Home() {
 
  
  return (
    <div className="w-[100%]">
      
      {/*------------ Landing page Section ------------*/}
      <div className="w-full h-screen bg-[#ffffff] overflow-hidden">
        <div className="relative">
          <div className="flex flex-col absolute">
            <IntroSlideAnimation/>
          </div>
        </div>
      </div>
      {/*------------ End of Landing page Section ------------*/}


      {/*------------ Projects Section ------------*/}
      <div className="w-full mt-10 pb-10 bg-white">
        <div className="flex flex-col gap-1">
          <div className="bg-black w-full h-5"></div>
          <div className="bg-black w-full h-4"></div>
          <div className="bg-black w-full h-3"></div>
          <div className="bg-black w-full h-2"></div>
          <div className="bg-black w-full h-1"></div>
        </div>
      {/*------------ End of Projects Section ------------*/}

        <ShowcaseProjects/>
      </div>


      {/*------------ Skills Section ------------*/}
      <div className="w-full">
        <ShowcaseSkills/>
      </div>
      {/*------------ End of Skills Section ------------*/}


      {/*------------ Testimonials Section ------------*/}
      <div className="w-full bg-white">
        <Testimonials/>
      </div>
      {/*------------ End of Testimonials Section ------------*/}


      {/*------------ Contact Section ------------*/}
      <div className="bg-black p-20">
        <ContactSide/>
      </div>
      {/*------------ End of Contact Section ------------*/}

    </div>
  );
}

// when i hover the logo at the nav bar it sparks a white small particles 