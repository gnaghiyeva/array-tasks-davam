let array1 = [1,2,3,4,5];
let array2 = [1,2,6,7,8];

for(let i = 0; i < array1.Length; i++)
{
    for(let j=0; j < array2.Length; j++)
    {
       
        /*
        if (array1[i] == array2[j])
        {
            console.log(array1[i]); //1,2
        }
        */
        if (array1[i] != array2[j])
        {
           console.log(array1[i]); 
        }
    }
}