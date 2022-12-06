const number = document.querySelectorAll('.rating__numbers--container>li');
const ratingComponent = document.querySelector('.component__rating');
const thankYouComponent = document.querySelector('.component__thankYou');
const spanNumber = document.querySelector('.selected__text__number');

function addHiddenClass(){
  for(let i = 0; i < number.length; i++){
    number[i].addEventListener('click', ()=> {
      ratingComponent.classList.add('hidden');
      thankYouComponent.classList.remove('hidden');
      spanNumber.textContent = number[i].textContent;
      console.log(number[i].textContent);
    });
  }
  
}

addHiddenClass();

