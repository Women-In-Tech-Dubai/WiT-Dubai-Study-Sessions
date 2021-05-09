/*
Unlucky floors

You check in at a hotel - one of the tallest buildings, burj khalifa :-) .
When taking the elevator, you realize that particular hotel has a superstition: There are no floors whose number has a '4' or '13' as part of it.

That means that hotel has no 4th floor, nor a 13th, nor a 134th, nor a 113th - but they do have the 103rd.
Therefore, first floors are numbered as 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, and so on...

The hotel wants to build a second tower but they don't want to go through the hassle of numbering floors by hand.
They want to have an algorithm that given a "real" floor number, returns the "lucky" version and removes any floors that contain '4' or '13' as part of their numbers.

Example


Given that the real floor number 12, its "lucky" version will be 15:

Real:  1 2 3 4 5 6 7 8 9 10 11 12
Lucky: 1 2 3 5 6 7 8 9 10 11 12 15


*/

function isUnlucky(n) {
    const parsedNumber = `${n}`;
    return parsedNumber.indexOf('4') > -1 || parsedNumber.indexOf('13') > -1;
}

function processData(input) {
    let luckyFloors = [];

    let i = 1;
    while (luckyFloors.length != input) {
        if(!isUnlucky(i)) {
            luckyFloors.push(i)
        }
        i++;
    }

    console.log(luckyFloors);
    return luckyFloors[input-1];
} 

console.log(processData(444));