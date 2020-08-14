


//Without Regex . But I was not able to put the input in a line in console
function numInStr(arr) {

    for (var i = 0; i < arr.length; i++) {
        var b = arr[i].split("");
        for (var j = 0; j < b.length; j++) {
            if (b[j] == Number(b[j])) {
                b.join("");
                console.log(b[j])
            }
        }
    }
}
numInStr(["abc123", "hjk67"])


 // Using Regex
/*function numInStrRegex(arr) {

    for (var i = 0; i < arr.length; i++) {
        
        var x = arr[i].match(/\d+/g).map(Number);
        x = x.join("")
        console.log(x);
        
    }
}

numInStrRegex(["1abc1019", "bv28", "1a","tes1t1"])*/