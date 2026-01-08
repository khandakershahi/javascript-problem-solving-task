function duplicatesRemove(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}


console.log(`After removing the duplicates, the array is:[${duplicatesRemove([1, 2, 2, 3, 4, 4])}]`);

