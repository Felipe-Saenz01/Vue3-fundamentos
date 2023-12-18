<template>
    <div>
        <h3 v-bg-color:green>{{ message }}</h3>
        <h3 v-custom-color.big.blue>{{ reverse }}</h3>
        <input type="text" v-model="message">
    </div>
</template>

<script setup>
import { ref, computed} from 'vue';

    let message = ref('saludo');
    const reverse = computed(() => message.value.split('').reverse().join(''))    



</script>

<style scoped>

</style>