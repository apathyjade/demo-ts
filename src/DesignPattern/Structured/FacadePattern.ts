/** 外观模式 */

abstract class Cooking {
  public make () {}
}

class CookingFish extends Cooking {
  public make () {
    console.log(`做了一条鱼`)
  }
}
class CookingEgg extends Cooking {
  public make () {
    console.log(`炒了一盘鸡蛋`)
  }
}

class CookingMaker {
  public makeFish () {
    new CookingFish().make()
  }
  public makeEgg () {
    new CookingEgg().make()
  }
}
const CookingMakerInc = new CookingMaker()
CookingMakerInc.makeFish()
CookingMakerInc.makeEgg()