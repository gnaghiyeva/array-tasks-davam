let array = [1,2,3,4,5.3];

let max = array[0];
let min = array[0];

for(let i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }

    if(array[i]<min){
        min=array[i];
    }
}
console.log("max = "+" "+max);
console.log("min = "+" "+min);