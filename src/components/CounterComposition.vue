<template>
    <div class="counter">
        <h3>Condador usando Composition api {{ counter }} </h3>
        <br/>
        <button class="btn-counter" @click="addCounter" >Incrementar</button>
    </div>
</template>

<script setup>

    //defineComponent nos ayuda a definir todo lo relacionado al componente
    //ref nos ayuda a definir que elementos del componente van a ser reactivos
    //import { defineComponent, ref } from 'vue';
    // El Composition api tiene una dinamica diferente al de Option api donde esto estará
    // orientado principalmente a la utilización de Hooks como otras librerias reactivas
    // este en vez de definir todas las opciones del componente vamos a definir un "setup"
    // export default defineComponent({
    //     name: 'counterComposition',
    // Define el setup con todo lo que se va a utilizar
    //     setup(){
    //         let counter = ref(0);
    //         const addCounter = () =>{
    //             counter.value++;
    //         }

    //         return {counter, addCounter}
    //     }
    // })

    //Esta configuracion es defineindo el setup en la etiqueta del script haciendo que 
    //los elementos ya se tomen en cuenta dentro del setup sin tene que definirlo nostros manual
    import {ref} from 'vue';
    let counter = ref(0);
    const addCounter = () =>{
        counter.value++;
    }


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