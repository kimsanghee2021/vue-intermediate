<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
        <MyModal :show="showModal" @close="showModal = false">

            <h3 slot="header"></h3>

        </MyModal>
    </div>
</template>

<script>
import MyModal from './common/MyModal.vue'
export default {
    data(){
        return{
            newTodoItem : ''
        }
    },
    methods:{
        addTodo(){
            if(this.newTodoItem !== ''){
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            } else{
                alert('ddd');
            }

        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    Components:{
        MyModal: MyModal
    }
}
</script>

<style scoped>
    input:focus{
        outline: none;
    }
    .inputBox{
        background: white;
        height:50px; line-height: 50px; border-radius: 5px;
    }
    .inputBox input{
        border-style:none; font-size: 0.9rem; width:90%
    }
    .addContainer{
        float: right; 
        background: linear-gradient(to right, #6478fb, #8763fb); 
        display: block; 
        width:3rem; 
        border-radius:0 5px 5px 0;
    }
    .addBtn{
        color:white; vertical-align: middle;
    }
</style>