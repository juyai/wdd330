import  MealModel from './model.js';
import MealView from './view.js';

export default class MealController {
    constructor(){
        this.parentElement = document.querySelector('#random');
        this.favs = document.querySelector('#fav');
        
        this.popupINNER = document.querySelector('.pop-up-inner');
        this.popupCONTAINER = document.querySelector('.pop-up-container');
        this.CLOSEpopup = document.querySelector('.pop-up > i');

        this.searchINPUT = document.querySelector('.search-input');
        this.searchICON = document.querySelector('.search-icon');
        this.remplazo = document.querySelector('.meals-container > h2');

        this.mealModel = new MealModel();
        this.mealView = new MealView();
    }

    init(){
        this.mealModel.getRandomMeal(this.parentElement, this.favs,this.popupINNER, this.popupCONTAINER);
        this.mealView.fetchFavMeals(this.favs, this.popupINNER, this.popupCONTAINER);
        console.log(this.favs)
        this.CLOSEpopup.addEventListener('click', () => {
            this.popupCONTAINER.style.display = 'none';
        })

        this.searchICON.addEventListener('click', async () => {
            this.parentElement.innerHTML = '';
            const searchVal = this.searchINPUT.value;
            const meals = await this.mealView.getMealsBySearch(searchVal)
            if (meals) {
                meals.forEach(meal => {
                    this.mealView.addMeal(meal, this.parentElement, this.favs, this.popupINNER, this.popupCONTAINER)
                })
                this.remplazo.innerText = 'Search Results...'
            } else {
                this.remplazo.innerText = 'No Meals Found'
                this.parentElement.innerHTML = '';
            }
        })
    }
}




