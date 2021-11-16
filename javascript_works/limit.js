// var num3;
// low=8   upper=27
// 1**3=3
// 2**3=8      print 2
// 3**3=27     print 3

var num = 2, lower = 8, upper = 27;

for (let i = 1; i <= upper; i++) {
    let res = i ** num;

    if (res > upper) {
        break;
    }

    if ((res >= lower) & (res <= upper)) {
        console.log(i);
    }
}