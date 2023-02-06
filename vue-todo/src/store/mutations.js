const addOneItem = (state, todoItem)=>{
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload)=>{
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.idx, 1);
}

const toggleOneItem = (state, toggleTab) => {
    state.todoItems[toggleTab.idx].completed = !state.todoItems[toggleTab.idx].completed 
    localStorage.removeItem(toggleTab.todoItem.item);
    localStorage.setItem(toggleTab.todoItem.item, JSON.stringify(toggleTab.todoItem));
}
const clearAllItem = (state)=> {
    localStorage.clear();
    state.todoItems = [];
}

export {addOneItem, removeOneItem, toggleOneItem,clearAllItem }