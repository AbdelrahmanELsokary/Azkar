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
    let obligatoryPrayers = '';
    for (let i = 0; i < azkarData['أذكار بعد السلام من الصلاة المفروضة'].length; i++) {
      obligatoryPrayers += `
      <li>
      <p>${azkarData['أذكار بعد السلام من الصلاة المفروضة'][i].content}<span>${azkarData['أذكار بعد السلام من الصلاة المفروضة'][i].count}Time</span></p>
      <span class="description">${azkarData['أذكار بعد السلام من الصلاة المفروضة'][i].description}</span>
      </li>
      `;
    }
    document.getElementById('obligatory_prayers').innerHTML = obligatoryPrayers;
  });
