import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                //sort 정렬 기준 (index의 순서 정렬이 아닌 첫번째와 두번째를 비교하여 나열 순 )
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
        todoItems : storage.fetch()
    },
    mutations : {
        addOneItem(state, todoItem){
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload){
            localStorage.removeItem(payload);
            state.todoItems.splice(payload.idx, 1);
        },
        toggleOneItem(state, todoItem,idx){
            state.todoItems[idx].completed = !state.todoItems[idx].completed 
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearAllItem(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
});