// 泛型
function echo<T>(arg: T): T {
    return arg
}

// const str: string = 'str'
// const result = echo(str)

const result1 = echo(123)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])

// 约束泛型
function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
const arrs = echoWithArr([1, 2, 3])

// 只要含有length属性都可以进行打印输出
interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

const strResult = echoWithLength('str')
const objResult = echoWithLength({ length: 10 })
const arrResult = echoWithLength([1, 2, 3])

// 类和泛型
class Queue<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

// 接口和泛型
interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kp1: KeyPair<number, string> = { key: 123, value: "str" }
let kp2: KeyPair<string, number> = { key: "str", value: 123 }
let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

interface IPlus<T> {
    (a: T, b: T): T
}

function plus(a: number, b: number) {
    return a + b
}

function connection(a: string, b: string) {
    return a + b;
}

const a: IPlus<number> = plus
const b: IPlus<string> = connection