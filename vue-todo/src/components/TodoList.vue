<template>
    <div>
        <ul>
            <li v-for="todoItem,idx in todoItems" :key="todoItem.item" class="shadow">
                <i class="fas fa-check checkBtn " @click="toggleComplate(todoItem,idx)" :class="{checkBtnCompleted:todoItem.completed }"></i>
                <span :class="{ textCompleted :todoItem.completed}">{{ todoItem.item }}{{ idx }}</span>
                <span class="removeBtn" @click="removeTodo(todoItem, idx)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            todoItems : []
        }
    },
    created(){
        if(localStorage.length > 0){
            for (var i = 0; i < localStorage.length; i++){
                //localStorage.getItem(localStorage.key(i));
                //this.todoItems.push(localStorage.key(i));
                //console.log(localStorage.key(i));
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
    },
    methods:{
        removeTodo(todoItem, idx){
            localStorage.removeItem(todoItem);
            this.todoItems.splice(idx,1);
            //console.log(todoItem, idx);
        },
        toggleComplate(todoItem){
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    }
}
</script>

<style scoped>
ul{
        list-style-type:none;
        padding-left:0;
        margin-top:0;
        text-align: left;
    }
    li{
        display: flex;
        min-height:50px;
        height:50px;
        line-height:50px;
        margin: 0.5rem 0;
        padding:0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
    .checkBtn{
        line-height:45px;
        color:#62acde;
        margin-right:5px;
    }
    .checkBtnCompleted{
        color:#b3adad;
    }
    .textCompleted{
        text-decoration: line-through;
        color:#b3adad;
    }
</style>