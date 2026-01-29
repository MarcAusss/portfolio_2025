export default function IntroDesc() {
  return (
    <div className="cursor-default px-4 sm:px-0">
      <h2 className="text-[1.5rem] sm:text-[2rem] text-center sm:text-left sm:pr-96">
        {"I'm a Web Developer specializing in ".split(" ").map((word, i) => (
          <span
            key={i}
            className="word-slide inline-block"
            style={{ animationDelay: `${i * 0.05 + 1.2}s` }}
          >
            {word}&nbsp;
          </span>
        ))}
      </h2>

      <h2 className="text-[1.5rem] sm:text-[2rem] text-center sm:text-left sm:pr-96">
        {"both front-end and back-end development."
          .split(" ")
          .map((word, i) => (
            <span
              key={i}
              className="word-slide inline-block"
              style={{ animationDelay: `${i * 0.05 + 1.5}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
      </h2>
    </div>
  );
}
