<template>
    <div>
        <ul>
            <!---for문 돌린 내용을 bind해서 대리고 오기-->
            <li v-for="(todoItem , index) in todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" @click='toggleComplete(todoItem, index)'></i>
                <span v-bind:class="{textCompleted: todoItem.completed}" >{{ todoItem.item }}</span>
                <span class="removeBtn" @click="removeTodo(todoItem, index)"><i class="fas fa-trash-alt"></i></span>
            </li>
        </ul>
    </div>
</template>

<script>
/*
    로컬스토리지에 저장한 데이터를 list에 뿌려라
    1. 빈값 배열을 생성 빈값명 : todoItems
    2. 생성된 빈값에다가 로컬스토리지 key값을 넣어라
        - if문을 생성해서 localStorage.length값이 0보다 클경우 실행시켜라
        - 실행 시킬 경우 for문으로 돌려서 localStorage.key값을 돌려라
        - 그 돌린값을 빈 배열에다가 push해서 담아라
    3. removeTodo 버튼 클릭시 methods를 생성해서 각 리스트 삭제 기능을 넣어라 
        - li v-for문에서 todoItem과 index값을 불러 올 수 있어서 그 값을 removeTodo함수에 파라미터값으로 넣고 각각의 리스트 
        내용을 호출 할 수 있다.
*/

export default {
    data : function(){
        return{
            todoItems : []
        }
    },
    created : function(){
        if (localStorage.length > 0){
            for (var i = 0; i < localStorage.length; i++ ){
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
    methods : {
        removeTodo: function (todoItem, index){
            //console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
        },
        toggleComplete: function (todoItem){
            todoItem.completed = !todoItem.completed;
            //삭제 했다가 다시 생서 해야함
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
            console.log(todoItem.completed);
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