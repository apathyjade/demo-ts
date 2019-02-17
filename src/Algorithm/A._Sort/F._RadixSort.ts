
/** 基数排序 */

function radixSort(arra, maxDigit) {
    let box = []
    let m = 10
    for (let i = 1; i <= maxDigit; i++ , m *= 10) {
        for (let j = 0, l = arra.length; j < l; j++) {
            let index = arra[j] % m
            !box[index] && (box[index] = [])
            !box[index].push(arra[j])
        }

        let pos = 0
        for (let j = 0, l = box.length; j < l; j++) {
            if (box[j]) {
                let value = null
                while ((value = box[j].shift()) != null) {
                    arra[pos++] = value;
                }
            }
        }

    }
}

let arraradixSort = [1, 6, 2, 5, 9, 2, 0, 14, 13, 17, 16, 201, 152, 124, 161, 334, 2421, 512, 5321, 1231, 412, 125, 1221, 456]
radixSort(arraradixSort, 4)
console.log(arraradixSort)