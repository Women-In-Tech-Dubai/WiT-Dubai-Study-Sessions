# https://www.hackerrank.com/challenges/three-month-preparation-kit-separate-the-numbers/problem

""" A numeric string, , is beautiful if it can be split into a sequence of two or more positive integers
a[1],a[2],a[n] satisfying the following conditions:

a[i] - a[i-1] = 1 for any 1<i<=n (i.e., each element in the sequence is  more than the previous element).
No  contains a leading zero. For example, we can split s=10203 into the sequence , but it is not beautiful because
02  and 03  have leading zeroes.
The contents of the sequence cannot be rearranged. For example, we can split s=312  into the sequence {3,1,2},
but it is not beautiful because it breaks our first constraint (i.e., ).
The diagram below depicts some beautiful strings:

"1234"
"91011"
"99100"

Perform  queries where each query consists of some integer string .
For each query, print whether or not the string is beautiful on a new line.
If it is beautiful, print YES x, where  is the first number of the increasing sequence.
If there are multiple such values of x, choose the smallest. Otherwise, print NO.

Function Description

Complete the separateNumbers function in the editor below.

separateNumbers has the following parameter:

s: an integer value represented as a string
Prints
- string: Print a string as described above. Return nothing.

Input Format

The first line contains an integer , the number of strings to evaluate.
Each of the next  lines contains an integer string  to query. """

# stringArray = 9991000
# 99 100 200

expectedSequenceSize = 1
for i in len(stringArray):
    currentValue = stringArray[i]  # 1
    nextValue = currentValue + 1  # 2
    while expectedSequenceSize <= len(stringArray)/2
    # figure out how to slice the substrings into correct sequence sizes
         substringCurrent = stringArray[0:expectedSequenceSize];
         substringFuture = stringArray[len(
             currentValue)+1:(len(currentValue)+1 + expectedSequenceSize + len(nextValue))];
         if (substringCurrent - substringFuture == -1):
         # this is a sequence, so return the value with  YES
         else:
            expectedSequenceSize += 1
print("NO")

Python3 - I found this one REALLY tricky.

Logic:

1) Find starting digit, x, of length n=1
2) Start a "New s" string with this ^ at the start
3) Calculate x += 1 and then add this to the string
4) Repeat step 3) until the new string is the same length as the original one
5) If "New s" and "s" are equal, then we have a winner! Else, set n += 1 and repeat steps 1-5 until n > len(s)/2
6) If there is still no "winner" it cannot be done
# 9991000

def separateNumbers(s):
    is_beautiful=False
    # i = 2
    # range = 4
    for i in range(1, int(len(s)/2 + 1)):
        x=int(s[0:i]) // 9, x is 99
        new_s=str(x) // "99", x is now..
                                                    i=1 "9101112"
                                                    i=2 "99100"

        # 2 is less than 7
        while len(new_s) < len(s):
            x += 1
            # first loop
            new_s += str(x)
        if new_s == s:
            print("YES {}".format(s[0:i]))
            is_beautiful=True
            break

    if not is_beautiful:
        print("NO")
