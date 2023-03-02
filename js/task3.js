let array = [1,2,3,2,5,3];

for(let i = 0;i<array.length;i++){
    for(let j=i+1; j<array.length; j++){
        if(array[i]==array[j]){
            console.log(array[i]+" ")
        }
    }
}