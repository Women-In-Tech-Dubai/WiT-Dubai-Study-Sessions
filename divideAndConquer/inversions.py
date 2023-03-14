""" /**Inversions. Suppose that a music site wants to compare your song preferences to those of a friend.
 * One approach is to have you and your friend each rank a set of n songs and count the number of pairs of songs (i, j)
 * for which you prefer i to j but your friend prefers j to i. When the count is low, the preferences are similar.
More generally, given an array of integers, a pair of elements a[i] and a[j] are inverted if i < j and a[i] > a[j].
 For example, the array a[] has 1 inversion and the array b[] has 4 inversions.

 a [0,1,2,3,5,4,6]           b[0,4,1,2,5,3,6]
 1 inversion : 5-4          4 inversions: 4-1,4-2,4-3,5-3

 Corner cases. You may assume that the arguments to generate() satsify n≥0
 and 0≤k≤ 1/2n(n−1)
; this guarantees the existence of a permutation of length n with exactly k inversions

**/

/* n = 10, k = 0

0 1 2 3 4 5 6 7 8 9

n = 10 k =1



n = 10  k = 20 , 11

9 8 0 1 2 3 7 4 5 6

9 8 0 1 2 3 7 4 5 6


create an array myArray[]
loop (let i = 1, i < n, i++)
check k >= n - i
   if it is : myArray[i-1] = n - i
   # if it's not: myArray[n- i - 1] = n - i
   if it's not: myArray[n-i-k] = n - i
   k = k - n + i

   k: 3, i: 3


 Hint :
 Use a greedy approach. If k≥n−1
, put element n−1
 first in the permutation, so that it is inverted with n−1
 elements; otherwise put it last in the permutation, so that it is inverted with 0 elements.
 How can you continue this approach to determine where element n−2
 should go? */

 // Return a permutation of length n with exactly k inversions.

 O(n) complexity

 """


def generate(n, k):
    myArray = list(range(0, n))

    for i in range(1, n):
        #print(f'k:', k)
        if k >= n - 1:
            myArray[i-1] = n - 1
        else:
            #print(f'index', i)
            myArray[n-i-k] = n - i
        k = k - n + i
        print(myArray)
    return myArray


generate(10, 20)
