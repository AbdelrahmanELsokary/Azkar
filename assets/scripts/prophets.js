fetch('https://www.myjsons.com/v/b7d03829')
  .then((response) => response.json())
  .then((azkarData) => {
    let PrayersOfProphets = '';
    for (let i = 0; i < azkarData['أدعية الأنبياء'].length; i++) {
      PrayersOfProphets += `
      <li>
      <p>${azkarData['أدعية الأنبياء'][i].content}<span>${azkarData['أدعية الأنبياء'][i].count}Time</span>
      </p> 
      <span class="description">${azkarData['أدعية الأنبياء'][i].description}</span>
      </li>
      `;
    }
    document.getElementById('prophets').innerHTML = PrayersOfProphets;
  });

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