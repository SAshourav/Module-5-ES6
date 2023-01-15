const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
};


const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';    //just to make the before result vanish
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
            <div onclick="loadMealDetails(${meal.idMeal})" class="card" style="width: 18rem;">
                <img src="${meal.strMealThumb}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
                    <a href="#" class="btn btn-primary">Check Details</a>
                </div>
            </div>
        `;
        mealContainer.appendChild(mealDiv);
    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-filed');
    const searchText = searchField.value;
    loadMeal(searchText);
    searchField.value = '';
}
loadMeal('a');

const loadMealDetails = (mealId) => {
    url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
}
const displayMealDetails = (meal) =>{
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ''; 
    const mealDiv = document.createElement('div');
        mealDiv.classList.add('card');
        mealDiv.innerHTML=`
            <img src="${meal.strMealThumb}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
                <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
        `;
        detailContainer.appendChild(mealDiv);
}