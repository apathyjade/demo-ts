
/** 迭代器模式 */

class NumberIterator {
    private data: Array<number>
    private index: number
    constructor (data: Array<number>) {
        this.data = data
        this.index = 0
    }
    public hasNext () {
        return this.index < this.data.length
    }
    public next () {
        return this.data[this.index++]
    }
}
let numberIterator = new NumberIterator([1, 11, 2, 3, 4, 5, 6, 7, 8, 9])
for(;numberIterator.hasNext();){
    let i = numberIterator.next();
    console.log("id : " + i);
 }
 