
const evenify = (element) => {
    if (element % 2 == 0) {
        console.log(element, ' is even numer');
    }
    else {
        console.log(element, 'is odd number');
    }
}



number = [3, 4, 6, 7, 8, 8, 9, 10];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    evenify(element);

}



friends_age = [10, 12, 20, 20, 25, 45, 44, 32, 13, 34];

for (let i = 0; i < friends_age.length; i++) {
    const element = friends_age[i];
    evenify(element);

}