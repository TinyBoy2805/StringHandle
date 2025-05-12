

function addDot(s) {
  let ans = '';
  s = s.trim(); 
  for (let i = 0; i < s.length; i++) 
    {
    ans += s[i]; 
    if ((i + 1) % 3 === 0 && i < s.length - 1) 
    { 
      ans += '.';
    }
    }
  return ans;
}

module.exports = { addDot }

