import { defineStore } from "pinia";

export const useCounterStore = defineStore({
    id: "counter",
    state: ()=>({
     count:0,
    //  name:"Anuj",
    //  username: "anujshrivastav"
    }),

    actions: {
        increaseCount() {
            this.count++;
        },
        decreaseCount() {
            this.count--;
        }
    },
    getters: {
        oddOrEven : (state)=> {
              if(state.count %2 === 0) {
                return "even";
              } else {
                return "odd";
              }
        }
    }
})