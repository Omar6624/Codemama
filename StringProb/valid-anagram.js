var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in obj) obj[s[i]] += 1;
    else obj[s[i]] = 1;

    if (t[i] in obj) obj[t[i]] -= 1;
    else obj[t[i]] = -1;
  }
  console.log(obj);
  if (Object.values(obj).some((value) => value !== 0)) return false;
  else return true;
};
console.log(isAnagram("rat", "cat"));
