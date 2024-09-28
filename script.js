function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let result = '';

    // Iterate over the keys of the object
    for (let key of Object.keys(obj)) {
        // Use the key to access the symbol and value
        let [symbol, value] = obj[key];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

console.log(convertToRoman(36));