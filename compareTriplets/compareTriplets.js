function compareTriplets(a, b) {
    //if a > b then a's score increases by 1
    let aScore = 0;
    let bScore = 0;
    if(a.length == b.length){
        for (let i = 0; i < a.length; i++) {
            if(a[i] > b[i]){
                aScore++
            }
            if(b[i] > a[i]){
                bScore++
            }
            if(b[i] == a[i]){
                continue
            }
        }
        return [aScore,bScore]
    }    
    
}

let aArr = [17, 28, 30]
let bArr = [30, 2, 1]
console.log(compareTriplets(aArr, bArr))
