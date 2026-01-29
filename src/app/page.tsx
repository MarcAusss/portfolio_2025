"use client";

import ContactSide from "./components/contact";
import ShowcaseProjects from "./components/projects";
import ShowcaseSkills from "./components/SideComponents/ShowcaseSkills";
import IntroSlideAnimation from "./components/SideComponents/slideAnimationIntro";
import Testimonials from "./components/testimonials";
import ClientsProject from "./components/ClientsProject";

export default function Home() {
  return (
    <div className="w-full">
      
      {/*------------ Landing page Section ------------*/}
      <div className="w-full min-h-[80vh] bg-white overflow-hidden" id="home">
        <div className="relative">
          <div className="flex flex-col inset-0">
            <IntroSlideAnimation />
          </div>
        </div>
      </div>
      {/*------------ End of Landing page Section ------------*/}

      {/*------------ Projects Section ------------*/}
      <div className="w-full pb-10 bg-white" id="projects">
        <div className="flex flex-col gap-1">
          <div className="bg-black w-full h-5"></div>
          <div className="bg-black w-full h-4"></div>
          <div className="bg-black w-full h-3"></div>
          <div className="bg-black w-full h-2"></div>
          <div className="bg-black w-full h-1"></div>
        </div>

        <div className="px-4 md:px-0">
          <ShowcaseProjects />
        </div>
      </div>
      {/*------------ End of Projects Section ------------*/}
      <div className="px-4 md:px-0 bg-white">
        <ClientsProject/>
      </div>
      {/*------------ Skills Section ------------*/}
      <div className="w-full px-4 md:px-0">
        <ShowcaseSkills />
      </div>
      {/*------------ End of Skills Section ------------*/}

      {/*------------ Testimonials Section ------------*/}
      <div className="w-full bg-white px-4 md:px-16" id="about">
        <Testimonials />
      </div>
      {/*------------ End of Testimonials Section ------------*/}

      {/*------------ Contact Section ------------*/}
      <div className="bg-white relative px-4 md:px-0" id="contact">
        <h1 className="text-center text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] text-black relative top-9">
          Get in touch
        </h1>
        <div className="flex flex-col gap-1">
          <div className="bg-black w-full h-3"></div>
          <div className="bg-black w-full h-3"></div>
          <div className="bg-black w-full h-2"></div>
          <div className="bg-black w-full h-1"></div>
        </div>
        <div className="bg-black p-5 sm:p-10 md:p-20">
          <ContactSide />
        </div>
      </div>
      {/*------------ End of Contact Section ------------*/}
    </div>
  );
}
