//Tuesday : Selection Sort
//how does it work: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

//Now go through the rest of the array (excluding the first element) find the index of the lowest and swap it with the second element.

function selectionsort(arr){
    for(i=0;i<arr.length;i++){
       var minindex=i;
        for(j=i+1;j<arr.length;j++)
        {
        if(arr[j]<arr[minindex])
        {
           var minindex=j;
        }
    }
    var temp=arr[i];
    arr[i]=arr[minindex];
    arr[minindex]=temp;
}
return arr;
}

console.log(selectionsort([29,72,98,13,87,66,52,51,36]));