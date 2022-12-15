//de aqui solo sirve la funcion del add lo unico q podemos tomar
const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
const random_container = document.querySelector('.meal');

getRandomMeal()

async function getRandomMeal (){
    const resp = await fetch(url);
    const respData = await resp.json()
    const random_meal = respData.meals[0];
    console.log(random_meal);

    addMeal(random_meal);
}

function addMeal (meal) {
    const meal_card = document.createElement('div');
    meal_card.classList.add('meal-card');
    meal_card.innerHTML = `
        <div class="meal-card-img-container">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
        <div class="meal-name">
            <p>${meal.strMeal}</p>
            <i class="fa-regular fa-heart"></i>
        </div>   
    `;
    random_container.appendChild(meal_card);
}