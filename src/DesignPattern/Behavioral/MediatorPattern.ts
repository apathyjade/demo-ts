
/** 中介者模式 */

class Mediator {
    protected colleagues
    constructor () {
        this.colleagues = new Map([])
    }
    public register (colleague: Colleague): void {
        this.colleagues.set(colleague.name, colleague)
    }
    public sendMsg (name: string, msg: string, colleague: Colleague) {
        let toColleague = this.colleagues.get(name)
        console.log('消息转发中...')
        toColleague.receiveMsg(msg, colleague.name)
    }
}
class Colleague {
    public name: string
    protected mediator: Mediator
    constructor (name: string, mediator: Mediator) {
        this.name = name
        this.mediator = mediator
        this.mediator.register(this)
    }
    public sendMsg (name: string, msg: string) {
        console.log(`发送消息给 '${name}': ${msg}`)
        this.mediator.sendMsg(name, msg, this)
    }
    public receiveMsg (msg: string, from: string) {
        console.log(`收到来自 '${from}': ${msg}`)
    }
}
const mediator: Mediator = new Mediator()
const jia: Colleague = new Colleague('甲', mediator)
const yi: Colleague = new Colleague('乙', mediator)

jia.sendMsg('乙', '你是傻子吗？')
yi.sendMsg('甲', '傻子')