import Image from "next/image";
import Link from "next/link";
import urlFor from "../../libs/urlFor";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import getSlug from "speakingurl";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import ts from "react-syntax-highlighter/dist/cjs/languages/hljs/typescript";
import css from "react-syntax-highlighter/dist/cjs/languages/hljs/css";
import csharp from "react-syntax-highlighter/dist/cjs/languages/hljs/csharp";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("csharp", csharp);
export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative m-5 mx-auto w-[93vw] p-4 md:w-full">
          <Image
            className="h-full rounded-md object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            height={400}
            width={800}
          />
        </div>
      );
    },
    myCodeField: ({ value }: any) => {
      return (
        <div className="w-[100vw] p-4 text-sm md:w-full md:text-base lg:text-lg">
          <SyntaxHighlighter language={value.language} style={nightOwl}>
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className="ml-10 list-disc space-y-2 py-2 px-4 text-lg">{children}</ul>,
    number: ({ children }: any) => <ol className="ml-10 list-decimal space-y-2 py-2 px-4 text-lg">{children}</ol>,
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-7 px-4 text-3xl font-bold text-earth-300 lg:text-4xl" id={getSlug(children.toString())}>
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="py-5 px-4 text-2xl font-bold text-earth-300 lg:text-2xl" id={getSlug(children.toString())}>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="py-5 px-4 text-xl font-bold text-earth-300" id={getSlug(children.toString())}>
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="py-10 px-4 text-lg font-bold text-earth-300" id={getSlug(children.toString())}>
        {children}
      </h4>
    ),
    p: ({ children }: any) => <p className="py-3 px-4 text-lg leading-relaxed">{children}</p>,
    normal: ({ children }: any) => <p className="py-3 px-4 text-lg leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="my-5 border-l-4 border-l-earth-300 py-5 px-4 pl-5 text-xl">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopenner" : undefined;
      return (
        <Link href={value.href} rel={rel} className="text-lg underline decoration-earth-200 hover:decoration-earth-300">
          {children}
        </Link>
      );
    },
    highlight: ({ children }: any) => <span className="text-earth-300">{children}</span>,
    strong: ({ children }: any) => <span className="font-bold">{children}</span>,
  },
};
