export default function NameAnimation() {
  const text = "MARC AUSTIN";

  const animateText = (value: string) => {
    const center = Math.floor((value.length - 1) / 2);
    const maxDistance = Math.max(
      ...value.split("").map((_, i) => Math.abs(i - center))
    );

    return value.split("").map((char, i) => {
      const distance = Math.abs(i - center);
      const delay = `${(maxDistance - distance) * 0.05 + 1.2}s`;

      const isEdge = i === 0 || i === value.length - 1;

      return (
        <span
          key={i}
          className={`
            letter-slideup inline-block opacity-0
            ${isEdge ? "text-[5rem]" : "text-[4rem]"}
          `}
          style={{ animationDelay: delay }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div className="cursor-default overflow-hidden text-center">

      {/* ================= MOBILE VIEW ================= */}
      <div className="sm:hidden flex flex-col items-center leading-none">
        <h1 className="tracking-[0.1em]">
          {animateText("MARC")}
        </h1>

        <h1 className="tracking-[0.1em] mt-2">
          {animateText("AUSTIN")}
        </h1>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <h1
        className="
          hidden sm:inline-block
          tracking-[0.1em]
          text-[4rem]
          sm:text-[6rem]
          md:text-[8rem]
          lg:text-[10rem]
          xl:text-[1200%]
        "
      >
        {text.split("").map((char, i) => {
          const center = Math.floor((text.length - 1) / 2);
          const maxDistance = Math.max(
            ...text.split("").map((_, i) => Math.abs(i - center))
          );

          const distance = Math.abs(i - center);
          const delay = `${(maxDistance - distance) * 0.05 + 1.2}s`;

          const isEdge = i === 0 || i === text.length - 1;

          return (
            <span
              key={i}
              className={`
                letter-slideup inline-block opacity-0
                ${isEdge
                  ? "text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem]"
                  : ""}
              `}
              style={{ animationDelay: delay }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </h1>
    </div>
  );
}
