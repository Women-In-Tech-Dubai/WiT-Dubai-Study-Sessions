
# https://leetcode.com/problems/daily-temperatures/

# Given an array of integers that represent the daily temperatures, 
# return an array answer such that answer[i] is the number of days you have to wait after the ith 
# day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.


# Example 1:

# Input: temperatures = [73,74,75,71,69,72,76,73]
# Output: [1,1,4,2,1,1,0,0]

# Example 2:

# Input: temperatures = [30,40,50,60]
# Output: [1,1,1,0]

# Example 3:

# Input: temperatures = [30,60,90]
# Output: [1,1,0]
 

# Constraints:

# 1 <= temperatures.length <= 10^5
# 30 <= temperatures[i] <= 100

# Pseudocode:

# output_diff = []
# for i in range(len(temperatures)):
#     current_temp = temperatures[i]
#     next_temp = i;
#     while(current_temp <= temperatures[next_temp] && next_temp < len(temperatures))
#         next_temp++;

#         for k in range(len(temperatures - i)):
#             if next_temp > current_temp
    
#     stop the loop and compare index of temperature[i] and next_temp => diff = next_temp - i
#     append the difference to output_diff.

# LEETCODE Bruteforce Solution

#     class Solution(object):
#     def dailyTemperatures(self, temperatures):
#         n = len(temperatures)
#         answer = [0] * n #new list of 0s in the size of the temp list
#         for day in range(n):
#             for future_day in range(day + 1, n):
#                 if temperatures[future_day] > temperatures[day]:
#                     answer[day] = future_day - day
#                     break      
                
#         return answer

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 class Solution:
 def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
     output_diff = []
     for i in range(len(temperatures)):
         current_temp = temperatures[i]
         next_temp = i
         foundWarmerTemp = False
         while next_temp < len(temperatures):
             next_temp += 1
             
             # Found a warmer temperature
             if next_temp < len(temperatures) and temperatures[next_temp] > current_temp:
                 foundWarmerTemp = True
                 break
             
         if foundWarmerTemp:
             output_diff.append(next_temp - i)
         else:
             output_diff.append(0)

     return output_diff