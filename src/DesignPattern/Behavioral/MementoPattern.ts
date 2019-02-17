
/** 备忘录模式 */

class Memento {
    private state: object
    constructor (state: object) {
        this.state = JSON.parse(JSON.stringify(state))
    }
    public getState () {
        return this.state
    }
}

class Recorder {
    private recorders: Array<Memento> = []
    public addRecorder (memento: Memento): void {
        this.recorders.push(memento)
    }
    public getRecorder (index: number): Memento {
        return this.recorders[index]
    }
}

class Game {
    private state: object
    public setState (state: object): void {
        this.state = state
    }
    public getState (): object {
        return this.state
    }
    public setStateByMemento (memento: Memento) {
        this.setState(memento.getState())
    }
}

const game: Game = new Game()
const recorder: Recorder = new Recorder()

game.setState({v: 1, level: 1})
recorder.addRecorder(new Memento(game.getState()))

game.setState({v: 2, level: 2})
recorder.addRecorder(new Memento(game.getState()))

game.setState({v: 3, level: 3})
recorder.addRecorder(new Memento(game.getState()))

console.log('当前数据：' + JSON.stringify(game.getState()))
game.setStateByMemento(recorder.getRecorder(0))
console.log('记录一数据：' + JSON.stringify(game.getState()))
game.setStateByMemento(recorder.getRecorder(1))
console.log('记录二数据：' + JSON.stringify(game.getState()))
game.setStateByMemento(recorder.getRecorder(2))
console.log('记录三数据：' + JSON.stringify(game.getState()))

