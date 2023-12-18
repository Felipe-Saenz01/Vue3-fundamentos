<template>
    <div>
        <h3>{{ reverse }}</h3>
        <input type="text" v-model="message">
    </div>
</template>

<script>
import {defineComponent, ref, computed} from 'vue';

export default defineComponent({
    name: 'ComputedOptionapi',
    setup(){
        let message = ref('');
        const reverse = computed(() => message.value.split('').reverse().join(''))

        return{ message, reverse }
    }

})

</script>

<style scoped>

</style>