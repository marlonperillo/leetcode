/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums = nums.sort((a, b)=>{
     return a - b
    })
  
    //special cases
    if(nums.length < 3){
        return []
    }else if(nums.length == 3){
        let sum = 0;
        nums.forEach(a => {
            sum += a
        })
        if(sum == 0)
            return [nums]
        else
            return []
    }
    
    //normal cases
    const positives = nums.filter(a => a > 0) 
    const negatives = nums.filter(a => a < 0)
    const zeroes = nums.filter(a => a == 0)
    let returnArray = new Set()
    let returnArrayString = new Set()
    //+,-,0
    //+,+,-
    //-,-,0
    //0,0,0
    
    //+,-,0
    positives.forEach(p => {
        if(negatives.includes(p*-1)){
            const n = p * -1
            if(zeroes.length >= 1){
                if(p + n == 0){
                    if(!returnArrayString.has(`${n},0,${p}`)){
                        returnArrayString.add(`${n},0,${p}`)
                        returnArray.add([n,0,p])           
                    }
                    
                }
            }
        }

    })
    
    //-,-,+
    for(let i = 0; i < negatives.length-1; i++){
        for(let j = i+1; j < negatives.length; j++){
            if(positives.includes( -1 * (negatives[i] + negatives[j]) )){
                const p = -1 * (negatives[i] + negatives[j])
                if(!returnArrayString.has(`${negatives[i]},${negatives[j]},${p}`)){
                        returnArrayString.add(`${negatives[i]},${negatives[j]},${p}`)
                        returnArray.add([negatives[i], negatives[j], p])           
                    }
            }
        }
    }
    
    //-,-,+
    for(let i = 0; i < positives.length-1; i++){
        for(let j = i+1; j < positives.length; j++){
            if(negatives.includes(-1 * (positives[i] + positives[j]))){
                const n = -1 * (positives[i] + positives[j])
                if(!returnArrayString.has(`${positives[i]},${positives[j]},${n}`)){
                    returnArrayString.add(`${positives[i]},${positives[j]},${n}`)
                    returnArray.add([n, positives[j], positives[i]])           
                }               
            }
        }
    }
    
    //0,0,0
    if(zeroes.length >= 3)
        returnArray.add([0,0,0])
    
    
    
    return Array.from(returnArray)
};