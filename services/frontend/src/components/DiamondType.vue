<style>
/*方块样式*/
.diamond {
    width: 0;
    height: 0;
    top: -20px;
    border: 15px solid transparent;
    border-bottom: 27px solid red;
    position: relative;
}
.diamond::after {
    content: "";
    position: absolute;
    left: -15px;
    top: 27px;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top: 27px solid red;
}
</style>

<template>
    <div style="display: flex;">
        <div style="flex: 1;"></div>
        <div class="diamond"></div>
        <div style="flex: 1;"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DiamondType',
});
</script>