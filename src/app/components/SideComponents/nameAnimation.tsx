export default function NameAnimation() {
  const text = "MARC AUSTIN";
  const center = Math.floor((text.length - 1) / 2);
  const maxDistance = Math.max(
    ...text.split("").map((_, i) => Math.abs(i - center))
  );

  return (
    <div className="cursor-default overflow-hidden">
      <h1 className="text-center tracking-[0.1em] text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[1200%]"
        style={{ display: "inline-block" }}
      >
        {text.split("").map((char, i) => {
          const distance = Math.abs(i - center);
          const delay = `${(maxDistance - distance) * 0.05 + 1.2}s`;

          let customClass = "";
          if (i === 0 || i === text.length - 1)
            customClass +=
              "text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[150%] leading-[0px]";

          return (
            <span
              key={i}
              className={`letter-slideup inline-block ${customClass}`}
              style={{
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
  );
}
