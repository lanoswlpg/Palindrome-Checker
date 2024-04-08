const exp = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const answer = document.getElementById("answer");

function removeSymbols(expression) {
  const regex = /[\W_]+/g;
  return expression.toString().replace(regex, "");
}

function checkExp() {
  let isPalindrome = true;

  if (exp.value.length == 0) {
    alert("Pole nie może być puste.");
  }

  const cleanExp = removeSymbols(exp.value).toLowerCase();
  console.log(cleanExp);

  if (cleanExp.length == 1) {
    answer.textContent = `${cleanExp} jest palindromem.`;
  }

  for (let i = 0; i < cleanExp.length; i++) {
    if (cleanExp[i] != cleanExp[cleanExp.length - 1 - i]) {
      isPalindrome = false;
    }
  }

  if (isPalindrome == false) {
    answer.textContent = `${exp.value} nie jest palindromem.`;
  } else {
    answer.textContent = `${exp.value} jest palindromem.`;
  }
}

btn.addEventListener("click", checkExp);