let temp = ['apple', 'banana', 'Kiwi']

let newValue = temp.map((etement, idx) => {
    return '${idx+l}. ${element}'
})

console.log(newValue)