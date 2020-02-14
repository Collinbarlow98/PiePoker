const initialState = {
  items: {
    poker: {
      units: 0,
      can_buy: false,
      cost: 10,
      details: {
        tier: 1,
        poke_inc: 1,
        can_upgrade: false,
        upgrade_cost: 100
      }
    },
    baker: {
      units: 0,
      can_buy: false,
      cost: 25,
      details: {
        tier: 1,
        poke_inc: 10,
        can_upgrade: false,
        upgrade_cost: 1000
      }
    },
    cafe: {
      units: 0,
      can_buy: false,
      cost: 50,
      details: {
        tier: 1,
        poke_inc: 25,
        can_upgrade: false,
        upgrade_cost: 5000
      }
    },
    factory: {
      units: 0,
      can_buy: false,
      cost: 100,
      details: {
        tier: 1,
        poke_inc: 50,
        can_upgrade: false,
        upgrade_cost: 10000
      }
    }
  }
}

const reducer = (state = initialState, action) => {
  return state
}

export default reducer
