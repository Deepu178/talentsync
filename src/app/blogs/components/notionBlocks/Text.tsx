// "use server"
type ValueType = {
  type: string;
  text: {
    content: string;
    link: null | { url: string };
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string;
};

export default function CustomText({ text }: { text: ValueType[] }) {
  if (!text) {
    return <></>;
  }

  return (
    <>
      {text.map((value, index: number) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;
        return (
          <span
            key={index}
            className={[
              bold ? "font-bold" : null,
              italic ? "italic" : null,
              code
                ? "mx-1 inline-block rounded bg-gray-700 px-2 align-middle text-sm font-semibold tracking-tight"
                : null,
              strikethrough ? "line-through" : null,
              underline ? "underline" : null,
            ].join(" ")}
            style={color !== "default" ? { color } : {}}
          >
            {text.link ? (
              <a
                className="underline transition-all text-slate-400 hover:text-slate-300 focus:text-slate-300"
                href={text.link.url}
              >
                {text.content}
              </a>
            ) : (
              text.content
            )}
          </span>
        );
      })}
    </>
  );
}
