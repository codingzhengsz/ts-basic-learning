function add(x: number, y: number): number {
    return x + y
}

let result = add(2, 3)

// 添加可选参数
function add1(x: number, y: number, z?: number): number {
    if (typeof x === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}
result = add1(2, 3, 4)

// 为可选参数添加默认值
function add2(x: number, y: number, z: number = 10): number {
    if (typeof x === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}
result = add1(2, 3, 4)

// 函数表达式
const add3 = function (x: number, y: number, z: number = 10): number {
    if (typeof x === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

// 将函数表达式作为变量进行赋值
const add3Var: (x: number, y: number, z?: number) => number = add3

// 类型推断
let str = 'str'