<style>
/*TODO background-color?*/
.card-container {
    display: flex;
    height: 100%;
}
/*红桃样式*/
.heart {
    width: 20px;
    height: 20px;
    top: 10px;
    background-color: red;
    position: relative;
    transform: rotate(45deg);
}
.heart::before, .heart::after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: red;
    position: absolute;
    border-radius: 50%;
}
.heart::before {
    left: -10px;
}
.heart::after {
    top: -10px;
}
</style>

<template>
    <div class='card-container'>
        <div style="flex: 1;"></div>
        <div class="heart"></div>
        <div style="flex: 1;"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeartType',
});
</script>