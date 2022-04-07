let input = `3
8
1 2 1 3 2 7 4 2
5
1 2 1 3 4
4
1 2 2 1`;
input = input.split("\n");
const tc = +input[0];
let m = 1;
for (let a = 1; a <= tc; a++) {
  const n = +input[m++];
  const arr = input[m++].split(" ").map(Number);
//   console.log(arr, n);
    uniquEl(arr,n)
}
function uniquEl(arr,n){
    let obj = {
        length : 0
    }
    
    let maxLength = -1
    let i = 0
    let j = 0
    while(i<n){
        if(obj[arr[i]] === undefined || obj[arr[i]] === 0){
            obj[arr[i]] = 1
            obj.length++
            i++
        }
        else {
            obj.length--
            obj[arr[j]]--
            j++
        }
        maxLength = Math.max(obj.length,maxLength)
    }console.log(maxLength)
}



