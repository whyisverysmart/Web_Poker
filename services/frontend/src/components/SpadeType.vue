<style>
/*黑桃样式*/
.heart-black {
    width: 20px;
    height: 20px;
    transform: rotate(135deg);
    background-color: black;
    display: inline-block;
    margin: 0 6px;
    position: relative;
}
/* 2 画两个偏移的圆 通过伪元素创建 */
.heart-black:before, .heart-black:after {
    content:"";
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background: black;
    position: absolute;
}
.heart-black:before {
    top: -8px;
    left: 0;
}
.heart-black:after {
    left: 8px;
    top: 0;
}
/* 3 画小尾巴 通过border创建 */
.tale {
    position: absolute;
    bottom: 14px;
    right: -4px;
    background: transparent;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 14px solid black;
    transform: rotate(45deg);
}
</style>

<template>
    <div style="display: flex;">
        <div style="flex: 1;"></div>
        <span class="heart-black">
            <span class="tale"></span>
        </span>
        <div style="flex: 1;"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpadeType',
});
</script>