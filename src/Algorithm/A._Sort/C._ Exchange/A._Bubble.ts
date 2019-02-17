

function BubbleSort (arra) {
    let l = arra.length
    for (let i = 0; i < l - 1; i++) {
        for (let j = 0; j < l - i - 1; j++) {
            if (arra[j] > arra[j + 1]) {
                let tmp = arra[j]
                arra[j] = arra[j + 1]
                arra[j + 1] = tmp
            }
        }
    }
    return arra
}

console.log(BubbleSort([4, 6, 8, 5, 9, 1, 2, 5, 3, 2]))