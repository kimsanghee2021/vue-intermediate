<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
  data : function(){
    return{
      todoItems:[]
    }
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        //console.log(localStorage.key(i));
        //저장된 아이템과 컴플릿티드의 불린값이 나온다.
        //json.parse를 써야 객체(object)로 불러올 수 있다. 
        //객체 확인 법 : typeof라고 작성하면 됨 
        //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        //this.todoItems.push(localStorage.key(i));
      }
    }
  },
  //컴포넌트 태그명 : 컴포넌트 내용
  //단어 마다 앞에다가 대문자로 생성하는것이 파스칼 케이스라고 한다.

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
