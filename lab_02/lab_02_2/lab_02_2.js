"use strict"

class Triangle {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }

    get exist_triangle() {
        if (this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a)
            return true
        else
            return false
    }

    get perimetr() {
        if (this.exist_triangle)
            return this.a + this.b + this.c
        else
            return NaN
    }

    get square(){
        if (this.exist_triangle) {
            let p = this.perimetr / 2
            return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
        }
        else
            return NaN
    }

    get is_rectangular(){
        if (this.exist_triangle)
            return Math.abs(Math.pow(this.a,2) + Math.pow(this.b,2) - Math.pow(this.c,2)) < 0.01
        else
            return NaN
    }
}


function main(){
    let tr = new Triangle(4,4,5)

    console.log(tr.exist_triangle)

    console.log(tr.perimetr)

    console.log(tr.square)

    console.log(tr.is_rectangular)

}

main()