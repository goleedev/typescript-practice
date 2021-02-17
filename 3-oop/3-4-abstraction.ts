{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    
    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class lv
        private coffeeBeans: number = 0; // instance lv
        
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('Error occurred');
            }
            this.coffeeBeans = beans;
        }

        clean() {
            console.log('cleaning...');
        }
        
        private grindBeans(shots: number) {
            console.log(`grinding for ${shots} shots`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('not enough beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void {
            console.log(`heating up`);
        }

        private extract(shots: number): CoffeeCup {
            console.log(`pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 6;
        get age():number {
            return this.internalAge;
        }
        set age(num: number) {
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string) {
        }
    }
    const user = new User('st', 'j');
    console.log(user.fullName);
    user.age = 12;
    console.log(user.fullName);

    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(3);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(3);
            this.machine.fillCoffeeBeans(500);
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(3);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    pro.makeCoffee();
}