function removedubs(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] == arr[i]) {
                delete arr[j];
            }
        }
    }

// arr.filter removes empty array locations
    var newArr = arr.filter(() => {
        return arr;
    });
    console.log(newArr);

}

removedubs([0, 1, 0, 1, 0, 2, 2, 3, 4, 4,10,12,12])








/*var arr = [0,1,0,2,3,1,4,4,5,50,50];

for (var i=0; i < arr.length; i++)
    {
        for(var j=i+1; j < arr.length; j++ )
            {
                if(arr[j] == arr[i]){
                    delete arr[j];
                    
                }
            }
    }
        

console.log(arr);
var newarr = arr.filter(myFunction);

function myFunction() {
    
   if(arr[0] == 0){
       return "Hello"
   }
 
}
console.log(newarr);*/




/*var arr = [0,1,0,1,0,2,2,3];

for (var i=0; i < arr.length; i++)
    {
        for(var j=i+1; j < arr.length; j++ )
            {
                if(arr[j] == arr[i]){
                    delete arr[j];
                    
                }
            }
    }
        


var newArr = arr.filter( () => {return arr;});
console.log(newArr);*/
