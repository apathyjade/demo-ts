
/** 状态模式 */

class Employee {
    private Computer: Computer
    public setComputer (Computer: Computer) {
        this.Computer = Computer
    }
    public doPPT () {
        this.Computer.doPPT()
    }
    public develop () {
        this.Computer.develop()
    }
}
abstract class Computer {
    protected Name: string
    public doPPT () {}
    public develop () {}
}

class Mac extends Computer {
    protected Name: string = '苹果电脑'
    public doPPT () {
        console.log(`${this.Name} 做ppt很方便`)
    }
    public develop () {
        console.log(`${this.Name} 开发很高效`)
    }
}

class Lenovo extends Computer {
    protected Name: string = '联想电脑'
    public doPPT () {
        console.log(`${this.Name} 做ppt还可以`)
    }
    public develop () {
        console.log(`${this.Name} 开发还可以`)
    }
}
const employee: Employee = new Employee()
employee.setComputer(new Mac())
employee.doPPT()
employee.develop()
employee.setComputer(new Lenovo())
employee.doPPT()
employee.develop()
