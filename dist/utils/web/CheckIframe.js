"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function inIframe() {
    try {
        return window.self !== window.top;
    }
    catch (e) {
        return true;
    }
}
exports.default = inIframe;
