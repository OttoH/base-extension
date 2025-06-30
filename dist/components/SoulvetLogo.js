"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoulvetLogo = void 0;
const react_1 = __importDefault(require("react"));
const SoulvetLogo = ({ size = 24, className = '' }) => {
    return (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className },
        react_1.default.createElement("circle", { cx: "6", cy: "6", r: "2", fill: "currentColor" }),
        react_1.default.createElement("circle", { cx: "12", cy: "4.5", r: "2", fill: "currentColor" }),
        react_1.default.createElement("circle", { cx: "18", cy: "6", r: "2", fill: "currentColor" }),
        react_1.default.createElement("circle", { cx: "12", cy: "12", r: "4", fill: "currentColor" }),
        react_1.default.createElement("text", { x: "12", y: "20", textAnchor: "middle", fontSize: "4", fontWeight: "bold", fill: "currentColor", fontFamily: "Arial, sans-serif" }, "SV")));
};
exports.SoulvetLogo = SoulvetLogo;
