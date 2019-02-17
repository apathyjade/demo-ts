
/** 过滤器模式 */

class Person {
    private Name: string
    private Gender: string
    private Marital: string
    constructor (Name: string, Gender: string, Marital: string) {
        this.Name = Name
        this.Gender = Gender
        this.Marital = Marital
    }
    public getName () {
        return this.Name
    }
    public getGender () {
        return this.Gender
    }
    public getMarital () {
        return this.Marital
    }
}
interface Criteria {
    meetCriteria(): Array<Person>
}
class Male {
    public meetCriteria (List: Array<Person>) {
        return List.filter(item => item.getGender() === 'Male')
    }
}

class Female {
    public meetCriteria (List: Array<Person>) {
        return List.filter(item => item.getGender() === 'Female')
    }
}

let list = []
list.push(new Person('甲', 'Male', 'Y'))
list.push(new Person('乙', 'Female', 'Y'))
list.push(new Person('丙', 'Male', 'n'))
list.push(new Person('丁', 'Male', 'n'))
list.push(new Person('戊', 'Female', 'Y'))
console.log('----- Male -----')
console.log(new Male().meetCriteria(list))
console.log('----- Female -----')
console.log(new Female().meetCriteria(list))