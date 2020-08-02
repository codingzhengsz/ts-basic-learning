// 类型别名
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number) {
    return x + y
}

const sum2: PlusType = sum

type NameResolver = () => string // 函数类型，函数要返回字符串
type NameOrResolber = string | NameResolver // 联合类型
function getName(n: NameOrResolber): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

// 类型断言
function getLength(input: string | number): number {
    const str = input as String
    if (str.length) {
        return str.length
    } else {
        const number = input as Number
        return number.toString().length
    }
}

// 类型断言没法转换成其他联合类型之外的类型
function getLength1(input: string | number): number {
    if (<string>input) { // 将input断言成stirng类型
        return (<string>input).length
    } else {
        return input.toString().length
    }
}