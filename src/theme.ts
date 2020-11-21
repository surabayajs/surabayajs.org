import { extendTheme } from "@chakra-ui/react";

const sans = [
  "Manrope",
  "-apple-system",
  "BlinkMacSystemFont",
  "'Segoe UI'",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "'Open Sans'",
  "'Helvetica Neue'",
  "sans-serif",
].join(",");

const mono = [
  "Cousine",
  "Consolas",
  "'Courier New'",
  "Courier",
  "monospace",
].join(",");

export default extendTheme({
  colors: {
    gator: {
      "50": "#f3f8f7",
      "100": "#e7f6ef",
      "200": "#cbefda",
      "300": "#a1e2bf",
      "400": "#57cb93",
      "500": "#28af67",
      "600": "#1f8f4b",
      "700": "#237242",
      "800": "#22573a",
      "900": "#1e4631",
    },
  },
  components: {
    Link: {
      variants: {
        "sitemap-link": ({ colorMode }) => ({
          color: colorMode === "light" ? "blackAlpha.800" : "whiteAlpha.800",
          fontWeight: "medium",
        }),
      },
    },
    Text: {
      variants: {
        "home-title": {
          as: "h2",
          fontSize: ["3xl", "4xl", "5xl", "6xl"],
          fontWeight: "extrabold",
          letterSpacing: "tighter",
          lineHeight: "none",
        },
        "home-subtitle": ({ colorMode }) => ({
          as: "h3",
          color: colorMode === "light" ? "blackAlpha.600" : "whiteAlpha.600",
          fontSize: ["lg", "xl", "2xl", "3xl"],
          fontWeight: "bold",
          letterSpacing: "tight",
          size: "lg",
        }),
        "sitemap-title": {
          fontSize: "sm",
          fontWeight: "bold",
          letterSpacing: "widest",
          textTransform: "uppercase",
        },
      },
    },
  },
  fonts: {
    body: sans,
    heading: sans,
    mono,
  },
  styles: {
    global: {
      body: {
        //
      },
    },
  },
});
