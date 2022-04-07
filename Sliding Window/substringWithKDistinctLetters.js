let  input = `5 2
abccd`

input = input.trim().split("\n")
let [n,k] = input[0].trim().split(" ").map(Number)
let str = input[1].trim()
substringWithKDistinctLetters(str,n,k)
function substringWithKDistinctLetters(arr,n,k){
    let i = 0
    let j = 0
    let count = 0
    let length = 0
    let obj = {
        
    }

    while(j<=n){
        console.log(obj,count)
        if(obj.length < k){
            if(obj[arr[j]] === undefined|| obj[arr[j]] ===0){
                obj[arr[j]] = 1
                length++
                j++
            }
            else{
                if(obj[arr[i]] === 1){
                   length--
                }
                obj[arr[i]]--
                i++
            }
        }
        else if(obj.length === k){
            count++
            obj[arr[i]]--
           length--
            i++
        }
        
    }
    console.log(count)
    
}