export default function playersReducer(state = [], action) {
    switch (action.type) {
        case "ADD_MONEY":
            {
                if (state) {
                    if(action.position) state[action.playerNumber].position=action.position

                    state[action.playerNumber].totalMoney += action.moneyToAdd;
                    return JSON.parse(JSON.stringify(state));
                }
                return null
            }
        case "ADD_ZONE":
            {
                if (state) {
                    state[action.playerNumber].zones[action.zoneColor].push(action.zoneToPush);
                    if(state[action.playerNumber].zones[action.zoneColor].length>=1)
                    state[action.playerNumber].double[action.zoneColor]=true

                    return JSON.parse(JSON.stringify(state));
                }
                return null
            }
        case "WAS":
            {
                if (state) {
                    state[action.playerNumber].was[action.set][action.index]=true
                    return JSON.parse(JSON.stringify(state));
                }
                return null
            }
        case "INIT_STATE":
            {
                return JSON.parse(JSON.stringify(action.state));
            }
        case "MINUS_MONEY":
            {
                if (state) {
                    state[action.playerNumber].position=action.position
                    if (state[action.playerNumber].totalMoney >= action.moneyToMinus) {
                        state[action.playerNumber].totalMoney -= action.moneyToMinus;
                        return JSON.parse(JSON.stringify(state));
                    } else {
                        alert(state[action.playerNumber].playerName + " банкрот");
                        state.splice(action.playerNumber, 1);
                        if (state.length === 1) {
                            alert(`${state[0].playerName} победитель`)
                            action.toNull([])
                            action.OBNAL(true)
                            action.setFlag(false)
                            return null
                        }
                        return JSON.parse(JSON.stringify(state));
                    }
                }
                return JSON.parse(JSON.stringify(state));
            }
        case "CHANGE_POSITION":{
        if (state) {
            state[action.playerNumber].position=action.position
            return JSON.parse(JSON.stringify(state))
        }
        return null
        }
        default:
            return state;
    }
}