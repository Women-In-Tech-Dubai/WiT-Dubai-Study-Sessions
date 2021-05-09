/*

An encoder partitions media files into N subfiles, processes each subfile, compresses it, then merges it back.
This process is repeated until the N sub files are merged into a single output file. Write an algorithm to output the minimum possible time to merge the given N subfiles into a single file.

An encoder can merge only two files at a time.
The time required to merge the two files is equal to the sum of their sizes. The size of this merged file is also equal to the sum of their sizes.

Input

The input to the function/method consists of one argument - fileSizes, a list of integers representing the size of the compressed subfiles.

Output

Return an integer representing the minimum time required to merge all the subfiles.

Constraints
1 <= number of subfiles <= 10^6
1 <= file Sizes[i] <= 10^6
O <= i < number of subfiles

Example

Input:
fileSizes = [4, 8, 6, 12]

Output:
58

Explanation:
The optimal way to merge the subfiles is as follows:

Step 1: Merge the files of size 4 and 6 (time required is 10), Size of subfiles after merging: [8, 10, 12].
Step 2: Merge the files of size 8 and 10 (time required is 18). Size of subfiles after merging: [18, 12].
Step 3: Merge the files of size 18 and 12 (time required is 30). Total time required to merge the file is 10 + 18 + 30 = 58.
*/

function mergeFiles(fileSizes) {
    fileSizes.sort(function(a, b) {
        return a - b;
      });

    let totalTime = 0

    while(fileSizes.length > 1){
        var sumFileSize = fileSizes[0] + fileSizes[1];
        totalTime += sumFileSize
        fileSizes.splice(0,2);
        fileSizes.push(sumFileSize)
        fileSizes.sort(function(a, b) {
            return a - b;
          });
    }
    
    return totalTime;

}
console.log(mergeFiles([4, 8, 6, 12]));


