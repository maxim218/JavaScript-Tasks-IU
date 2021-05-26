"use strict"

class Dot {
    constructor(name, x, y) {
        this.name = name
        this.x = x
        this.y = y
    }

    get output(){
        return `${this.name} ${this.x} ${this.y}`;
    }
}

class Dots{
    constructor() {
        this.arr = []
    }

    CREATE(dt){
        for (const d of this.arr){
            if (dt.name === d.name){
                return false
            }
        }
        this.arr.push(dt)
        return true
    }

    READ(dt){
        console.log(dt.output)
        return true
    }

    UPDATE(dt){
        let j = -1
        for (let i = 0; i < this.arr.length; i++){
            if (this.arr[i].name === dt.name){
                j = i
            }
        }
        if (j === -1) {
            console.log("Invalid read dot name")
            return false
        }
        this.arr.splice(j, 1, dt)
        return true
    }

    DELETE(dt){
        let j = -1
        for (let i = 0; i < this.arr.length; i++){
            if (this.arr[i].name === dt.name){
                j = i
            }
        }
        if (j === -1) {
            console.log("Invalid read dot name")
            return false
        }
        this.arr.splice(j, 1)
        return true
    }

    max_range(){
        if (this.arr.length <= 1){
            console.log("Invalid read array")
            return false
        }
        let max = 0
        let temp_max = 0
        let log = []
        for (let i = 0; i < this.arr.length - 1; i++){
            temp_max = Math.sqrt(Math.pow(this.arr[i].x - this.arr[i + 1].x, 2) +
                Math.pow(this.arr[i].y - this.arr[i + 1].y, 2))
            if (temp_max > max){
                max = temp_max
                log[0] = this.arr[i]
                log[1] = this.arr[i + 1]
            }
        }
        return log
    }

    near_dots(dt, len){
        if (len <= 0) {
            console.log("Invalid read len")
            return false
        }
        let temp_len = 0
        let log = []
        for (let i = 0; i < this.arr.length; i++){
            temp_len = Math.sqrt(Math.pow(dt.x - this.arr[i].x, 2) + Math.pow(dt.y - this.arr[i].y, 2))
            if (temp_len < len){
                log.push(this.arr[i])
            }
        }
        return log
    }

    get_dot_axes(d){
        let log = []
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].x > d.x && this.arr[i].y > d.y){
                log.push(this.arr[i], "1")
            }
            else if (this.arr[i].x < d.x && this.arr[i].y > d.y){
                log.push(this.arr[i], "2")
            }
            else if (this.arr[i].x < d.x && this.arr[i].y < d.y){
                log.push(this.arr[i], "3")
            }
            else if (this.arr[i].x > d.x && this.arr[i].y < d.y){
                log.push(this.arr[i], "4")
            }
        }
        return log
    }

    inside_rectangle(dt_l_d, dt_r_u){
        let log = []
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].x < dt_r_u.x && this.arr[i].x > dt_l_d.x &&
                this.arr[i].y < dt_r_u.y && this.arr[i].y > dt_l_d.y)
                log.push(this.arr[i])
            }
        return log
    }

}

function main(){
    let d1 = new Dot("abc", 123, 1)
    let d11 = new Dot("ab12c", 1323, 3213)
    let d2 = new Dot("qwerty", 523123133, 1)
    let d3 = new Dot("rtyuifgh", 565, 334)
    let d4 = new Dot("rqwe", 55, 23)

    let ds = new Dots()

    ds.CREATE(d1)
    ds.CREATE(d11)
    ds.CREATE(d2)
    ds.CREATE(d3)
    ds.CREATE(d4)

    ds.DELETE(d4)

    console.log(ds.READ(d1))

    let d5 = new Dot("qwerty", 5233, 12)
    ds.UPDATE(d5)

    console.log(ds.READ(d2))

    console.log(ds.max_range())

    console.log(ds.near_dots(d1, 1000))

    console.log(ds.get_dot_axes(d2))

    console.log(ds.inside_rectangle(d1, d11))
}

main()