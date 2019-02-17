
/** 单例模式 */

class SingleClass {
  private static SingleClassInc: SingleClass
  constructor () {

  }
  static getInc () {
    SingleClass.SingleClassInc = SingleClass.SingleClassInc || new SingleClass()
    return SingleClass.SingleClassInc
  }
}

console.log(SingleClass.getInc() === SingleClass.getInc())