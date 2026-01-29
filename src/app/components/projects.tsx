import SlideProject from "./SideComponents/SlideProjects";
import VideoProject from "./SideComponents/videoPorject";

export default function ShowcaseProjects() {
  return (
    <div className="">
      {/* Slide Project Section */}
      <div className="mt-4">
        <SlideProject />
      </div>
      {/* Video Project Section */}
      
      <div className="">
        <VideoProject />
      </div>
    </div>
  );
}
