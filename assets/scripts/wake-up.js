let them = document.getElementById('them');
them.onclick = () => {
  if (document.body.classList.contains('dark_mode')) {
    document.body.classList.remove('dark_mode');
    them.src = 'assets/icons/dark.webp';
  } else {
    document.body.classList.add('dark_mode');
    them.src = 'assets/icons/light.webp';
  }
};

let dropDown = document.getElementById('drop_down');
let toggelMenu = document.getElementById('menu');
dropDown.onclick = () => {
  toggelMenu.classList.toggle('drop_down');
};

fetch('https://www.myjsons.com/v/b7d03829')
  .then((response) => response.json())
  .then((azkarData) => {
    let WakeUpRemembrancembrance = '';
    for (let i = 0; i < azkarData['أذكار الاستيقاظ'].length; i++) {
      WakeUpRemembrancembrance += `
      <li>
      <p>${azkarData['أذكار الاستيقاظ'][i].content}<span>${azkarData['أذكار الاستيقاظ'][i].count}Time</span></p> 
      </li>
      `;
    }
    document.getElementById('Wake-up').innerHTML = WakeUpRemembrancembrance;
  });
