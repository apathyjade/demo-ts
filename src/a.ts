function sortByStraightInsertion (arra: Array<number>): Array<number> {
  let tem: number

  for (let i = 1, l = arra.length; i < l; i++) {
    tem = arra[i]
    let j = i
    for (; j > 0 && arra[j - 1] > tem; j--) {
      arra[j] = arra[j - 1]
    }
    arra[j] = tem
  }
  return arra
}
var tmp=[]
var d = []
for(let i = 0; i < 100000; i++) {
   tmp.push(0)
   d.push(Math.random())
}
var a1 = () => {
    var t1 = new Date().getTime()
    sortByStraightInsertion(d)
    var t2 = new Date().getTime()
    console.log(t2-t1)
}
var f = (a) => {
    var l=a.length
    for (let i=0;i<l-1;i++) {
        for(let j=i+1;j<l;j++) {
            a[i] <= a[j] ? tmp[j]++ : tmp[i]++
        }
    }
    var b = []
    for (let i=0;i<l-1;i++) {
        b[tmp[i]] = a[i]
    }
    return b
}
var a2 = () => {
    var t1 = new Date().getTime()
    f(d)
    var t2 = new Date().getTime()
    console.log(t2-t1)
}
a1()
// a2()