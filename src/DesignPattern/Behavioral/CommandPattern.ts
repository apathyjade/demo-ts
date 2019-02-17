/** 命令模式 */

abstract class AbstractCommander {
  protected executer: Executer
  constructor (executer: Executer) {
    this.executer = executer
  }
  public execute (): void {}
}

class CommandOpen extends AbstractCommander {
  public execute (): void {
    this.executer.open()
  }
}

class CommandClose extends AbstractCommander {
  public execute (): void {
    this.executer.close()
  }
}

class Executer {
  public open ():void {
    console.log(`open: is opening...`)
  }
  public close (): void {
    console.log(`close: is closing...`)
  }
}

class Invoke {
  private commander: AbstractCommander
  public setCommander (commander: AbstractCommander) {
    this.commander = commander
  }
  public runCommand () {
    this.commander.execute()
  }
}

const executer: Executer = new Executer()
const invoke: Invoke = new Invoke()
invoke.setCommander(new CommandOpen(executer))
invoke.runCommand()
invoke.setCommander(new CommandClose(executer))
invoke.runCommand()