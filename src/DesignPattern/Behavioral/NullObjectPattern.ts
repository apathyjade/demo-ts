/** 空对象模式 */

abstract class Fruit {
    protected Name: string
    public isNull () {}
    public getName () {
        return this.Name
    }
}

class NullFruit extends Fruit {
    protected Name: string = '空'
    public isNull () {
        return true
    }
    public getName () {
        return `不存在该水果`
    }
}

class Watermelon extends Fruit {
    protected Name: string = '西瓜'
    public isNull () {
        return false
    }
}

class Strawberry extends Fruit {
    protected Name: string = '草莓'
    public isNull () {
        return false
    }
}

class Apple extends Fruit {
    protected Name: string = '苹果'
    public isNull () {
        return false
    }
}

class Shop {
    private Fruits: Array <Fruit> = [new Watermelon(), new Strawberry(), new Apple()]
    public getFruit (Name) {
        let FruitInc: Fruit
        this.Fruits.forEach(item => {
            item.getName() === Name && (FruitInc = item)
        })
        return FruitInc || new NullFruit()
    }
}
const shop: Shop = new Shop()
console.log(shop.getFruit('西瓜').getName())
console.log(shop.getFruit('草莓').getName())
console.log(shop.getFruit('苹果').getName())
console.log(shop.getFruit('葡萄').getName())