import "regenerator-runtime";
import "./styles/style.css";
import MarkdownData from "../README.md";

import main from "./script/view/main.js";

document.getElementById("how-to-use").innerHTML = MarkdownData;
document.addEventListener("DOMContentLoaded", main);
