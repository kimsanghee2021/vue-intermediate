<template>
    <div>
        <ul>
            <li>
                <span></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

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