<style>
.player-card {
    flex: 1;
    font-size: large;
    color: blue;
    margin: 8px;
    border: solid;
}

.player-name {
    font-size: medium;
    margin: 8px;
}

.player-token {
    font-size: medium;
    margin: 8px;
    color: brown;
}

.last-movement {
    font-size: medium;
    margin: 8px;
    color: red;
}
</style>

<template>
    <div class="player-info" style="flex: 1;">
        <div class="player-name">Player4 Name</div>
        <div class="player-token">Tokens: 0000000</div>
        <div class="last-movement">Call? Raise? Fold?</div>
    </div>
    <div style="flex: 2; display: flex;">
        <div class="player-card">
            <InvisibleCard />
        </div>
        <div class="player-card">
            <FoldedCard />
        </div>
    </div>
</template>

<script>
import InvisibleCard from './InvisibleCard.vue';
import FoldedCard from './FoldedCard.vue';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PlayerPart',
    components: {
        InvisibleCard,
        FoldedCard,
    },
    data() {
        //TODO
    }
});
</script>