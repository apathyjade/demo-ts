
/** 归并排序 */


function merge(arra, first, mid, last) {
  let tmp = [], x = first, y = mid + 1
  for (let i = first; i <= last; i++) {
    tmp[i] = arra[i]
  }

  for (let i = first; i <= last; i++) {
    if (x > mid) {
      arra[i] = tmp[y++]
    } else if (y > last) {
      arra[i] = tmp[x++]
    } else if (tmp[x] < tmp[y]) {
      arra[i] = tmp[x++]
    } else {
      arra[i] = tmp[y++]
    }
  }
}

function mergeSort (arra, first = 0, last = arra.length - 1) {
  let l = last - first
  if (last <= first) {
    return arra
  }
  let mid = Math.floor((last + first)/2)
  mergeSort(arra, first, mid)
  mergeSort(arra, mid + 1, last)
  merge(arra, first, mid, last)
}
let arra = [1, 6, 2, 5, 9, 2, 0]
mergeSort(arra)
console.log(arra)