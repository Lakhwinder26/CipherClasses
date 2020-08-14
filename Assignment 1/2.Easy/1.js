//Using Simple Function . Case-Sensitive
function charCount(letter, str1) {

    var count = 0,
        i;

    for (i = 0; i < str1.length; i++) {
        if (str1.charAt(i) == letter) {
            count += 1;
        }
    }
    console.log('Count = ' + count);
}

charCount('c', 'Chamber of secrets')



//By converting String to Array . Made this Case-Insensitive
function charCount2(letter2, str1) {

    var arr = str1.split("");
    var c = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] == letter2.toUpperCase() || arr[j] == letter2.toLowerCase()) {
            c += 1;
        }
    }
    console.log('Count = ' + c);
}

charCount2('m','Mississipi map')