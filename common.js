var obj = {
    val: 'a',
    left: {
        val: 'b',
        left: {
            val: 'd'
        },
        right: {
            val: 'e'
        }
    },
    right: {
        val: 'c',
        right: {
            val: 'f'
        }
    }

}

// 二叉树遍历
function preorder(root) {
    if (!root) {
        return
    }
    console.log(`当前遍历的节点值是：${root.val}`)
    preorder(root.left)
    preorder(root.right)
}

// preorder(obj)
/**
 * 
 * @param {Array} nums 
 * @param {number} target 
 * @retrun {Array}
 */
const twoSum = function (nums, target) {
    // 存放数据的map
    const diffs = {}
    // 缓存数组长度
    const len = nums.length
    // 遍历数组
    for(let i = 0; i < len; i++) {
        // 判断当前值对应的target 差值是否存在
        if (diffs[target - nums[i]] !== undefined) {
            return [diffs[target - nums[i]], i]
        }
        // 如没有对应差值 则保存当前值
        diffs[nums[i]] = i
    }
}

// console.log(twoSum([2,3,4,5], 6))
/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * @param {Array} nums1 数组1
 * @param {number} m 长度
 * @param {Array} nums2 数组2
 * @param {number} n 长度
 */
const merge = function(nums1, m, nums2, n) {
    // 初始化指针指向
    let i = m - 1, j = n - 1, k = m + n -1
    while (i >= 0 && j >=0) {
        // 取较大的值，从末尾往后填
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums1[j]
            j--      
        }
        k--
    }
    // nums2留下的情况, 特殊处理
    while (j >= 0) {
        nums1[k] = nums2[j]
        j --
        k --
    }
}
var nums1 = [1,2,3,5,7,2]
var nums2 = [4,5,7,8,9]
merge(nums1, 6, nums2, 5)
console.log(nums1)