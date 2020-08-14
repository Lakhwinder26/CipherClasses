function toSeconds(minutes) {

    if (minutes == Number(minutes)) {
        console.log(minutes * 60 + 's')
    } else {
        console.log('Coversion can\'t be done')
    }
}

toSeconds(5);
toSeconds(3);
toSeconds(2);
toSeconds('a');


