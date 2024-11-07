document.addEventListener('DOMContentLoaded', function () {
  
    const charactersContainer = document.querySelector('.character');    
   

    
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(characters => {

        const first8 = characters.slice(0, 8) ;

        first8.forEach(character => {
          const characterCard = document.createElement('div');
          characterCard.classList.add('character__card');
          characterCard.innerHTML = `
            <img class="character__img" src="${character.image}" alt="${character.name}">
            <div class="character__text">
             <h3 class="character__name">${character.name}</h3>
             <p class="character__house">${character.alternate_names[0]} <br> ${character.alternate_names[1]} <br>
             ${character.house}</p>
             <a class="character__info" href="">Більше інформації
                       <i class="fa-solid fa-arrow-right-long fa-lg character__info-arrow" style="color: #ffffff;"></i>
                       <div class="character__info-circle"></div> 
                    </a>
              </div>
          `;
          charactersContainer.appendChild(characterCard);
        });
      })
      .catch(error => console.error('Error fetching characters:', error));
  });

  
  