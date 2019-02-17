
/** 桥接模式 */

interface DrawCircel {
    drawCircle(Radius: number, X:number, Y: number): void
}

class RedCircel implements DrawCircel {
    public drawCircle (Radius: number, X:number, Y: number): void {
        console.log(`RedCircel: 在 [${X}, ${Y}] 画了一个 ${Radius} 大的 “红色” 的圆`)
    }
}
class BlueCircel implements DrawCircel {
    public drawCircle (Radius: number, X:number, Y: number): void {
        console.log(`BlueCircel: 在 [${X}, ${Y}] 画了一个 ${Radius} 大的 “绿色” 的圆`)
    }
}

class Circel {
    private X: number
    private Y: number
    private Radius: number
    private Draw: DrawCircel
    constructor (Radius: number, X: number, Y: number, Draw: DrawCircel) {
        this.X = X
        this.Y = Y
        this.Radius = Radius
        this.Draw = Draw
    }
    public draw () {
        this.Draw.drawCircle(this.Radius, this.X, this.Y)
    }
}

new Circel(100, 0, 0, new RedCircel()).draw()
new Circel(50, 10, 10, new BlueCircel()).draw()
