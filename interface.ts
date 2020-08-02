interface Person {
    name: string;
    age: number;
}

let martin: Person = {
    name: 'Martin',
    age: 23
}


// 添加可选属性
interface Female {
    name: string,
    age?: number
}

// 添加只读属性
interface Male {
    readonly id: number,
    name: string,
    ahe?: number
}

let male: Male = {
    id: 1,
    name: 'Martin'
}
// male.id 不可读
