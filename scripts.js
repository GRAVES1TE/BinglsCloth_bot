document.addEventListener("DOMContentLoaded", function () {
  const bonusForm = document.getElementById("bonusForm");
  const bonusContent = document.getElementById("bonusContent");
  const bonusPointsEl = document.getElementById("bonusPoints");
  const getBonusBtn = document.getElementById("getBonus");

  // Обновление отображения баллов
  function updateBonusDisplay() {
    let points = localStorage.getItem("bonusPoints") || 0;
    bonusPointsEl.textContent = points;
  }

  // Проверка регистрации пользователя
  if (localStorage.getItem("registeredEmail")) {
    bonusForm.style.display = "none";
    bonusContent.style.display = "block";
    updateBonusDisplay();
  }

  // Обработка формы регистрации
  bonusForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("bonusPoints", 100); // Начисление бонусных баллов
    bonusForm.style.display = "none";
    bonusContent.style.display = "block";
    updateBonusDisplay();
    alert("Вы зарегистрированы! Начислено 100 баллов.");
  });

  // Обработка получения бонусов
  getBonusBtn.addEventListener("click", function () {
    let currentPoints = parseInt(localStorage.getItem("bonusPoints"), 10) || 0;
    let bonusEarned = Math.floor(Math.random() * 50) + 10; // Случайный бонус
    currentPoints += bonusEarned;
    localStorage.setItem("bonusPoints", currentPoints);
    updateBonusDisplay();
    alert(`Вы получили ${bonusEarned} баллов!`);
  });
});
