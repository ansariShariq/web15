let input = `1
7 20
2 6 4 3 6 8 9`
input = input.split("\n");
const tc = +input[0];
let m = 1;
for (let a = 1; a <= tc; a++) {
  const [n,k] = input[m++].trim().split(" ").map(Number);
  const arr = input[m++].split(" ").map(Number);
//   console.log(arr, n,k);
    NumberofSegments1(arr,n,k)
}
function NumberofSegments1(arr,n,k){
    let count = 0
    for(let i = 0;i<n;i++){
        let sum = 0
        for(let j = i;j<n;j++){
            sum += arr[j]
            // console.log(sum)
            if(sum < k ){
                count++
            }
        }
    }
    console.log(count)
}
// function NumberofSegments(arr, n,k){
//     let sum = 0
//     let i = 0
//     let j = 0
//     let count = 0
//     while(i<n){
//         sum += arr[i]
//         if(sum < k){
//             count++
//         }
//         else{

//         }
//     }
    
// }