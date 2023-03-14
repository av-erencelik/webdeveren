import { cn } from "@/utils/utils";

const getChildrenText = (props: any) =>
  props.children.map((node: any) => (typeof node === "string" ? node : node.text || "")).join("");

export const TableOfContents = (props: any) => (
  <ol className="py-[0.10rem] pl-5 text-cinder-300 dark:text-gray-100">
    {props.outline.map((heading: any) => (
      <li key={heading._key} className="py-1">
        <a
          href={"#" + heading.slug}
          className={cn(
            "transition-colors hover:text-earth-300",
            props.activeId === heading.slug ? "text-earth-300" : ""
          )}
        >
          {getChildrenText(heading)}
        </a>
        {heading.subheadings.length > 0 && <TableOfContents outline={heading.subheadings} activeId={props.activeId} />}
      </li>
    ))}
  </ol>
);
