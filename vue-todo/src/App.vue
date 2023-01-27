<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList :propsdata="todoItems"></TodoList>
    <TodoFooter></TodoFooter>
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
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        //localStorage.getItem(localStorage.key(i));
        //this.todoItems.push(localStorage.key(i));
        //console.log(localStorage.key(i));
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
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
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
