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
    let quranicSupplications = '';
    for (let i = 0; i < azkarData['أدعية قرآنية'].length; i++) {
      quranicSupplications += `
      <li>
      <p>${azkarData['أدعية قرآنية'][i].content}<span>${azkarData['أدعية قرآنية'][i].count}Time</span></p>
      <span class="description">${azkarData['أدعية قرآنية'][i].reference}</span> 
      </li>
      `;
    }
    document.getElementById('quranic').innerHTML = quranicSupplications;
  });
