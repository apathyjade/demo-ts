/** 装饰器模式 */

abstract class Shap {
  protected Name: string
  public draw () {}
  public getName () {
    return this.Name
  }
}
abstract class ShapDecorator extends Shap {
  protected ShapInc: Shap
  constructor (ShapInc: Shap) {
    super()
    this.ShapInc = ShapInc
  }
  public draw () {
    this.ShapInc.draw()
    this.setBorderColor(this.ShapInc);
  }
  public setBorderColor (ShapInc: Shap) {
    console.log(`${this.Name}装饰器 把 ${ShapInc.getName()} 装饰成${this.Name}`)
  }
}
class ShapCircel extends Shap {
  protected Name: string = '圆'
  public draw () {
    console.log(`我是 ${this.Name}`)
  }
}
class ShapRectangular extends Shap {
  protected Name: string = '矩形'
  public draw () {
    console.log(`我是 ${this.Name}`)
  }
}

class RedShapDecorator extends ShapDecorator {
  protected Name: string = '红色'
}
class BlueShapDecorator extends ShapDecorator {
  protected Name: string = '蓝色'
}

const CircelInc = new ShapCircel()
const RedShapDecoratorInc = new RedShapDecorator(CircelInc)
const BlueShapDecoratorInc = new BlueShapDecorator(CircelInc)

CircelInc.draw()
console.log('----------')
RedShapDecoratorInc.draw()
console.log('----------')
BlueShapDecoratorInc.draw()