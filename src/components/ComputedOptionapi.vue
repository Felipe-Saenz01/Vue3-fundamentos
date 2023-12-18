<template>
    <div>
        <h3>{{ reverse }}</h3>
        <input type="text" v-model="message">
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ComputedOptionapi',
    data(){
        return{
            message: ''
        }
    },
    computed: {
        reverse(){
            return this.message.split('').reverse().join('')
        }
    }

})

</script>

<style scoped>

</style>