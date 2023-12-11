import { defineConfig } from "vitepress";
import mdItKatex from "markdown-it-katex";
import mdItFootnote from "markdown-it-footnote";

const tags = [
    "math",
    "maction",
    "maligngroup",
    "malignmark",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mi",
    "mlongdiv",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mscarries",
    "mscarry",
    "mscarries",
    "msgroup",
    "mstack",
    "mlongdiv",
    "msline",
    "mstack",
    "mspace",
    "msqrt",
    "msrow",
    "mstack",
    "mstack",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "semantics",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mspace",
    "mtext",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "msqrt",
    "mstyle",
    "mmultiscripts",
    "mover",
    "mprescripts",
    "msub",
    "msubsup",
    "msup",
    "munder",
    "munderover",
    "none",
    "maligngroup",
    "malignmark",
    "mtable",
    "mtd",
    "mtr",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "msline",
    "msrow",
    "mstack",
    "maction",
    "semantics",
    "annotation",
    "annotation-xml",
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        server: {
            host: "0.0.0.0",
        },
    },
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/english-notes/resources/logo.png",
                type: "image/png",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
            },
        ],
    ],
    title: "English Notes",
    description: "Some English grammar knowledge...",
    markdown: {
        lineNumbers: false,
        config: (it) => {
            it.use(mdItKatex);
            it.use(mdItFootnote);
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => tags.includes(tag),
            },
        },
    },
    base: "/english-notes",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/resources/logo.png",
        search: {
            provider: "local",
        },
        nav: [
            {
                text: "Home",
                link: "/",
            },
            {
                text: "Intro",
                link: "/quick-start",
            },
        ],
        sidebar: [
            {
                text: "Intro",
                collapsed: false,
                items: [
                    {
                        text: "快速开始",
                        link: "/quick-start",
                    },
                ],
            },
            {
                text: "Part I",
                collapsed: false,
                items: [
                    {
                        text: "名词和代词",
                        items: [{ text: "名词" }, { text: "代词" }],
                        collapsed: true,
                    },
                    {
                        text: "冠词和数词",
                        items: [{ text: "冠词" }, { text: "数词" }],
                        collapsed: true,
                    },
                    {
                        text: "动词",
                        items: [
                            { text: "实义动词" },
                            { text: "系动词" },
                            { text: "助动词" },
                            { text: "情态动词" },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "形容词和副词",
                        items: [
                            { text: "形容词" },
                            { text: "副词" },
                            { text: "比较级和最高级" },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "连词和介词",
                        items: [{ text: "连词" }, { text: "介词" }],
                        collapsed: true,
                    },
                ],
            },
            {
                text: "Part II",
                collapsed: false,
                items: [
                    {
                        text: "简单句",
                        collapsed: true,
                        items: [
                            { text: "句子成分" },
                            { text: "简单句的五种基本句型" },
                            { text: "句子类型" },
                        ],
                    },
                    {
                        text: "时态",
                        collapsed: true,
                        items: [
                            { text: "一般时态" },
                            { text: "进行时态" },
                            { text: "完成时态" },
                            { text: "完成进行时态" },
                        ],
                    },
                    {
                        text: "语态",
                        collapsed: true,
                        items: [
                            { text: "被动语态的构成" },
                            { text: "被动语态的转换" },
                            { text: "被动语态的用法" },
                            { text: "被动语态的注意事项" },
                        ],
                    },
                    {
                        text: "主谓一致",
                        collapsed: true,
                        items: [
                            { text: "语法一致原则" },
                            { text: "意义一致原则" },
                            { text: "就近一致原则" },
                        ],
                    },
                    {
                        text: "从句",
                        collapsed: true,
                        items: [
                            { text: "名词性从句" },
                            { text: "定语从句" },
                            { text: "状语从句" },
                        ],
                    },
                    {
                        text: "非谓语动词",
                        collapsed: true,
                        items: [
                            {
                                text: "简介",
                                link: "/part2/chapter6/content0",
                            },
                            {
                                text: "构成形式",
                                link: "/part2/chapter6/content1",
                            },
                            {
                                text: "句法功能",
                                link: "/part2/chapter6/content2",
                            },
                            {
                                text: "固定搭配",
                                link: "/part2/chapter6/content3",
                            },
                        ],
                    },
                    {
                        text: "特殊句型",
                        collapsed: true,
                        items: [
                            {
                                text: "强调句",
                                link: "/part2/chapter7/content1",
                            },
                            {
                                text: "虚拟语气",
                                link: "/part2/chapter7/content2",
                            },
                            {
                                text: "倒装句",
                                link: "/part2/chapter7/content3",
                            },
                        ],
                    },
                    {
                        text: "其他结构",
                        collapsed: true,
                        items: [
                            { text: "割裂" },
                            { text: "插入语" },
                            { text: "否定" },
                        ],
                    },
                ],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/KuzunohaChitose" },
            { icon: "twitter", link: "https://twitter.com" },
            { icon: "youtube", link: "https://youtube.com" },
        ],
    },
});
