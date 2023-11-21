import mermaid from "mermaid";

let isInitialized = false;
export const initialize = () => {
    mermaid.initialize({ startOnLoad: true });
    isInitialized = true;
};
export const contentLoaded = () => {
    if (isInitialized) mermaid.contentLoaded();
    else {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }
};
