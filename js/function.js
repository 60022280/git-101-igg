function add(a, b) {
    return a + b
}

const add = (a, b) => a + b


function mul(a, b) {
    return a * b
}

function searchCustomer(customerName) {
    // find some customer
}

console.log(add(20, 3))

console.log(mul(20, 3))


const arr = ['John', 'Jane', 'James', 'Joe', 'June']

// for (let i = 0; i, < arr.length; i++) {
//     console.log(arr[i])
// }

for (let index in arr) {
    console.log(arr[index])
}

arr.forEach((item, index))

for (let i = 1; i <= 20; i + 1) {
    console.log(i)
}

for (let i = 1; i <= 20; i += 1) {
    console.log(i)
}