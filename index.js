

function addDot(s) {
  let ans = '';
  s = s.trim();
  for (let i = 0; i < s.length; i++) {
    ans += s[i];
    if ((i + 1) % 3 === 0 && i < s.length - 1) {
      ans += '.';
    }
  }
  return ans;
}


function removeNumberCharacter(s) {
  let ans = '';
  s = s.trim();
  for (let i = 0; i < s.length; i++) {
    if (!/[0-9]/.test(s[i])) {
      ans += s[i];
    }
  }
  return ans;
}

function removeUpperCaseCharacter(s) {
  let ans = '';
  s = s.trim();
  for (let i = 0; i < s.length; i++) {
    if (!/[A-Z]/.test(s[i])) {
      ans += s[i];
    }
  }
  return ans;
}

function removeLowerCaseCharacter(s) {
  let ans = '';
  s = s.trim();
  for (let i = 0; i < s.length; i++) {
    if (!/[a-z]/.test(s[i])) {
      ans += s[i];
    }
  }
  return ans;
}



module.exports = { addDot, removeNumberCharacter, removeUpperCaseCharacter,  removeLowerCaseCharacter}

