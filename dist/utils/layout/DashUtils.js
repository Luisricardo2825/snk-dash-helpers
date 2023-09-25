import $ from "jquery";
const parent = window.parent.document;
export const RemoveParamsWindow = () => {
    const drawer = parent.querySelector("body > div:nth-child(8) > div:nth-child(2) > div > div.GI-BUHVBCWC > div");
    const drawerDiv = parent.querySelector("body > div:nth-child(7) > div:nth-child(2) > div > div.GI-BUHVBPVC");
    drawerDiv?.remove();
    drawer?.remove();
    drawer?.classList.add("hidden");
    drawerDiv?.classList.add("hidden");
    drawerDiv?.classList.forEach((item) => {
        drawerDiv?.classList.remove(item);
    });
    // drawerDiv?.classList.add("default_container");
};
export const RemoveTopBar = () => {
    $(".DashWindow-TopBar", parent).closest("div").addClass("hidden");
    // Deixa a tela do tamanho maximo para o iframe
    const topBar = parent.querySelector("body > div:nth-child(7) > div:nth-child(2) > div > div.GI-BUHVBPVC.default_container > div > div > div > div > div:nth-child(3)");
    const dashWIndow = $(".DashWindow", parent);
    dashWIndow
        .css({ padding: "0px", top: "0px" })
        .removeAttr("style")
        .prop("style", null);
    const parentElement = $(".DashWindow-Container", parent).parent("div");
    parentElement
        .css({ padding: "0px", top: "0px" })
        .removeAttr("style")
        .prop("style", null);
    $(".gwt-Button", parent).css({
        padding: "0px",
    });
    topBar?.removeAttribute("style");
    topBar?.classList.add("default_container");
};
export const RemoveHamburguerButton = () => {
    $(".gwt-Button", parent)
        .css({
        padding: "0px",
    })
        .addClass("hidden");
};
export const StyleContainer = () => {
    $(".raiz", parent).css({
        height: "100vh",
        width: "100vw",
    });
};
export const RemoveDashFrame = () => {
    RemoveHamburguerButton();
    RemoveTopBar();
    RemoveParamsWindow();
    StyleContainer(); // Estiliza o container "raiz"(Exibe o dashboard)
};
export const OpenInNewTab = (forcado = false) => {
    if ((window.parent.parent.document.querySelector(".Taskbar-container") &&
        !forcado) ||
        forcado) {
        Object.assign(document.createElement("a"), {
            target: "_blank",
            href: window.location.href,
        }).click();
    }
};
