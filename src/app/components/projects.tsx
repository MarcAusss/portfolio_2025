import SlideProject from "./SideComponents/SlideProjects";
import VideoProject from "./SideComponents/videoPorject";

export default function ShowcaseProjects() {
  return (
    <div className="my-10">
      {/* Architecture Section */}
      <div className="px-6 lg:px-20 mb-10">
        <div className="flex flex-col lg:flex-row justify-around gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-[40%]">
            <div className="lg:sticky top-[35%] p-4 text-black">
              <h1 className="text-4xl md:text-5xl font-bold">ARchi</h1>
              <i className="text-2xl text-gray-500">Architectural Firm</i>
              <div className="pt-5 text-base md:text-lg leading-relaxed">
                <p className="text-2xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis eveniet natus iste, dolorem doloribus in facilis maiores ipsum neque nostrum illo excepturi ut, tempore dolorum accusantium placeat enim? Architecto accusantium inventore pariatur repudiandae quod totam nulla praesentium numquam sequi quam, tempore, quo ratione recusandae quis, deleniti illo modi suscipit itaque.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[60%]">
            <img
              src="/images/archi_website.png"
              alt="Architecture"
              className="w-full h-auto lg:h-[2000px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Video Project Section */}
      <div className="bg-black">
        <VideoProject />
      </div>

      {/* Slide Project Section */}
      <div>
        <SlideProject />
      </div>
    </div>
  );
}
