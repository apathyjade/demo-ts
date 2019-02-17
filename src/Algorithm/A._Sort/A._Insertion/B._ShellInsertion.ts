
/** 希尔排序 */

function __sortByStraightInsertion (arra: Array<number>, interval: number): Array<number> {
  let tem: number
  let l = arra.length
  for (let i = interval; i < l; i += interval) {
    tem = arra[i]
    let j = i
    for (; j > 0 && arra[j - interval] > tem; j -= interval) {
      arra[j] = arra[j - interval]
    }
    i !== j && (arra[j] = tem)
  }
  return arra
}
function sortByShellInsertion (arra) {
  let intervals = [8, 4, 2, 1]
  for (let i = 0, l = intervals.length; i < l; i++) {
    __sortByStraightInsertion(arra, intervals[i])
  }
  return arra
}

console.log(sortByShellInsertion([5, 4, 8, 1, 9, 12, 4, 24, 7, 18, 9, 13, 56, 43, 28, 35, 75, 46,17]))