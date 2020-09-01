// https://www.figma.com/file/UuLVgVYlWPKvdLtmPZ3aye/Untitled?node-id=0%3A1

// 1. Use Chuck Norris API to get jokes in JSON format - https://api.chucknorris.io/
// 2. Ability to get a random joke.
// 3. Ability to get a random joke from categories (Use API to get all available categories).
// 4. Ability to get jokes by free text search.

let randomCheckbox = document.getElementById("randomCheckbox");
let categoriesCheckbox = document.getElementById("categoriesCheckbox");
let categoriesList = document.getElementById("categoriesList");
let searchCheckbox = document.getElementById("searchCheckbox");
let searchText = document.getElementById("searchText");
let jokesID = document.getElementById("jokesID");


class Jokes {
    constructor( url ) {
        this.url = url;
    }

    async getCategories() {
        let response = await fetch ( this.url ),
            categories = await response.json();

        return Promise.resolve(categories);
    }
    
    async getRandomJoke() {
        let response = await fetch ( this.url ),
            randomJoke = await response.json();

        return Promise.resolve(randomJoke);
    }
}




function stopDefAction(evt) {
    evt.preventDefault();
}
let getJokesBtn = document.getElementById("getJokesBtn");
getJokesBtn.addEventListener(
    'click', stopDefAction, false
);




function renderCategory(category) {
    return `<li class="getJokes-form-categoriesList-item">
                <input class="getJokes-form-categoriesList-item-radio" type="radio" name="categoriesList-radio">
                <span class="getJokes-form-categoriesList-item-checkmark">${category}</span>
            </li>`;
}



let displayForm = () => {
    if (categoriesCheckbox.checked === true){

        new Jokes( 'https://api.chucknorris.io/jokes/categories' ) 
            .getCategories()
            .then(
                categories => {
                    filteredCategories = categories
                                                    .filter( category => category)
                                                    .map( category => renderCategory(category) )
                                                    .join(' ');

                    categoriesList.innerHTML = filteredCategories;
                }
            )
            .then(
                () => categoriesList.style.display = "block"
            )

    } else {
        categoriesList.style.display = "none";
    }

    if (searchCheckbox.checked === true){
        searchText.style.display = "block";
    } else {
        searchText.style.display = "none";
    }
}

searchText.addEventListener('input', searchTextChangeColor);

function searchTextChangeColor() {
    if (searchText.value.length > 0) {
        searchText.style.color = "#333333";
    } else {
        searchText.style.color = "#ABABAB";
    }
}






function getCategoriesForJoke(categories) {
    let categoriesForJoke = categories.
                                        filter( category => category)
                                        .map (category => {
                                            `<span class="newJoke-content-info-categories-category">${category}</span>`
                                        })
                                        .join(' ');
    return categoriesForJoke
}

function renderJoke(joke) {
    return `<img src="${joke.icon_url}" alt="Joke's icon" class="newJoke-icon">

            <div class="newJoke-content">
                <div class="newJoke-content-idLine">
                    <p class="newJoke-content-idLine-title">id: </p>
                    <a href="${joke.url}" class="newJoke-content-idLine-id">${joke.id}</a>
                    <a href="${joke.url}" class="newJoke-content-idLine-link">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.54545 0H5.90909C5.65806 0 5.45454 0.203515 5.45454 0.45455C5.45454 0.705585 5.65806 0.9091 5.90909 0.9091H8.44809L3.76952 5.58768C3.59204 5.76516 3.59204 6.05298 3.76952 6.2305C3.85825 6.31923 3.97458 6.36362 4.09091 6.36362C4.20724 6.36362 4.32359 6.31923 4.4123 6.23048L9.09092 1.55191V4.09091C9.09092 4.34194 9.29444 4.54546 9.54547 4.54546C9.7965 4.54546 10 4.34194 10 4.09091V0.45455C10 0.203515 9.79648 0 9.54545 0Z" fill="#8EA7FF"/>
                            <path d="M7.72725 4.54543C7.47622 4.54543 7.2727 4.74895 7.2727 4.99998V9.09089H0.90908V2.72725H4.99999C5.25103 2.72725 5.45454 2.52373 5.45454 2.2727C5.45454 2.02167 5.25103 1.81817 4.99999 1.81817H0.45455C0.203515 1.81817 0 2.02168 0 2.27272V9.54544C0 9.79645 0.203515 9.99997 0.45455 9.99997H7.72727C7.97831 9.99997 8.18182 9.79645 8.18182 9.54542V4.99998C8.1818 4.74895 7.97829 4.54543 7.72725 4.54543Z" fill="#8EA7FF"/>
                        </svg>
                    </a>
                </div>

                <p class="newJoke-content-text">${joke.value}</p>

                <div class="newJoke-content-info">
                    <div class="newJoke-content-info-lastUpdate">
                        <p class="newJoke-content-info-lastUpdate-text">Last update: </p>
                        <p class="newJoke-content-info-lastUpdate-time">${joke.updated_at}</p>
                    </div>
                    <div class="newJoke-content-info-categories">${getCategoriesForJoke(joke.categories)}</div>
                </div>
            </div>`
}

let getCategory = () => {
    for (line in categoriesList) {
        console.log(line.childList);
        // if (line.firstElementChild.checked === true) {
        //     return String.toLowerCase(line.innerText)
        // }
    }
}

let getJoke = () => {
    if (randomCheckbox.checked === true){

        new Jokes( 'https://api.chucknorris.io/jokes/random' ) 
            .getRandomJoke()
            .then(
                joke => {
                    let newJoke = document.createElement('div');
                    newJoke.classList.add("newJoke");
                    newJoke.innerHTML = renderJoke(joke);
                    jokesID.prepend(newJoke);
                }
            )
    } else if (categoriesCheckbox.checked === true){

        let category = getCategory();
        console.log(category);
    }
}