/**
 * Let's make a calculator 🧮
 */

// function calculate(action: string, firstNum: number, secondNum: number): number | undefined {
//     switch(action) {
//         case 'add': {
//             return firstNum + secondNum
//         }
//         case 'subtract': {
//             return firstNum - secondNum
//         }
//         case 'multiply': {
//             return firstNum * secondNum
//         }
//         case 'divide': {
//             return firstNum / secondNum
//         }
//         case 'remainder': {
//             return firstNum % secondNum
//         }
//     }
// }

type Command = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, a: number, b: number) {
    switch (command) {
        case 'add': { 
            return a + b;
        }
        case 'subtract': { 
            return a - b;
        }
        case 'multiply': { 
            return a * b;
        }
        case 'divide': { 
            return a / b;
        }
        case 'remainder': { 
            return a % b;
        }
        default:
            throw new Error('command not found')
    }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('subtract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
