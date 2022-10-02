// Write a function to find the longest common prefix string
// amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  let str = strs[0];
  for (let word of strs) {
    while (word.indexOf(str) !== 0) {
      str = str.substring(0, str.length - 1);
    }
  }
  console.log(str);
  return str;
};

longestCommonPrefix(["concat", "concho", "conga"]);
