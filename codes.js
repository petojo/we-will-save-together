const light = document.getElementById('light');
const toggleButton = document.getElementById('toggle-light');
const message = document.getElementById('message');

let isLightOn = true;

toggleButton.addEventListener('click', () => {
  if (isLightOn) {
    light.src = 'images/download.jpg';
    light.style.transform = 'scale(0.9)';
    toggleButton.textContent = 'تشغيل المصباح';
    message.textContent = '👏 أحسنت! لقد وفرت الكهرباء!';
    message.style.color = '#4caf50';
  } else {

    light.style.transform = 'scale(1.1)';
    toggleButton.textContent = 'إطفاء المصباح';
    message.textContent = '💡 تذكر: توفير الكهرباء يحمي البيئة ويوفر المال!';
    message.style.color = '#ff9800';
  }
  isLightOn = !isLightOn;
});
