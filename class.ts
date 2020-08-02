// 类：定义了一切事物的抽象特点
// 对象：类的实例
class Animal {
    public name: string;
    static categories: string[] = ['mammal', 'bird']
    static isAnimal(a) {
        return a instanceof Animal
    }
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

// 实例化
console.log(Animal.categories)
const snake = new Animal('Lily')
console.log(Animal.isAnimal(snake))
console.log(snake.run())
console.log(snake.name)

// Dog 继承Animal
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

// Cat 继承Animal
class Cat extends Animal {
    constructor(name) {
        super(name)
        console.log(this.name)
    }
    run() {
        return 'Meow, ' + super.run()
    }
}

const maomao = new Cat('maomao')
console.log(maomao.run())

interface Radio {
    switchRadio(): void
}

interface Battery {
    checkBatteryStatus(): void
}

class Car implements Radio {
    switchRadio() {

    }
}

class Cellphone implements Radio, Battery {
    checkBatteryStatus() {

    }
    switchRadio() {

    }
}