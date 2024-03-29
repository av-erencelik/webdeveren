var getSlug = require("speakingurl");
const get = (object: { subheadings: never[] }, path: any) => path.reduce((prev: any, curr: any) => prev[curr], object);
const getObjectPath = (path: any) =>
  path.length === 0 ? path : ["subheadings"].concat(path.join(".subheadings.").split("."));

export const parseOutline = (ast: Heading[]) => {
  const outline = { subheadings: [] };
  const headings = ast;
  const path: any = [];
  let lastLevel = 0;

  headings.forEach((heading: Heading) => {
    heading.slug = getSlug(heading.children[0].text);
    const level = Number(heading.style.slice(1));
    heading.subheadings = [];

    if (level < lastLevel) for (let i = lastLevel; i >= level; i--) path.pop();
    else if (level === lastLevel) path.pop();

    const prop = get(outline, getObjectPath(path));
    prop.subheadings.push(heading);
    path.push(prop.subheadings.length - 1);
    lastLevel = level;
  });

  return outline.subheadings;
};
