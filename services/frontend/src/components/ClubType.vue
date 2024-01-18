<style>
/*梅花样式*/
.circle {
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 10px;
    left: 12px;
    position: relative;
    z-index: 20;
}
.circle:before {
    content: "";
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 10px;
    left: -12px;
    top: 16px;
    position: absolute;
    z-index: 20;
}
.circle:after {
    content: "";
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 10px;
    left: 12px;
    top: 16px;
    position: absolute;
    z-index: 20;
}
.triangle {
    width: 0;
    height:0;
    border-left: 8px solid black;
    border-right: 8px solid black;
    border-bottom: 14px solid black;
    position: relative;
    top: -5px;
    left: 14px;
    z-index: 20;
}
.base {
    background: none repeat scroll 0 0 black;
    height: 12px;
    position: relative;
    left: 0;
    top: -6px;
    width: 40px;
    z-index: 0;
}
.base::before {
    width: 0px;
    height: 2px;
    position: absolute;
    left: -1px;
    content: "";
    border-left: 10px solid white;
    border-right: 10px solid white;
    border-top: 2px solid white;
    border-bottom: 10px solid white;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 12px;
}
.base::after {
    width: 0px;
    height: 2px;
    position: absolute;
    left: 25px;
    content: "";
    border-left: 10px solid white;
    border-right: 10px solid white;
    border-top: 2px solid white;
    border-bottom: 10px solid white;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 0px;
}
</style>

<template>
    <div style="display: flex;">
        <div style="flex: 1;"></div>
        <div>
            <div class="circle"></div>
            <div class="triangle"></div>
            <div class="base"></div>
        </div>
        <div style="flex: 1;"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClubType',
});
</script>