<style>
.el-row {
  margin-bottom: 20px;
  height: 160px;
}

.el-col {
  /*设置圆角*/
  border-radius: 4px;
  border: solid;
  display: flex;
}

/*卡牌数字颜色*/
.card-text-red {
    font-size: xx-large;
    font-weight: bold;
    text-align: center;
    color: red;
    height: 40%;
}
.card-text-black {
    font-size: xx-large;
    font-weight: bold;
    text-align: center;
    color: black;
    height: 40%;
}

.my-info {
    flex: 1;
    font-size: large;
    margin: 8px;
}

.my-card {
    flex: 1;
    border: solid;
    margin: 2%;
    height: auto;
    font-size: large;
    color: brown;
}

.my-token {
    font-size: large;
    margin: 8px;
    color: brown;
}

.public-card {
    flex: 1;
    font-size: large;
    color: blue;
    margin: 8px;
    border: solid;
}

.el-col .desk-up {
    display: flex;
}

.el-col .desk-down {
    display: flex;
}

.down-component {
    flex: 1;
    font-size: large;
    color: blue;
    margin: 10px;
    border: solid;
}
</style>

<template>
    <br />
    <el-row>
        <el-col :span="6">
            <PlayerPart />
        </el-col>
        <el-col :span="6">
            <PlayerPart />
        </el-col>
        <el-col :span="6">
            <PlayerPart />
        </el-col>
        <el-col :span="6">
            <PlayerPart />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="6">
            <PlayerPart />
        </el-col>
        <el-col :span="12" class="desk-up">
            <!--Public Card 1-->
            <div class="public-card">
                <div class="card-text-red">K</div>
                <HeartType />
            </div>
            <!--Public Card 2-->
            <div class="public-card">
                <div class="card-text-red">A</div>
                <ClubType />
            </div>
            <!--Public Card 3-->
            <div class="public-card">
                <div class="card-text-black">A</div>
                <SpadeType />
            </div>
            <!--Public Card 4-->
            <div class="public-card">
                <div class="card-text-black">A</div>
                <DiamondType />
            </div>
            <!--Public Card 5-->
            <div class="public-card">
                <InvisibleCard />
            </div>
        </el-col>
        <el-col :span="6">
            <PlayerPart />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="6">
            <PlayerPart />
        </el-col>
        <el-col :span="12" class="desk-down">
            <div class="down-component">BB: 200?</div>
            <div class="down-component">Port: 000?</div>
            <div class="down-component">History movements: ?</div>
        </el-col>
        <el-col :span="6">
            <PlayerPart />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="6">
            <PlayerPart />
        </el-col>

        <!--Mine Part-->
        <el-col :span="12">
            <!--Mine Info-->
            <div class="my-info">Mine</div>
            <!--Mine Cards-->
            <div style="flex: 2; margin: 5px;">
                <div style="display: flex; height: 100%;">
                    <!--Mine Card 1-->
                    <div class="my-card">
                        <div class="card-text-black">A</div>
                        <HeartType />
                    </div>
                    <!--Mine Card 2-->
                    <div class="my-card">
                        <FoldedCard />
                    </div>
                </div>
            </div>
            <!--Mine commit-->
            <div style="flex: 2; margin: 20px;">
                <div style="display: flex;">
                    <el-input-number v-model="amount" size="large" :step="200" style="flex: 3;"/>
                    <el-button type="success" size="large" style="flex: 1;">Raise</el-button>
                </div>
                <div class="my-token">Your Tokens: 000000</div>
                <div style="display: flex;">
                    <el-button type="primary" size="large" style="flex: 1;">Check</el-button>
                    <el-button type="success" size="large" style="flex: 1;">Call</el-button>
                    <el-button type="danger" size="large" style="flex: 1;">Fold</el-button>
                </div>
            </div>
        </el-col><!-- /Mine -->

        <el-col :span="6">
            <PlayerPart />
        </el-col>
    </el-row>
</template>

<script>

import HeartType from '@/components/HeartType.vue';
import DiamondType from '@/components/DiamondType.vue';
import SpadeType from '@/components/SpadeType.vue';
import ClubType from '@/components/ClubType.vue';
import InvisibleCard from '@/components/InvisibleCard.vue';
import FoldedCard from '@/components/FoldedCard.vue';
import PlayerPart from '@/components/PlayerPart.vue';

export default {
    name: 'GameView',
    components: {
        HeartType,
        DiamondType,
        SpadeType,
        ClubType,
        InvisibleCard,
        FoldedCard,
        PlayerPart,
    },
    data() {
        return {
            amount: 0,
        }
    }
}
</script>
  