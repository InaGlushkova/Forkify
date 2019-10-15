import axios from 'axios';
import { key } from './../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.image = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            alert(`Something get wrong - ${error}`);
            console.log(error);
        }
    }

    calcTime() {
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 3;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngr() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const units = [...unitsShort, 'kg', 'g'];

        const newIngr = this.ingredients.map(el => {
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            const arrIngr = ingredient.split(' ');
            const unitIndex = arrIngr.findIndex(el2 => units.includes(el2));

            let objIngr;
            if (unitIndex > -1) {
                const arrCnt = arrIngr.slice(0,  unitIndex);

                let count;
                if (arrCnt.length === 1) {
                    count = eval(arrIngr[0].replace('-', '+'));
                } else {
                    count = eval(arrIngr.slice(0, unitIndex).join('+'));
                }

                objIngr = {
                    count,
                    unit: arrIngr[unitIndex],
                    ingredient: arrIngr.slice(unitIndex + 1).join(' ')
                };

            } else if (parseInt(arrIngr[0], 10)) {
                objIngr = {
                    count: parseInt(arrIngr[0], 10),
                    unit: '',
                    ingredient: arrIngr.slice(1).join(' ') 
                };
            } else if (unitIndex === -1) {
                objIngr = {
                    count: 1,
                    unit: '',
                    ingredient
                };
            }

            return  objIngr;
        });
        this.ingredients = newIngr;
    }

    updateServings (type) {
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings);
        });

        this.servings = newServings;
    }
}