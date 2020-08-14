function specialReverse(str, letter, letter2) {

    var a = str.split(" ");
    
    for (var i = 0; i < a.length; i++) {
        if (a[i].charAt(0) == letter || a[i].charAt(0) == letter) {
            a[i] = a[i].split("").reverse().join("");
        }
    }
    console.log(a.join(" "));
}
specialReverse('Today is the First day of Term','T')





/*var x = 'some things are left unsaid';
var y = x.split(" ");

for (var i = 0; i < y.length; i++) {
    if (Satan.charAt(0) == 's' || y[i].charAt(0) == 'l') {
        console.log(y[i].split("").reverse().join(""));
        
    } else {
        y[i];
    }

}*/


/*
function specialReverse(str, letter) {
    
    var a= str.split(" ");
    console.log(a);
    
    if(a[0].charAt(0)=='S'){
        a[0]= a[0].split("").reverse().join("");
        
    }
    
    console.log(a.join(" "));
}
specialReverse('Some things are left unsaid')*/
