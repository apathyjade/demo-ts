
/** 观察者模式 */
class Subject {
    private Observers: Array<Observer> = []
    private State: number
    public setState (State: number) {
        this.State = State
        this.notifyObservers()
    }
    public addObserver (observer: Observer) {
        this.Observers.push(observer)
    }
    private notifyObservers () {
        this.Observers.forEach(item => {
            item.update()
        })
    }
}

class Observer {
    private Name: string
    constructor (Name: string) {
        this.Name = Name
    }
    public update() {
        console.log(`${this.Name} 接收到通知`)
    }
}

const subject: Subject = new Subject()
const observerJia: Observer = new Observer('甲')
const observerYi: Observer = new Observer('乙')

subject.addObserver(observerJia)
subject.addObserver(observerYi)
subject.setState(1)
