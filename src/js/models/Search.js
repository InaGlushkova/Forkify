// Model
import axios from 'axios';
import { key } from './../config';
import { localRec } from './../views/base'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;

            // this.result = localRec[this.query];
        } catch (error) {
            alert(error);
            console.log(error);
        }
        
    };
};








