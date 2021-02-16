"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
const multiply_1 = __importDefault(require("./multiply"));
const a = 5;
const b = 2;
console.log(`${a} * ${b} = ${multiply_1.default(a, b)}`);
let aInterFace = { someProp: 1 };
let profile = {
    name: 'John',
};
const aIS = { someProp: 'some' };
aIS.x = 1;
aIS.y = 2;
const sum = (a, b) => a + b;
sum.prop1 = 'no';
let child = { x: 'some prop', y: 'n', z: 'nn' };
// Functions
function sum2(a, b) {
    return a + b;
}
const sum3 = (a, b) => a + b;
function sumEverything(...nums) {
    return nums.reduce((result, num) => result + num, 0);
}
function calcArea(width, height) {
}
