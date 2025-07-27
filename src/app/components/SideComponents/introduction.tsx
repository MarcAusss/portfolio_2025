export default function IntroDesc() {
  return (
    <div className="cursor-default">
      <h2 className="text-[2rem] pr-10">
        {"I'm a Web Developer specializing in ".split(" ").map((word, i) => (
          <span key={i} className="word-slide" style={{ animationDelay: `${i * 0.05 + 1.2 + 0}s`,}}>
            {word}&nbsp;
          </span>
        ))}
      </h2>
      <h2 className="text-[2rem] pr-10">
        {"both front-end and back-end development."
          .split(" ")
          .map((word, i) => (
            <span key={i} className="word-slide" style={{ animationDelay: `${i * 0.05 + 1.5 + 0}s`, }}>
              {word}&nbsp;
            </span>
          ))}
      </h2>
    </div>
  );
}
