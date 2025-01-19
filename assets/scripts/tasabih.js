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
    let tasbih = '';
    for (let i = 0; i < azkarData['تسابيح'].length; i++) {
      tasbih += `
      <li>
      <p>${azkarData['تسابيح'][i].content}<span>${azkarData['تسابيح'][i].count}Time</span></p> 
      <span class="description">${azkarData['تسابيح'][i].description}</span>
      </li>
      `;
    }
    document.getElementById('Rosaries').innerHTML = tasbih;
  });
