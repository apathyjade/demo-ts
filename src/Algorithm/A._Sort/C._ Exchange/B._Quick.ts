
function exchange (arra, i, j) {
  let tmp = arra[i];
  arra[i] = arra[j]
  arra[j] = tmp
  tmp = undefined
  return arra
}
function quickShort (arra) {
    if (arra.length <= 1) {
        return arra
    }
    let ci = Math.floor(arra.length/2);
    let c = arra.splice(ci, 1)[0]
    let left = []
    let right = []
    for (let i = 0, l = arra.length; i < l; i++) {
        if (arra[i] <= c) {
            left.push(arra[i])
        } else {
            right.push(arra[i])
        }
    }
    return quickShort(left).concat([c], quickShort(right))
}
function quickShort_v2 (array, start, end) {
  if (start >= end) {
    return array;
  }
  if (start + 1 === end) {
    if (array[start] > array[end]) {
      exchange(array, start, end);
    }
    return array;
  }

  let base = start
  let cursor = base
  let b = array[base]
  let i = base + 1
  let j = end
  for (;i <= j;) {
    if (array[i] < b) {
      cursor = i;
      i++;
      continue;
    }
    if (array[j] >= b) {
      j--;
      continue;
    }
    exchange(array, i, j)
    cursor = i;
    i++;
    j--;
  }
  if (cursor !== base) {
    exchange(array, base, cursor)
  }
  if (cursor > start + 1) {
    arguments.callee(array, start, cursor - 1)
  }
  if (cursor < end - 1) {
    arguments.callee(array, cursor + 1, end)
  }
  return array
}
let quickShort_v2_list = [4, 6, 8, 5, 9, 1, 2, 5, 3, 20, 15, 63, 12, 4, 15,72, 13, 2]
console.log(quickShort_v2(quickShort_v2_list, 0, quickShort_v2_list.length -1 ))

// let list1 = [9, 6 ]
// console.log(quickShort_v2(list1, 0, list1.length -1 ))
