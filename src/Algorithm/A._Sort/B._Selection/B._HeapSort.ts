
/** 堆排序 */
function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp; 
}
function adjustHeap (arra, i, l) {
  let tmp = arra[i]
  for (let j = 2 * i + 1; j < l; j = 2* j + 1) {
    if (j + 1 < l && arra[j] < arra[j + 1]) {
      j++
    }
    if (tmp < arra[j]) {
      swap(arra, i, j)
      i = j
    } else {
      break
    }
  }
}

function heapSort (arra) {
  let l = arra.length
  for (let i = Math.floor(l / 2 - 1); i >= 0; i--) {
    adjustHeap(arra, i, l)
  }
  for (let i = Math.floor(l - 1); i > 0; i--) {
    swap(arra, 0, i)
    adjustHeap(arra, 0, i)
  }
  return arra
}
let Arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
console.log(heapSort(Arr))
