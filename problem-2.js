function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}
console.log(`Vowels count is: ${getCount('education')}`);
