<<<<<<< HEAD
# Data Structure: Day 3

## _350. Intersection of Two Arrays II_ (_EASY_)

Given two integer arrays _nums1_ and _nums2_, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in _any order_.

## Step to take

-   **_Understand the topic, input, output_**
-   **_Learn new algorithms_**
-   **_Solve_**

## **Understand the topic, input, output**

| Input                                    | Output |
| ---------------------------------------- | ------ |
| _nums1_ = [1,2,2,1], _nums2_ = [2,2]     | [2,2]  |
| _nums1_ = [4,9,5], _nums2_ = [9,4,9,8,4] | [4,9]  |
| _nums1_ = [4,9,5], _nums2_ = [3,2,3,1]   | []     |

### **_Constraints:_**

-   **1 <= nums1.length, nums2.length <= 1000**
-   **0 <= nums1[i], nums2[i] <= 1000**

## **Learn new algorithms**

[Hash Tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/) a data structure used to store and retrieve entries (key-value pairs) with very fast access time complexity, usually O(1). _Hash table_ is a form of array associated with a hash function.

## **Solve**

-   Step 1: Create a array to save key-value(number-occurrence) of nums1
-   Step 2: If have,increase the number of occurrences by 1.
-   Step 3: Check if nums2 exists, if have push in _result_
-   Step 4: Retrun _result_
=======
# Data Structure: Day 3

## _350. Intersection of Two Arrays II_ (_EASY_)

Given two integer arrays _nums1_ and _nums2_, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in _any order_.

## Step to take

-   **_Understand the topic, input, output_**
-   **_Learn new algorithms_**
-   **_Solve_**

## **Understand the topic, input, output**

| Input                                    | Output |
| ---------------------------------------- | ------ |
| _nums1_ = [1,2,2,1], _nums2_ = [2,2]     | [2,2]  |
| _nums1_ = [4,9,5], _nums2_ = [9,4,9,8,4] | [4,9]  |
| _nums1_ = [4,9,5], _nums2_ = [3,2,3,1]   | []     |

### **_Constraints:_**

-   **1 <= nums1.length, nums2.length <= 1000**
-   **0 <= nums1[i], nums2[i] <= 1000**

## **Learn new algorithms**

[Hash Tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/) a data structure used to store and retrieve entries (key-value pairs) with very fast access time complexity, usually O(1). _Hash table_ is a form of array associated with a hash function.

## **Solve**

-   Step 1: Create a array to save key-value(number-occurrence) of nums1
-   Step 2: If have,increase the number of occurrences by 1.
-   Step 3: Check if nums2 exists, if have push in _result_
-   Step 4: Retrun _result_
>>>>>>> 3a9e4881b63d8e5669671c76c3c5eef6f8cf2980
