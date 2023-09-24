"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenInNewTab = exports.RemoveDashFrame = exports.StyleContainer = exports.RemoveHamburguerButton = exports.RemoveTopBar = exports.RemoveParamsWindow = void 0;
const jquery_1 = __importDefault(require("jquery"));
const parent = window.parent.document;
const RemoveParamsWindow = () => {
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
exports.RemoveParamsWindow = RemoveParamsWindow;
const RemoveTopBar = () => {
    (0, jquery_1.default)(".DashWindow-TopBar", parent).closest("div").addClass("hidden");
    // Deixa a tela do tamanho maximo para o iframe
    const topBar = parent.querySelector("body > div:nth-child(7) > div:nth-child(2) > div > div.GI-BUHVBPVC.default_container > div > div > div > div > div:nth-child(3)");
    const dashWIndow = (0, jquery_1.default)(".DashWindow", parent);
    dashWIndow
        .css({ padding: "0px", top: "0px" })
        .removeAttr("style")
        .prop("style", null);
    const parentElement = (0, jquery_1.default)(".DashWindow-Container", parent).parent("div");
    parentElement
        .css({ padding: "0px", top: "0px" })
        .removeAttr("style")
        .prop("style", null);
    (0, jquery_1.default)(".gwt-Button", parent).css({
        padding: "0px",
    });
    topBar?.removeAttribute("style");
    topBar?.classList.add("default_container");
};
exports.RemoveTopBar = RemoveTopBar;
const RemoveHamburguerButton = () => {
    (0, jquery_1.default)(".gwt-Button", parent)
        .css({
        padding: "0px",
    })
        .addClass("hidden");
};
exports.RemoveHamburguerButton = RemoveHamburguerButton;
const StyleContainer = () => {
    (0, jquery_1.default)(".raiz", parent).css({
        height: "100vh",
        width: "100vw",
    });
};
exports.StyleContainer = StyleContainer;
const RemoveDashFrame = () => {
    (0, exports.RemoveHamburguerButton)();
    (0, exports.RemoveTopBar)();
    (0, exports.RemoveParamsWindow)();
    (0, exports.StyleContainer)(); // Estiliza o container "raiz"(Exibe o dashboard)
};
exports.RemoveDashFrame = RemoveDashFrame;
const OpenInNewTab = (forcado = false) => {
    if ((window.parent.parent.document.querySelector(".Taskbar-container") &&
        !forcado) ||
        forcado) {
        Object.assign(document.createElement("a"), {
            target: "_blank",
            href: window.location.href,
        }).click();
    }
};
exports.OpenInNewTab = OpenInNewTab;
