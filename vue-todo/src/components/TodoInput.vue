<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button v-on:click="addTodo">add</button>
    </div>
</template>

<script>
export default {
    data : function(){
        return {
            newTodoItem : ''
        }
    },
    methods : {
        addTodo : function(){
            // console.log(this.newTodoItem);
            //저장하는 로직을 수행 후 인풋박스에 있는 내용을 비워주기 
            
            //localStorage.setItem(key,value);
            localStorage.setItem(this.newTodoItem, this.newTodoItem);
            this.newTodoItem ='';
        }
    }
}
</script>

<style>

</style>