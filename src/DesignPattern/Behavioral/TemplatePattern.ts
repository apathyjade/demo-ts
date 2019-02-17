
/** 模板模式 */
abstract class Learn {
    protected Name: string
    protected learnWhat () {}
    protected learnWhy () {}
    protected learnHow () {}
    public learn () {
        this.learnWhat()
        this.learnWhy()
        this.learnHow()
    }
}
class LearnMath extends Learn {
    protected Name: string = '数学'
    protected learnWhat () {
        console.log(`了解 ${this.Name} 是什么`)
    }
    protected learnWhy () {
        console.log(`我们为什么学 ${this.Name}`)
    }
    protected learnHow () {
        console.log(`我们怎么学好 ${this.Name}`)
    }
}
class LearnChinese extends Learn {
    protected Name: string = '语文'
    protected learnWhat () {
        console.log(`了解 ${this.Name} 是什么`)
    }
    protected learnWhy () {
        console.log(`我们为什么学 ${this.Name}`)
    }
    protected learnHow () {
        console.log(`我们怎么学好 ${this.Name}`)
    }
}
class LearnEnglish extends Learn {
    protected Name: string = '英语'
    protected learnWhat () {
        console.log(`了解 ${this.Name} 是什么`)
    }
    protected learnWhy () {
        console.log(`我们为什么学 ${this.Name}`)
    }
    protected learnHow () {
        console.log(`我们怎么学好 ${this.Name}`)
    }
}

new LearnMath().learn()
new LearnChinese().learn()
new LearnEnglish().learn()