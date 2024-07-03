const Task1 = (nums, target) => {
  // declared an object for storing alredy checked elements in a key value pair
  const map = {};
  //traverse the whole array
  for (let i = 0; i < nums.length; i++) {
    //temp is the value we have to search in the array to find if we have two numbers that add up to target
    const temp = target - nums[i];
    // if we find temp in map object means its in the array and means we found our solution .return the  indices
    if (temp in map) return [i, map[temp]];
    //if temp not in map then insert it in map as a key value pair
    map[nums[i]] = i;
  }
};
// Time Complexity O(n) n=nums.length
//Space Complexity O(n) worst case we have to store the all the elements of the  array in map object

console.log(Task1([3, 3], 6));
