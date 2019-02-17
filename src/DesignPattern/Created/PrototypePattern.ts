
/** 原型模式 */
class PrototyleClass {
  public static clone (): PrototyleClass {
    return new PrototyleClass()
  }
}
console.log(PrototyleClass.clone().constructor === PrototyleClass.clone().constructor)