const input  =`5 5 7`
let [r,c,n] = input.trim().split(" ").map(Number)
let arrCheck = [[-2,-1],[-2,1],[-1,-2],[-1,2],[2,-1],[2,1],[1,-2],[1,2]]
let res = {}
// console.log(recur(r,c,n,arrCheck,res))
// console.log(r,c,n,arrCheck)
recur(r,c,n,arrCheck,res)
function recur(i,j,k,arr,obj){
    // console.log(i,j,k)
    
    if(k=== 0 && i>0&& j>0&& i<11 && j<11 ){
        if(obj[`key${i}_${j}`] === undefined) {
            obj[`key${i}_${j}`]  = 1
        } 
        return 1
    }
    else if(i>10 || i<1){
        return 0
    }
    else if(j>10 || j<1){
        return 0
    }
    else if(k === 0){
        return 0
    }
    return fun(i,j,k,arr,obj)
}
function fun(i,j,k,arr,obj){
    
    let sum = 0
    for(let p = 0;p<arr.length;p++){
        sum += recur(i+arr[p][0],j+arr[p][1],k-1,arr,obj)
    }
    return sum
}
console.log(Object.keys(res).length)