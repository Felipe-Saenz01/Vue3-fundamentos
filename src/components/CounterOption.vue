<template>
    <div class="counter">
        <h3>Condador usando Option api {{ counter }} </h3>
        <br/>
        <button class="btn-counter" @click="addCounter" >Incrementar</button>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    // El Option api nos va a obligar a definier como funcionará el componente
    // este retornará un objeto con estas especificaciones que definamos

    export default defineComponent({
        name: 'CounterOption',
        // Define los componentes a usar
        components: {},
        data(){
            return {
                counter: 0
            }
        },
        methods:{
            addCounter(){
                this.counter++
            }
        }
    })
</script>

<style scoped>

.counter{
    padding: 15px;
    border-radius: 15px;
    margin: 5px;
    border: solid 1px #ccc;
    width: 100%;
}

.btn-counter{
    padding: 15px;
    background-color: #0f0f0f;
    color: white;
    border: 0;
    outline: 0;
}
</style>