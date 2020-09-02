
import { deleteLetters } from "../../HW3Function/js/deleteLetters";
import { getCoupleExport } from "../../HW4Array/js/getCouple";
import { getRandomArray } from "../../HW5MethodArray/js/getRandomArray";
import { getSubjectsExport } from "../../HW6Object/js/getSubject";
import { getMyTaxesExport } from "../../HW7Zam/js/getMyTaxes";
import { Student } from "../../HW8ClassES6/js/getInfo";
import { getRandomColor } from "../../HW9DOM/js/getRandomColor";
import { showPlanet } from "../../HW12Server/js/showPlanetsExport";
import "./styles.css";


// import {hw10} from "../../HW10Events/js/script"

//hw#3
console.log("Hw3", deleteLetters("r", "rain"));
//hw#4
getCoupleExport();
//hw#5
console.log("Hw5", getRandomArray(5, 1, 800));
//hw#6
getSubjectsExport();
//hw#7
getMyTaxesExport();
//hw#8
const student1 = new Student("НУ ЛП", "1", "Roman");
console.log("Hw8", student1.getInfo());
//hw#9
getRandomColor();
//hw#10
showPlanet();


document.createElement("div").innerHTML = "<h1>Another hw in console!</h1>";
