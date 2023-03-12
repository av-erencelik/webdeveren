import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fef6ec",
  "--my-black": "#090a10",
  "--my-primary": "#f2a547",
};

export const myTheme = buildLegacyTheme({
  "--brand-primary": props["--my-primary"],
  "--default-button-primary-color": props["--my-primary"],
  "--component-bg": props["--my-black"],
  "--focus-color": props["--my-primary"],
  "--component-text-color": props["--my-white"],
});
