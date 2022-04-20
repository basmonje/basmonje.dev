import NextLink from "next/link";
import { useRef, useState, useEffect } from "react";
import { Clipboard, Copy } from "@basmonje/lib-icon";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...props}>{props.children}</a>
      </NextLink>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const Code = (props) => {
  const [copied, setCopied] = useState(false);
  const obsRef = useRef();

  const click = () => {
    const text = obsRef.current.innerText.replace(/^(&nbsp;|\s)*/, "");
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="relative">
      <button
        className="button clipboard bg-dark p-3 radius-2 flex items-center content-center color-white-700 color-hover-white"
        onClick={click}
      >
        {copied ? (
          <>
            <span className="mr-1">Copiado</span>
            <Clipboard />
          </>
        ) : (
          <Copy />
        )}
      </button>
      <pre ref={obsRef} {...props}>
        {props.children}
      </pre>
    </div>
  );
};

const MDXComponents = {
  a: CustomLink,
  pre: Code,
};

export default MDXComponents;
