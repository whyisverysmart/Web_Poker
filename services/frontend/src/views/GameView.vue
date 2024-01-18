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


.my-card {
    flex: 1;
    border: solid;
    margin: 2%;
    height: auto;
    font-size: large;
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
            <div style="flex: 1;">Player 4 and information</div>
            <div style="flex: 1;">
                <p>Card 1</p>
                <p>Card 2</p>
            </div>
        </el-col>
        <el-col :span="6"><p>5</p></el-col>
        <el-col :span="6"><p>6</p></el-col>
        <el-col :span="6"><p>7</p></el-col>
    </el-row>
    <el-row>
        <el-col :span="6"><p>3</p></el-col>
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
        <el-col :span="6"><p>8</p></el-col>
    </el-row>
    <el-row>
        <el-col :span="6"><p>2</p></el-col>
        <el-col :span="12" class="desk-down">
            <div class="down-component">BB: 200?</div>
            <div class="down-component">Port: 000?</div>
            <div class="down-component">History movements: ?</div>
        </el-col>
        <el-col :span="6"><p>9</p></el-col>
    </el-row>
    <el-row>
        <el-col :span="6">1</el-col>

        <!--Mine Part-->
        <el-col :span="12">
            <!--Mine Info-->
            <div style="flex: 1;">Mine</div>
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
                <p>Your Tokens: 000</p>
                <div style="display: flex;">
                    <el-button type="primary" size="large" style="flex: 1;">Check</el-button>
                    <el-button type="success" size="large" style="flex: 1;">Call</el-button>
                    <el-button type="danger" size="large" style="flex: 1;">Fold</el-button>
                </div>
            </div>
        </el-col><!-- /Mine -->

        <el-col :span="6">10</el-col>
    </el-row>
</template>

<script>

import HeartType from '@/components/HeartType.vue';
import DiamondType from '@/components/DiamondType.vue';
import SpadeType from '@/components/SpadeType.vue';
import ClubType from '@/components/ClubType.vue';
import InvisibleCard from '@/components/InvisibleCard.vue';
import FoldedCard from '@/components/FoldedCard.vue';

export default {
    name: 'GameView',
    components: {
        HeartType,
        DiamondType,
        SpadeType,
        ClubType,
        InvisibleCard,
        FoldedCard,
    },
    data() {
        return {
            amount: 0,
        }
    }
}
</script>
  