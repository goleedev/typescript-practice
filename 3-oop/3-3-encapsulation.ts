{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public
    // private
    // protected
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class lv
        private coffeeBeans: number = 0; // instance lv
        
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('Error occurred');
            }
            this.coffeeBeans = beans;
        }
        
        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('not enough beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }

    const maker3 = CoffeeMaker.makeMachine(3);
    maker3.fillCoffeeBeans(30);

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
    
}