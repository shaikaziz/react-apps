import { createStore, combineReducers } from 'redux'

// Action Creators

const createPolicy = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
}

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name,
        }
    }
}

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    }
}

// Reducer (Depts)

const claimsHistory = (oldListOfClaims, action) => {
    if(action === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload]
    }
    return oldListOfClaims
}

const accounting = (bagOfMoney, action) => {
    if (action.type === 'CLREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney+actiom.payload.amount
    } else return bagOfMoney
}

const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name]
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name)
    } else return listOfPolicies
} 

const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
})

const store = createStore(ourDepartments)

const action = createPolicy('Alex', 20)

store.dispatch(action)
const state = store.getState()
console.log(store)