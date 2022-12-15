import {getJSON} from './utilities.js';
import mealView from './view.js'

//Meal Model
export default class Meal {
    constructor() {
        this.baseUrl =
        'https://www.themealdb.com/api/json/v1/1/';
        this.View = new mealView();
    }

    async getRandomMeal (container, favContainerIGUAL, popupINNER, popupCONTAINER) {
        const randomMealData = await getJSON(
            this.baseUrl +
                `random.php` 
        );
        const randomMeal = randomMealData.meals[0]
        console.log(randomMeal);
        this.View.addMeal(randomMeal, container, favContainerIGUAL, popupINNER, popupCONTAINER);
    }
}

   
