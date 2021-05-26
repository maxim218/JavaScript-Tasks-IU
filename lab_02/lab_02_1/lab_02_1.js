"use strict"

class Dot{
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    get output(){
        console.log(`x = ${this.x} y = ${this.y}`)
    }

}

class Section{
    constructor(dot1, dot2) {
        this.dot1 = dot1
        this.dot2 = dot2
    }

    get output() {
        console.log(`st_x = ${this.dot1.x} st_y = ${this.dot1.y}\nend_x = ${this.dot2.x} end_y = ${this.dot2.y}`)
    }

    get dlina(){
        return Math.sqrt(Math.pow(this.dot1.x - this.dot2.x, 2) + Math.pow(this.dot1.y - this.dot2.y, 2))
    }
}

function main() {
    let dot1 = new Dot(100, 200)
    let dot2 = new Dot(300, 400)

    dot1.output
    dot2.output



    let s = new Section(dot1, dot2)
    console.log(s.dlina)
    s.output
}


main()