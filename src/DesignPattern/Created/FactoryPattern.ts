
/** 工厂模式 */

abstract class Stationery {
  protected Name: string
  protected Describe: string
}

class Pencil extends Stationery {
  Name = '铅笔'
  Describe = '可以写铅笔字'
}

class Pen extends Stationery {
  Name = '钢笔'
  Describe = '可以写铅笔字'
}

class FactoryStationery {
  private ClassMap: object = {}
  public createStationery (Type) {
    let fn = this.ClassMap[Type]
    if (!fn) {
      throw new Error('尚未注册该')
      return
    }
    return new fn()
  }
  public registerClass (key: string, StationeryInc: Function) {
    if (typeof key !== 'string') {
      throw new Error('请传入正确的注册key')
      return
    }
    if (this.ClassMap[key]) {
      throw new Error('构造类已注册')
      return
    }
    if (typeof StationeryInc !== 'function') {
      throw new Error('请传入正确的构造方法')
      return
    }
    this.ClassMap[key] = StationeryInc
  }
}
const FactoryStationeryIns = new FactoryStationery()
FactoryStationeryIns.registerClass('pen', Pen)
FactoryStationeryIns.registerClass('pencil', Pencil)

const PenIns = FactoryStationeryIns.createStationery('pen')
const PencilIns = FactoryStationeryIns.createStationery('pencil')

console.log(PenIns instanceof Pen)
console.log(PencilIns instanceof Pencil)