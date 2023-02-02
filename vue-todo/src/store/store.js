import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                arr.sort(function (a, b) {
                if (a.item > b.item) {
                    return 1;
                }
                if (a.item < b.item) {
                    return -1;
                }
                return 0;
                });
            }
        }
        return arr;
    }
}


export const store = new Vuex.Store({
    state : {
        todoItems: storage.fetch()
    }
});