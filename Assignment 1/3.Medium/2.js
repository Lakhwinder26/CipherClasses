function testJackpot(arr) {
    var check = arr[0];
    var issame = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != check) {
            issame = false;
            break;
        }
    }
    console.log(issame);
}

testJackpot(['@', '@', '@', '@'])
testJackpot(['&', '&', '&&', '&'])
