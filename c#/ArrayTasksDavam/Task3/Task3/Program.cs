// See https://aka.ms/new-console-template for more information

int[] array = { 1, 2, 3, 2, 5, 3 };

for(int i = 0; i < array.Length; i++)
{
    for(int j=i+1; j < array.Length; j++)
    {
        if (array[i] == array[j])
        {
            Console.Write(array[i]+" ");
        }
    }
}
