import {newText} from "./information.js";
import * as cowsay from "cowsay";

console.log(newText);
console.log(cowsay.say({
    text : `je suis ${newText.myName} de la ${newText.campus}`,
    e : "oO",
    T : "U "
}));
