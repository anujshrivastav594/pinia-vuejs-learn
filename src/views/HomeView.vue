<template>
    <div class="home">



      <!-- <div class="count">  -->
       <!-- {{count}} -->
       <!-- {{ storeCounter.count }} -->
      <!-- </div> -->
<Counter/>

      <div class="buttons">
           <button @click="storeCounter.decreaseCount"> - </button>
           <button @click="storeCounter.increaseCount"> + </button>
      </div>

      <hr/>

      <div>
        <!-- This counter is : {{oddOrEven}} -->
        This counter is : {{ storeCounter.oddOrEven }}
      </div>

      <hr/>

      <div>
        <h3>Edit Counter: </h3>
         <input
         type="number"
         v-model="storeCounter.count"
         >
        </input>
      </div>

    </div>
</template>





<style>
.count {
  font-size: 60px;
  margin : 20px;
}

.buttons button {
  font-size: 40px;
  margin : 10px;
}
</style>





<script setup>
// import { ref, computed } from 'vue';

import Counter from "@/components/Counter.vue"

import { useCounterStore } from '@/stores/counter';

const storeCounter = useCounterStore();


// const count = ref(10);

// const increaseCount = ()=> {
//     // console.log("increase");
//     count = count.value++;
// }

// const decreaseCount = ()=> {
//     // console.log("increase");
//     count = count.value--;
// }

// const oddOrEven = computed(()=> {
//   if(count.value % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// })
</script>