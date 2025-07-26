type TextBlockProps = {
    text: string;
    delayStart?: number;
};

export default function TextBlock({ text, delayStart = 1.2 }: TextBlockProps) {
    return(
        <h2 className="text-[2rem] pr-10">
            {text.split(" ").map((word, i) =>(
                <span className="word-slide" key={i} style={{ animationDelay: `${i * 0.05 + delayStart}s` }}>
                    {word}&nbsp;
                </span>
            ))}
        </h2>
    );
}