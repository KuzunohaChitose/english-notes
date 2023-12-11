import DefaultTheme from "vitepress/theme-without-fonts";
import "./custom.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import { initialize } from "../../../src/mermaid";
import AsumiLayout from "./AsumiLayout.vue";

export default {
    ...DefaultTheme,
    Layout: AsumiLayout,
    enhanceApp({ app }) {
        initialize();
        app.use(Antd);
    },
};
