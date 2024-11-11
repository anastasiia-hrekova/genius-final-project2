document.addEventListener('DOMContentLoaded', function () {

  const charactersContainer = document.querySelector('.character');
  const pageTitle = document.querySelectorAll('title');

  const isStudentsPage = window.location.pathname.includes("students"); //Для сортування по сторінкам за їх назвою
  const isStaffPage = window.location.pathname.includes("staff");
  const isHousesPage = window.location.pathname.includes("houses");

  const buttons = document.querySelectorAll('button');


  const character = character => { // класс для створення карточки персонажа
    const characterCard = document.createElement('div');
    characterCard.classList.add('character__inner');
    characterCard.innerHTML = `
          <div class="character__front">
          <img class="character__img" src="${character.image}" alt="${character.name}">
          <div class="character__text">
           <h3 class="character__name">${character.name}</h3>
           <p class="character__house">${character.alternate_names[0]} <br> ${character.alternate_names[1]} <br>
           ${character.house}</p>
           <button class="character__info" type="button">Більше інформації
                     <i class="fa-solid fa-arrow-right-long fa-lg character__info-arrow" style="color: #ffffff;"></i>
                     <div class="character__info-circle"></div> 
                  </button>
                  </div>
            </div>      
              <div class="character__back">
                <p class="character__key">Name: <span class="character__key-value">${character.name}</span></p>
                <p class="character__key">Alternate names: <span class="character__key-value">${character.alternate_names}</span></p>
                <p class="character__key">Species: <span class="character__key-value">${character.species}</span></p>
                <p class="character__key">Gend: <span class="character__key-value">${character.gender}</span></p>
                <p class="character__key">House: <span class="character__key-value">${character.house}</span></p>
                <p class="character__key">Date of birth: <span class="character__key-value">${character.dateOfBirth}</span></p>
                <p class="character__key">Year of birth: <span class="character__key-value">${character.yearOfBirth}</span></p>
                <p class="character__key">Wizard: <span class="character__key-value">${character.wizard}</span></p>
                <p class="character__key">Ancestry: <span class="character__key-value">${character.ancestry}</span></p>
                <p class="character__key">Eye colour: <span class="character__key-value">${character.eyeColour}</span></p>
                <p class="character__key">Hair colour: <span class="character__key-value">${character.hairColour}</span></p>
                <p class="character__key">Wand: <span class="character__key-value">Wood: ${character.wand.wood}, Core: ${character.wand.core}, Length: ${character.wand.length}</span></p>
                <p class="character__key">Patronus: <span class="character__key-value">${character.patronus}</span></p>
                <p class="character__key">Hogwarts students: <span class="character__key-value">${character.hogwartsStudent}</span></p>
                <p class="character__key">Hogwarts staff: <span class="character__key-value">${character.hogwartsStaff}</span></p>
                <p class="character__key">Actor: <span class="character__key-value">${character.actor}</span></p>
                <p class="character__key">Alive: <span class="character__key-value">${character.alive}</span></p>
               </div>
            
        `;

    charactersContainer.appendChild(characterCard);
  };


  let apiUrl = ""; // API за назвою сторінки 
  if (isStudentsPage) {
    apiUrl = "https://hp-api.onrender.com/api/characters/students";
  } else if (isStaffPage) {
    apiUrl = "https://hp-api.onrender.com/api/characters/staff";
  } else if (isHousesPage) {
    apiUrl = "https://hp-api.onrender.com/api/characters";
  };

  fetch(apiUrl) // Підключення API
    .then(response => response.json())
    .then(characters => {

      const first8 = characters.slice(0, 12); // для обмеженного виводи карток, бо більшість незаповнених

      first8.forEach(character);

      buttons.forEach(button => // Зчитування айді кнопки для сортування по будинкам
        button.addEventListener('click', () => {
          const house = button.id;
          fetchCharacters(house);
        })
      );

      function fetchCharacters(house) {  // Функція сортування по будинкам, та обмеження карток
        const filteredCharacters = characters.slice(0, 25).filter(character => character.house === house);
        displayCharacters(filteredCharacters);
      }

      function displayCharacters(characters) {  // Функція очищення сторінки та виводу відсортованих карток
        charactersContainer.innerHTML = '';
        characters.forEach(character);
      }
    })

    .catch(error => console.error('Error fetching characters:', error)); // Ловимо помилку отримання данних


});







