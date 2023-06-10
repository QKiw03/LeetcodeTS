# Data Structure: Day 1

## _53. Maximum Subarray_ (_Medium_)

Given an integer array nums, find the subarray with the largest sum, and return its sum.

## Step to take

-   **_Understand the topic, input, output_**
-   **_Learn new algorithms_**
-   **_Solve_**

## **Understand the topic, input, output**

| Input                   | Output |
| ----------------------- | ------ |
| [-2,1,-3,4,-1,2,1,-5,4] | 6      |
| [1]                     | 1      |
| [5,4,-1,7,8]            | 23     |

### **_Constraints:_**

-   **1 <= nums.length <= 105**
-   **-104 <= nums[i] <= 104**

## **Learn new algorithms**

The algorithm we use in this tutorial is the [Kadane algorithm](https://hackernoon.com/kadanes-algorithm-explained-50316f4fd8a6) to find the greatest sum of consecutive subsequences in an array of integers.

## **Solve**

-   Step 1: Create two variables that store the current sum and the furthest sum found
-   Step 2: Use a loop to sum the next elements
-   Step 3: Using the Math library to find max_here
-   Step 4: If max_here > max_farthest, mean the array is on the right solution => max_farthest = max_here
