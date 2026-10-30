const removeFromArray = function(arr, ...itemsToDelete) {
    let newArr = [];

    arr.map((item) => {
        if (!itemsToDelete.includes(item)) {
            newArr.push(item);
        }
    })
    return newArr;
}

// Do not edit below this line

module.exports = removeFromArray;
