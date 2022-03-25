// Write your code below this line.
let lucky = [];

const luckyNums = (n) => {
for (let i=0; i < n; i++) {
    let nums = Math.ceil(Math.random() * 10)
    if(lucky.includes(nums)) {
        i--;
    } else if (!lucky.includes(nums)) {
        lucky.push(nums);
    }
}
}
luckyNums(6);
console.log(lucky);