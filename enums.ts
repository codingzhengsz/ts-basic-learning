enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

// console.log(Direction.Up)
// 反向映射
// console.log(Direction[0])
// 查看编译文件 tsc enums.ts

const value = 'UP'
if (value === Direction.Up) {
    console.log('go up!')
}