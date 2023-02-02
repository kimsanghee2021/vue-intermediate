<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList :propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data(){
    return{
      todoItems: []
    }
  },  
  methods : {
    addOneItem(todoItem){
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, idx){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(idx, 1);
    },
    toggleOneItem(todoItem,idx){
      //todoItem.completed = !todoItem.completed;
      this.todoItems[idx].completed = !this.todoItems[idx].completed 
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem(){
      localStorage.clear();
      this.todoItems = [];
    }

  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        //sort 정렬 기준 (index의 순서 정렬이 아닌 첫번째와 두번째를 비교하여 나열 순 )
        this.todoItems.sort(function (a, b) {
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
  },
  components : {
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
  }
}

</script>

<style>
  body{
    text-align: center;
    background-color: #f6f6f6;
  }
  input{
    border-style:groove;
    width:200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>
