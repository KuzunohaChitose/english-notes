import { PageData, useData } from "vitepress";
import { Ref, onMounted, onUnmounted, reactive, ref, watch } from "vue";

export const useScreenSize = () => {
    const size = reactive({
        height: 0,
        width: 0,
    });

    const listener = () => {
        size.height = window.innerHeight;
        size.width = window.innerWidth;
    };

    onMounted(() => {
        size.height = window.innerHeight;
        size.width = window.innerWidth;
        window.addEventListener("resize", listener);
    });
    onUnmounted(() => {
        window.removeEventListener("resize", listener);
    });

    return size;
};

export const useAsumiIndex = (page: Ref<PageData>) => {
    const index = ref(1);

    watch(page, (a, b) => {
        if (a.filePath === b.filePath) return;
        if (index.value >= 5) index.value = 1;
        else index.value++;
    });

    return index;
};
