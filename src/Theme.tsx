import {extendTheme, ThemeConfig} from "@chakra-ui/react";


let config : ThemeConfig = {
    initialColorMode: "dark"
};

let theme = extendTheme({config});

export default theme;

