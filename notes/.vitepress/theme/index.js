import DefaultTheme from "vitepress/theme-without-fonts";
import "./custom.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import { initialize } from "../../../src/mermaid";
import MyLayout from "./MyLayout.vue"

export default {
    ...DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app }) {
        initialize();
        app.use(Antd);
    },
};
