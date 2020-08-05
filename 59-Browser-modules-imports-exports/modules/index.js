// Your code goes here!
import * as aspectRatio from "./aspect-ratio.js";
import * as percentage from "./percentage.js";

const modulo1 = document.getElementById("modulo_1")
const modulo2 = document.getElementById("modulo_2")
const result = document.getElementById("modulo_result")


modulo2.addEventListener("keyup", () => {
    let result_modulo = percentage.modulo(modulo1.value, modulo2.value);
    result.value = result_modulo;
})

const percentage1_1 = document.getElementById("percentage_1")
const percentage1_2 = document.getElementById("percentage_2")
const percentageResult = document.getElementById("percentage_result")

percentage1_2.addEventListener("keyup", () => {
    let result_percentage = percentage.percentage(percentage1_1.value, percentage1_2.value);
    percentageResult.value = result_percentage;
})

const percentageOf_1 = document.getElementById("percentageOf_1")
const percentageOf_2 = document.getElementById("percentageOf_2")
const percentageOfResult = document.getElementById("percentageOf_result")

percentageOf_2.addEventListener("keyup", () => {
    let result_percentageOf = percentage.percentageOf(percentageOf_1.value, percentageOf_2.value);
    percentageOfResult.value = result_percentageOf;
})

const difference1 = document.getElementById("difference_1")
const difference2 = document.getElementById("difference_2")
const differenceResult = document.getElementById("difference_result")

difference2.addEventListener("keyup", () => {
    let result_difference2 = percentage.difference(difference_1.value, difference_2.value);
    differenceResult.value = result_difference2;
})

