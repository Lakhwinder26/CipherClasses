//Function changes vowels randomly everytime on reloading
function replace() {

    var str = 'bcdfghjklmnpqrstvwxyz';
    var arr = str.split("");
    var item = arr[Math.floor(Math.random() * arr.length)];
    return item;

}

var str = 'LuckySaini'
var vowels = /[aeiou]/gi;
result = str.replace(vowels, replace());
console.log(result);





/*
//Function changes vowels randomly everytime on reloading.
//Not Working Properly

function replace(line) {
    var x = line.split("");
    var str = 'bcdfghjklmnpqrstvwxyz';
    var arr = str.split("");
    var item = arr[Math.floor(Math.random() * arr.length)];
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    

    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < vowels.length; j++)
            if (vowels[j] == x[i]) {
                var changed = line.replace(x[i], item);
                console.log(changed);
            }
    }

}
replace('Lakhwinder Singh');

*/

    
    


