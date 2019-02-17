
/** 直接插入 */
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

console.log(sortByStraightInsertion([4, 5, 8, 1, 9, 12, 4, 24, 7, 18]))