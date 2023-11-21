import DefaultTheme from "vitepress/theme-without-fonts";
import "./custom.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import Mmd from "../../../src/components/Mmd.vue";
import { initialize } from "../../../src/mermaid";

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        initialize();
        app.use(Antd);
        app.component("Mmd", Mmd);
    },
};
