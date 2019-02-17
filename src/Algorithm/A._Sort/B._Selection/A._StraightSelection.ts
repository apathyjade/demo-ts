/** 直接选择 */

function sortStraightSelection (arra) {
  let l = arra.length
  let tem
  for (let i = 0; i < l; i++) {
    let min = i
    for (let j = i + 1; j < l; j++) {
      arra[j] < arra[min] && (min = j)
    }
    min !== i && (tem = arra[i], arra[i] = arra[min], arra[min] = tem)
  }
  return arra
}

console.log(sortStraightSelection([5, 4, 8, 1, 9, 12, 4, 24, 7, 18, 9, 13, 56, 43, 28, 35, 75, 46,17]))