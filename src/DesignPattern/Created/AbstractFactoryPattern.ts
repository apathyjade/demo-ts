/** 抽象工厂模式 */

class FactoryComputer {
  private ClassMap: object = {}
  public createStationery (Type) {
    let fn = this.ClassMap[Type]
    if (!fn) {
      throw new Error('尚未注册该')
      return
    }

    return new fn()
  }
  public registerClass (key, val) {
    if (typeof key !== 'string') {
      throw new Error('请传入正确的注册key')
      return
    }
    if (this.ClassMap[key]) {
      throw new Error('构造类已注册')
      return
    }
    if (typeof val !== 'function') {
      throw new Error('请传入正确的构造方法')
      return
    }
    this.ClassMap[key] = val
  }
}
abstract class Maker {
  protected Name: string
  protected Describe: string
}
class MacMaker extends Maker {
  protected Name: string = 'Mac'
  protected Describe: string = 'Mac 制造者'
}

class LenovoMaker extends Maker {
  protected Name: string = 'Maker'
  protected Describe: string = 'Maker 制造者'
}

class FactoryMacStationery extends FactoryComputer {
  createStationery () {
    return new MacMaker()
  }
}
class FactoryLenovoStationery extends FactoryComputer {
  createStationery () {
    return new LenovoMaker()
  }
}

const FactoryComputerIns = new FactoryComputer()
FactoryComputerIns.registerClass('mac', FactoryMacStationery)
FactoryComputerIns.registerClass('lenovo', FactoryLenovoStationery)

const FactoryMacIns = FactoryComputerIns.createStationery('mac')
const FactoryLenovoIns = FactoryComputerIns.createStationery('lenovo')

const MacMakerIns = FactoryMacIns.createStationery()
const LenovoMakerIns = FactoryLenovoIns.createStationery()


console.log(MacMakerIns instanceof MacMaker)
console.log(LenovoMakerIns instanceof LenovoMaker)