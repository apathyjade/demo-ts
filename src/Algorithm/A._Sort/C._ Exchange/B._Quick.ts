
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

console.log(quickShort([4, 6, 8, 5, 9, 1, 2, 5, 3, 2]))