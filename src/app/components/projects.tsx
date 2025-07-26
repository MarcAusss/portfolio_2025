
import SlideProject from "./SlideProjects";
import VideoProject from "./videoPorject";

export default function ShowcaseProjects() {
  return (
    <div className="my-10">
    <div className="px-20 mb-10">
        <div className="flex justify-around">
            <div className="h-[2000px] w-[40%]">
                <div className="sticky top-[35%] p-4 text-2xl text-black">
                    <h1 className="text-5xl">ARchi</h1>
                    <i className="text-3xl text-gray-500">Architectural Firm</i>
                    <div className="pt-5">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis eveniet natus iste, dolorem doloribus in facilis maiores ipsum neque nostrum illo excepturi ut, tempore dolorum accusantium placeat enim? Architecto accusantium inventore pariatur repudiandae quod totam nulla praesentium numquam sequi quam, tempore, quo ratione recusandae quis, deleniti illo modi suscipit itaque.
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <img
                src="/images/archi_website.png"
                alt="Architecture"
                className="h-[2000px] w-auto object-cover"
            />
            </div>
        </div>

    </div>
    <div className="bg-black">
        <VideoProject/>
    </div>
    <div className="">
        <SlideProject/>
    </div>
    </div>
  );
}
