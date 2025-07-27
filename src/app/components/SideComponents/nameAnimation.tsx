export default function NameAnimation() {
  const text = "MARC AUSTIN";
  const center = Math.floor((text.length - 1) / 2);
  const maxDistance = Math.max(
    ...text.split("").map((_, i) => Math.abs(i - center))
  );
  return (
    <div className="">
      <h1
        className="tracking-[0.1em] text-[14rem] text-center"
        style={{ overflow: "hidden", display: "inline-block" }}
      >
        {text.split("").map((char, i) => {
          const distance = Math.abs(i - center);
          const delay = `${(maxDistance - distance) * 0.05 + 1.2 + 0}s`;

          let customClass = "";
          if (i === 0 || i === text.length - 1) customClass += "text-[22rem]";
          //  if (char === "A") customClass +=  "text-[12rem] text-red-200";
          return (
            <span
              key={i}
              className={`letter-slideup ${
                customClass ? "" + customClass : ""
              }`}
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
  );
}
