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
      <p>${azkarData['أذكار بعد السلام من الصلاة المفروضة'][i].content}<button type="button" id="counter"><span id="count">${azkarData['أذكار بعد السلام من الصلاة المفروضة'][i].count}Time</span></button></p>
      <span class="description">${azkarData['أذكار بعد السلام من الصلاة المفروضة'][i].description}</span>
      </li>
      `;
    }
    document.getElementById('obligatory_prayers').innerHTML = obligatoryPrayers;
    // let counter = document.getElementById('counter');
    // let count = document.getElementById('count');
    // counter.onclick = () => {
    //   if (time > 0) {
    //     azkarData['أذكار بعد السلام من الصلاة المفروضة'][i].count--;
    //     count.textContent = time;
    //   }
    // };
  });
