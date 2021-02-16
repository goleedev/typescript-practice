// Modules
import multiply, {multiplyByTwo, HelloWorld} from './multiply';

const a = 5;
const b = 2;

console.log(`${a} * ${b} = ${multiply(a,b)}`);

// Types
// Number, String, Boolean, Null and Undefined

// Interfaces
interface A {
    someProp: number;
}

interface B {
    someProp: number;
    anotherProp: number;
}

let aInterFace: A = { someProp: 1};
// let bInterFace: B = a;

interface Profile {
    readonly name: string;
    age?: number;
}

let profile: Profile = {
    name: 'John',
}

// profile.name = 'go'

// Index Signature
interface IS {
    someProp: string;
    [key: string]: number | string;
}

const aIS: IS = {someProp: 'some'};
aIS.x = 1;
aIS.y = 2;

// Call Signature 
interface Sum {
    (a: number, b: number): number;
    prop1: string;
}

const sum = (a,b) => a + b;
sum.prop1 = 'no'

// Extending Interfaces
interface Parent {
    x: string;
}

interface Parent2 {
    y: string;
}

interface Parent3 {
    z: string;
}

interface Child extends Parent, Parent2, Parent3 {}

let child: Child = {x: 'some prop', y: 'n', z: 'nn'}


// Functions
function sum2(a: number, b: number):number {
    return a + b;
}

type MyFunc = (a: number, b: number) => number;
const sum3:MyFunc = (a, b) => a+b;

function sumEverything(...nums: number[]):number {
    return nums.reduce((result, num) => result + num, 0 )
}

function calcArea(width: number, height: number):number;
function calcArea(length: number):number;
function calcArea(...args:number[]):number {
    if(args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2)
};