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
    let sleepRemembrance = '';
    for (let i = 0; i < azkarData['أذكار النوم'].length; i++) {
      sleepRemembrance += `
      <li>
      <p>${azkarData['أذكار النوم'][i].content}<span>${azkarData['أذكار النوم'][i].count}Time</span></p> 
      </li>
      `;
    }
    document.getElementById('sleep').innerHTML = sleepRemembrance;
  });
