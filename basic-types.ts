let isDone: boolean = false

let age: number = 1

let binaryNumber: number = 0b1111

let firstName: string = 'Martin'
let message: string = `Hello , ${firstName}, age is ${age}`

let u: undefined = undefined
let n: null = null

let num: number = undefined

// any类型
let notSure: any = 4;
notSure = 'maybe it is a string'
notSure = true

notSure.myName
notSure.getName()

// 联合类型
let numberOrString: number | string = 123
numberOrString = 'abc'

// 数组
let arrOfNumbers: number[] = [1, 2, 3, 4]
arrOfNumbers.push(5)

let arrOfNumber: (number | string)[] = [1, 2, 3, 4, 'hello']

// 类数组: arguments: 有数组的属性
// 但是原型并不是Array
function test() {
    console.log(arguments)
}

// 数组聚合了相同类型的数据
// 元组聚合了不同类型的数据
let user: [string, number] = ['Martin', 20]

// Interface接口
// 对对象的形状进行描述
// 对类（Class）进行抽象
// Duck Typing（鸭子类型）