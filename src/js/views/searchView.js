// View
import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    });
    document.querySelector(`a[href="#${id}"]`).classList.add('results__link--active');
    // document.querySelector(`.results__link[href="#${id}"]`).classList.add('results__link--active');
};

export const limitResTitle = (title, limit = 17) => {
    const newTitle = [];
    
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')} ...`;
    }

    return title;
};

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitResTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;

    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

//type = 'prev' or 'next'
const createBtn = (page, type) => {
    const markup = `
        <button class="btn-inline results__btn--${type}" data-goto="${type === 'prev' ? page - 1 : page + 1}">
            <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>    
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
            </svg>
        </button>
    `;
    return markup;
};

const renderBtns = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;

    if (page === 1 && pages > 1) {
        button = createBtn(page, 'next');
    } else if (page < pages) {
        button = `
            ${createBtn(page, 'next')}
            ${createBtn(page, 'prev')}
        `;
    } else if (page === pages && page > 1) {
        button = createBtn(page, 'prev');
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 5) => {
    const start = (page - 1) * resPerPage;
    const end = start + resPerPage;

    recipes.slice(start, end).forEach(el => {
        renderRecipe(el);
    });

    renderBtns(page, recipes.length, resPerPage);
};