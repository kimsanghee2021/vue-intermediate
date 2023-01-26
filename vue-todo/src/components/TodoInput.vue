<template>
    <div class="inputBox shadow">
        <input type="text">
    </div>
</template>

<script>
export default {

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