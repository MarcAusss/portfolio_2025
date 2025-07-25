"use client";

export default function Home() {
  const text = "MARC AUSTIN";
  const center = Math.floor((text.length - 1) / 2);
  const maxDistance = Math.max(...text.split("").map((_, i) => Math.abs(i - center)));
  
  return (
    <div className="w-[100%]">
      <div className="w-full h-screen bg-[#ffffffb7] overflow-hidden">
        <div className="relative">
          <div className="flex flex-col absolute">
            <div className="bg-black w-[1905px] h-10 animation-bg1"></div>
            <div className="bg-black w-[1905px] h-14 animation-bg2"></div>
            <div className="bg-black w-[1905px] h-20 animation-bg3"></div>
            <div className="bg-black w-[1905px] h-28 animation-bg4"></div>
            <div className="bg-black w-[1905px] h-36 animation-bg5"></div>
            <div className="bg-black w-[1905px] h-44 animation-bg6 flex flex-col items-end justify-center ">
              <h2 className="text-[2rem] pr-10">
                {"Web Developer specializing in "
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={i}
                      className="word-slide"
                      style={{
                        animationDelay: `${i * 0.05 + 1.2 + 0}s`,
                      }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
              </h2>
              <h2 className="text-[2rem] pr-10">
                {"both front-end and back-end development."
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={i}
                      className="word-slide"
                      style={{
                        animationDelay: `${i * 0.05 + 1.5 + 0}s`,
                      }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
              </h2>
            </div>
            <div className="bg-black h-[350px] animation-bg7 flex items-center justify-center">
              <h1
                className="tracking-[0.1em] text-[14rem] text-center"
                style={{ overflow: "hidden", display: "inline-block" }}
              >
                {text.split("").map((char, i) => {
                  const distance = Math.abs(i - center);
                  const delay = `${(maxDistance - distance) * 0.05 + 1.2 + 0}s`;

                  let customClass = "";
                  if (i === 0 || i === text.length - 1) customClass +=  "text-[22rem]";
                  //  if (char === "A") customClass +=  "text-[12rem] text-red-200";
                  return (
                    <span
                      key={i}
                      className={`letter-slideup ${customClass ? "" + customClass : ""}`}
                      style={{
                        display: "inline-block",
                        opacity: 0,
                        animationDelay: delay,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  );
                })}
              </h1>
            </div>
          </div>
        </div>
      </div>



      <div className="w-full mt-10 bg-white">
        <div className="flex flex-col gap-1">
          <div className="bg-black w-full h-5"></div>
          <div className="bg-black w-full h-4"></div>
          <div className="bg-black w-full h-3"></div>
          <div className="bg-black w-full h-2"></div>
          <div className="bg-black w-full h-1"></div>
        </div>

        <div className="px-20 mt-10">
          <div className="flex justify-around">
            <div className="h-[2000px] w-[40%]">
              <div className="sticky top-[35%] p-4 text-2xl text-black">
                <h1 className="text-5xl">ARchi</h1>
                <i className="text-3xl text-gray-500">Architectural Firm</i>
                <div className="pt-5">
                  <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, itaque unde ipsa quod veniam repellat sint aliquid nesciunt beatae culpa iure dolore! Laudantium quas odio fugiat maiores non, dolor beatae voluptate aperiam expedita debitis impedit autem natus saepe dignissimos voluptatem hic praesentium nihil officiis sapiente illo, accusantium officia! Rem, voluptatibus.</p>
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
      </div>
    </div>
  );
}

// when i hover the logo at the nav bar it sparks a white small particles 