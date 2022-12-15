export default class MealView {
    async getMealById (id) {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const respData = await resp.json()
        const meal = respData.meals[0];
            
        return meal;
    
    }

    async getMealsBySearch (term) {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
        const respData = await resp.json()
        const meals = respData.meals;
    
        return meals;
    }

    addMeal (meal, container, favContainerIGUAL, popupINNER, popupCONTAINER) {
        const meal_card = document.createElement('div');
        meal_card.classList.add('meal-card');
        meal_card.innerHTML = `
                <div class="meal-card-img-container">
                    <img src="${meal.strMealThumb}">
                </div>
                <div class="meal-name">
                    <p>${meal.strMeal}</p>
                    <i class="fa-regular fa-heart"></i>
                </div>
        `;
        const btn = meal_card.querySelector('.fa-heart');
        btn.addEventListener('click', () => {
            if (btn.classList.contains('fa-regular')) {
                btn.setAttribute('class', 'fa-solid fa-heart')
                this.addMealLS(meal.idMeal)
            } else {
                btn.setAttribute('class', 'fa-regular fa-heart')
                this.removeMealLS(meal.idMeal)
            }
            this.fetchFavMeals(favContainerIGUAL, popupINNER, popupCONTAINER);
        })

        container.appendChild(meal_card);
    }

    async fetchFavMeals (favContainerIGUAL, popupINNER, popupCONTAINER) {
        favContainerIGUAL.innerHTML = '';
    
        const mealsIds = this.getMealLS();
        const meals = [];
        for(let i = 0; i < mealsIds.length; i++) {
            const mealID = mealsIds[i];
            const meal = await this.getMealById(mealID);
            this.addMealToFav(meal, favContainerIGUAL, popupINNER, popupCONTAINER);
            meals.push(meal);
        }
    }

    addMealToFav (meal, favContainerIGUAL, popupINNER, popupCONTAINER) {
        const fav_meals = document.createElement('div');
        fav_meals.innerHTML = `
                <div class="single">
                    <div class="top">
                        <div class="img-container">
                            <img src="${meal.strMealThumb}">
                        </div>
                        <div class="text">
                            <p>${meal.strMeal}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-x"></i>
                </div>
        `
        const x = fav_meals.querySelector('.fa-x');
        x.addEventListener('click', () => {
            this.removeMealLS(meal.idMeal)
    
            const heart_btns = document.querySelectorAll('.fa-heart');
            heart_btns.forEach(heart_btn => {
                heart_btn.setAttribute('class', 'fa-regular fa-heart');
            })
    
            this.fetchFavMeals(favContainerIGUAL,popupINNER);
        })
    
        fav_meals.firstChild.nextSibling.firstChild.nextSibling.addEventListener('click', () => {
            this.showMealPopup(meal,popupINNER, popupCONTAINER);
        })
    
        favContainerIGUAL.appendChild(fav_meals);
    }

    showMealPopup (meal, popupINNER, popupCONTAINER) {
        popupINNER.innerHTML = ''
    
        const newPopup = document.createElement('div');
        newPopup.classList.add('pop-up-inner');
    
        const ingredients = [];
        for(let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
            } else {
                break
            }
        }
    
        newPopup.innerHTML = `
            <div class="left">
                <div class="meal-card">
                    <div class="meal-card-img-container">
                        <img src="${meal.strMealThumb}" alt="">
                    </div>
                    <div class="meal-name">
                        <p>${meal.strMeal}</p>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
            <div class="right">
                <div>
                    <h2>Intructions</h2>
                    <p class="meal-info">${meal.strInstructions}</p>
                </div>
                <div>
                    <h2>Ingredients / Measures</h2>
                    <ul>
                        ${ingredients.map(e => `<li>${e}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `
        popupINNER.appendChild(newPopup);
        popupCONTAINER.style.display = 'flex';
    }

    addMealLS (mealID) {
        const mealIds = this.getMealLS()
        localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealID]))
    }
    
    removeMealLS (mealID) {
        const mealIds = this.getMealLS()
        localStorage.setItem('mealIds', JSON.stringify(mealIds.filter(id => id !== mealID)))
    }

    getMealLS () {
        const mealIds = JSON.parse(localStorage.getItem('mealIds'));
    
        return mealIds === null ? [] : mealIds
    }
}