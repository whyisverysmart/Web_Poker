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

/*红桃样式*/
.heart {
    width: 20px;
    height: 20px;
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

/*方块样式*/
.diamond {
    width: 0;
    height: 0;
    top: -30px;
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
                <div style="display: flex;">
                    <div style="flex: 1;"></div>
                    <div class="heart"></div>
                    <div style="flex: 1;"></div>
                </div>
            </div>
            <!--Public Card 2-->
            <div class="public-card">
                <div class="card-text-red">A</div>
                <div style="display: flex;">
                    <div style="flex: 1;"></div>
                    <div class="diamond"></div>
                    <div style="flex: 1;"></div>
                </div>
            </div>
            <!--Public Card 3-->
            <div class="public-card">
                <div class="card-text-black">A</div>
                <div style="display: flex;">
                    <div style="flex: 1;"></div>
                    <span class="heart-black">
                        <span class="tale"></span>
                    </span>
                    <div style="flex: 1;"></div>
                </div>
            </div>
            <!--Public Card 4-->
            <div class="public-card">
                <div class="card-text-black">A</div>
                <div style="display: flex;">
                    <div style="flex: 1;"></div>
                    <div>
                        <div class="circle"></div>
                        <div class="triangle"></div>
                        <div class="base"></div>
                    </div>
                    <div style="flex: 1;"></div>
                </div>
            </div>
            <!--Public Card 5-->
            <div class="public-card">Card 5</div>
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
                        <div style="display: flex;">
                            <div style="flex: 1;"></div>
                            <div>
                                <div class="circle"></div>
                                <div class="triangle"></div>
                                <div class="base"></div>
                            </div>
                            <div style="flex: 1;"></div>
                        </div>
                    </div>
                    <!--Mine Card 2-->
                    <div class="my-card">
                        <div class="card-text-black">A</div>
                        <div style="display: flex;">
                            <div style="flex: 1;"></div>
                            <span class="heart-black">
                                <span class="tale"></span>
                            </span>
                        <div style="flex: 1;"></div>
                        </div>
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
export default {
    name: 'GameView',
    components: {},
    data() {
        return {
            amount: 0,
        }
    }
}
</script>
  