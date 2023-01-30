<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="todoItem,idx in propsdata" :key="todoItem.item" class="shadow">
                <i class="fas fa-check checkBtn " @click="toggleComplate(todoItem,idx)" :class="{checkBtnCompleted:todoItem.completed }"></i>
                <span :class="{ textCompleted :todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" @click="removeTodo(todoItem, idx)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods:{
        removeTodo(todoItem, idx){
            this.$emit('removeItem', todoItem, idx);
        },
        toggleComplate(todoItem,idx){
            this.$emit('toggleItem', todoItem,idx);
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
    /* 리스트 아이템 트렌지션 효과 */
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter,.list-leave-to
        {
        opacity: 0;
        transform: translateY(30px);
    }
</style>