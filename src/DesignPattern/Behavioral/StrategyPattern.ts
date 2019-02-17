
/** 策略模式 */

class Developer {
    public makeCode (EditorInc: Editor) {
        EditorInc.writeCode()
    }
}

abstract class Editor {
    protected Name: string = '编辑器'
    public writeCode () {}
}

class VScode extends Editor {
    protected Name: string = 'VS code'
    public writeCode () {
        console.log(`${this.Name} 编写代码`)
    }
}

class WebStorm extends Editor {
    protected Name: string = 'WebStorm'
    public writeCode () {
        console.log(`${this.Name} 编写代码`)
    }
}

class Sublime extends Editor {
    protected Name: string = 'Sublime'
    public writeCode () {
        console.log(`${this.Name} 编写代码`)
    }
}

const DeveloperInc: Developer = new Developer()
DeveloperInc.makeCode(new VScode())
DeveloperInc.makeCode(new WebStorm())
DeveloperInc.makeCode(new Sublime())
