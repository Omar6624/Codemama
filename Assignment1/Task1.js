const Task1 = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i];
    if (temp in map) return [i, map[temp]];
    map[nums[i]] = i;
  }
};
// Time Complexity O(n) n=nums.length
//Space Complexity O(n)

console.log(Task1([3, 3], 6));
