
/** 桶排序 */

function bucketSort (arra) {
    let ArraBucket = [], back = []
    for (let i = 0, l = arra.length; i < l; i++) {
        let item = arra[i]
        ArraBucket[item] || (ArraBucket[item] = []);
        ArraBucket[item].push(item);
    }
    for (let i =0, l = ArraBucket.length; i < l; i++) {
        let item = ArraBucket[i]
        if (!item) {
            continue;
        }
        for (let i = 0, l = item.length; i < l; i++) {
            back.push(item[i])
        }
    }
    return back
}
console.log(bucketSort([1, 6, 2, 5, 9, 2, 0, 14, 13, 17, 16, 201, 152, 124, 161, 334, 2421, 512, 5321, 1231, 412, 125, 1221, 456]))