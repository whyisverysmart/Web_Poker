//import axios from 'axios';

const state = {
    playerName: [],
    playerToken: [],
    port: 0,
    currentBet: 200,
    movements: [],
};

const getters = {
    stateData: state => state.data
};

const actions = {
    async Raise(playerIndex, myBet) {
        if (myBet < 2*state.currentBet || myBet <= 0) {
            alert('Not Allowed');
            return;
        }
        state.movements.push(state.playerName[playerIndex] + ': Raise to ' + myBet);
        var len = state.movements.length;
        if (len > 4) state.movements = state.movements.slice(len-4);
        state.playerToken[playerIndex] -= myBet;
        state.port += myBet;
        state.currentBet = myBet;
        return;
    }
};

const mutations = {
    setData(state, newData) {
        state.data = newData;
    },
    setKeyWord(state, newKey) {
        state.keyword = newKey;
    }
};

export default {
    //namespace: true,
    state,
    getters,
    actions,
    mutations
};