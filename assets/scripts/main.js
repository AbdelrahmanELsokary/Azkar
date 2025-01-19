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
    let morningRemembrance = '';
    for (let i = 0; i < azkarData['أذكار الصباح'].length; i++) {
      morningRemembrance += `
      <li>
      <p>${azkarData['أذكار الصباح'][i].content}<span>${azkarData['أذكار الصباح'][i].count}Time</span></p>
      <span class="description">${azkarData['أذكار الصباح'][i].description}</span> 
      </li>
      `;
    }
    document.getElementById('morning').innerHTML = morningRemembrance;
    let eveningRemembrances = '';
    for (let i = 0; i < azkarData['أذكار المساء'].length; i++) {
      eveningRemembrances += `
      <li>
      <p>${azkarData['أذكار المساء'][i].content}<span>${azkarData['أذكار المساء'][i].count}Time</span></p>
      <span class="description">${azkarData['أذكار المساء'][i].description}</span>
      </li>
      `;
    }
    document.getElementById('evening').innerHTML = eveningRemembrances;
    // let obligatoryPrayers = '';
    // for (let i = 0; i < azkarData['أذكار بعد السلام من الصلاة المفروضة'].length; i++) {
    //   obligatoryPrayers += `
    //   <li>
    //   <p>${azkarData['أذكار بعد السلام من الصلاة المفروضة'][i].content}<span>${azkarData['أذكار بعد السلام من الصلاة المفروضة'][i].count}Time</span></p>
    //   <span class="description">${azkarData['أذكار بعد السلام من الصلاة المفروضة'][i].description}</span>
    //   </li>
    //   `;
    // }
    // document.getElementById('obligatory_prayers').innerHTML = obligatoryPrayers;
    // let sleepRemembrance = '';
    // for (let i = 0; i < azkarData['أذكار النوم'].length; i++) {
    //   sleepRemembrance += `
    //   <li>
    //   <p>${azkarData['أذكار النوم'][i].content}<span>${azkarData['أذكار النوم'][i].count}Time</span></p> 
    //   </li>
    //   `;
    // }
    // document.getElementById('sleep').innerHTML = sleepRemembrance;
    // let WakeUpRemembrancembrance = '';
    // for (let i = 0; i < azkarData['أذكار الاستيقاظ'].length; i++) {
    //   WakeUpRemembrancembrance += `
    //   <li>
    //   <p>${azkarData['أذكار الاستيقاظ'][i].content}<span>${azkarData['أذكار الاستيقاظ'][i].count}Time</span></p> 
    //   </li>
    //   `;
    // }
    // document.getElementById('Wake-up').innerHTML = WakeUpRemembrancembrance;
    // let quranicSupplications = '';
    // for (let i = 0; i < azkarData['أدعية قرآنية'].length; i++) {
    //   quranicSupplications += `
    //   <li>
    //   <p>${azkarData['أدعية قرآنية'][i].content}<span>${azkarData['أدعية قرآنية'][i].count}Time</span></p>
    //   <span class="description">${azkarData['أدعية قرآنية'][i].reference}</span> 
    //   </li>
    //   `;
    // }
    // document.getElementById('quranic').innerHTML = quranicSupplications;
    // let PrayersOfProphets = '';
    // for (let i = 0; i < azkarData['أدعية الأنبياء'].length; i++) {
    //   PrayersOfProphets += `
    //   <li>
    //   <p>${azkarData['أدعية الأنبياء'][i].content}<span>${azkarData['أدعية الأنبياء'][i].count}Time</span>
    //   </p> 
    //   <span class="description">${azkarData['أدعية الأنبياء'][i].description}</span>
    //   </li>
    //   `;
    // }
    // document.getElementById('prophets').innerHTML = PrayersOfProphets;
  });
