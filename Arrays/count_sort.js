/* Use the counting sort to order a list of strings associated with integers. If two strings are associated with the same integer, they must be printed in their original order, i.e. your sorting algorithm should be stable. There is one other twist: strings in the first half of the array are to be replaced with the character - (dash, ascii 45 decimal).

Insertion Sort and the simple version of Quicksort are stable, but the faster in-place version of Quicksort is not since it scrambles around elements while sorting.

Design your counting sort to be stable.

HIIIIIII
Example

The first two strings are replaced with '-'. Since the maximum associated integer is , set up a helper array with at least two empty arrays as elements. The following shows the insertions into an array of three empty arrays.

i	string	converted	list
0				[[],[],[]]
1 	a 	-		[[-],[],[]]
2	b	-		[[-],[-],[]]
3	c			[[-,c],[-],[]]
4	d			[[-,c],[-,d],[]]
The result is then printed:  .

Function Description

Complete the countSort function in the editor below. It should construct and print the sorted strings.

countSort has the following parameter(s):

string arr[n][2]: each arr[i] is comprised of two strings, x and s
Returns
- Print the finished array with each element separated by a single space.  */

function countSort(arr) {
    // insert dashes in the first half
    // create our frequency array
    // loop through input and push into the frequency array
    // print out from frequency array

    for (let i = 0; i < arr.length / 2; i++) {
        arr[i][1] = '-'
    }

    let freqArray = [];
    for (let i = 0; i < 100; i++) {
        freqArray[i] = [];
    }

    for (let j = 0; j < arr.length; j++) {
        freqArray[arr[j][0]].push(arr[j][1]);
    }

    console.log(freqArray);
    console.log(freqArray.flat());
    console.log(freqArray.flat().join(' '));

}
