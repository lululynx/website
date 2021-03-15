import { createMuiTheme } from "@material-ui/core/styles";
import GTHaptikRegular from "./public/fonts/gt-haptik-regular.woff2";
import GTHaptikBold from "./public/fonts/gt-haptik-bold.woff2";
import GTHaptikBoldOblique from "./public/fonts/gt-haptik-bold-oblique.woff2";
import GTHaptikRegularOblique from "./public/fonts/gt-haptik-regular-oblique.woff2";
import FreightSansBook from "./public/fonts/freight_sans_book.woff2";
import FreightSansMedium from "./public/fonts/freight_sans_medium.woff2";
import NotoSansHKMedium from "./public/fonts/noto_sans_hk_medium.woff2";
import NotoSansHKThin from "./public/fonts/noto_sans_hk_thin.woff2";
// import OpenSansCondensedBold from "./public/fonts/OpenSansCondensedBold.ttf";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d8e2dc",
    },
    secondary: {
      main: "#4F4F4F",
    },
  },
  typography: {
    h1: {
      fontFamily: ["GTHaptikRegular", "NotoSansHKMedium"],
      size: "40px",
      letterSpacing: "3px",
      lineHeight: "38px",
    },
    h2: {
      fontFamily: ["GTHaptikRegular", "NotoSansHKMedium"],
      lineHeight: "19px",
      letterSpacing: "1px",
      fontSize: "17px",
    },
    // Dialogue Box
    h3: {
      fontFamily: ["GTHaptikRegular", "NotoSansHKMedium"],
      fontSize: "30px",
      lineHeight: "30px",
      letterSpacing: "2px",
    },
    h4: {
      fontFamily: ["NotoSansHKMedium"],
      lineHeight: "19px",
      letterSpacing: "1px",
      fontSize: "17px",
    },
    h5: {
      fontFamily: ["FreightSansMedium", "NotoSansHKThin"],
      lineHeight: "20px",
      fontSize: "12px",
    },
    h6: { fontFamily: "GTHaptikRegular", color: "#0b5034", fontSize: "18px" },
    label: {
      fontFamily: ["FreightSansBook", "NotoSansHKThin"],
      lineHeight: "8px",
      fontSize: "8px",
    },
    body1: {
      fontFamily: ["FreightSansBook", "NotoSansHKThin"],
      lineHeight: "20px",
      fontSize: "15px",
    },
    // body highlight
    body2: {
      fontFamily: ["FreightSansMedium", "NotoSansHKThin"],
      fontSize: "12px",
      lineHeight: "20px",
    },
    button: {
      fontFamily: ["GTHaptikRegular", "NotoSansHKThin"],
      fontSize: "13px",
      lineHeight: "15px",
      letterSpacing: "1px",
    },
    dialog: {
      fontFamily: ["FreightSansBook", "NotoSansHKThin"],
      fontSize: "15px",
    },
  },
  overrides: {
    // https://material-ui.com/customization/typography/#font-family
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "GTHaptikRegular",
            src: `url(${GTHaptikRegular}) format('woff2')`,
          },
          {
            fontFamily: "GTHaptikBold",
            src: `url(${GTHaptikBold}) format('woff2')`,
          },
          {
            fontFamily: "GTHaptikBoldOblique",
            src: `url(${GTHaptikBoldOblique}) format('woff2')`,
          },
          {
            fontFamily: "GTHaptikRegularOblique",
            src: `url(${GTHaptikRegularOblique}) format('woff2')`,
          },
          {
            fontFamily: "FreightSansBook",
            src: `url(${FreightSansBook}) format('woff2')`,
          },
          {
            fontFamily: "FreightSansMedium",
            src: `url(${FreightSansMedium}) format('woff2')`,
          },
          {
            fontFamily: "NotoSansHKMedium",
            src: `url(${NotoSansHKMedium}) format('woff2')`,
          },
          {
            fontFamily: "NotoSansHKThin",
            src: `url(${NotoSansHKThin}) format('woff2')`,
          },
        ],
      },
    },
  },
});

export default theme;
