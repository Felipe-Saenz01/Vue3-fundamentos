<template>
    <div>
        <h1>{{ saludo }}</h1>
        <button @click="changeGrettings()">Cambiar</button>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

// En el OptionAPI podemos utilizar y definir dentro de sus opciones los momentos
// del cliclo de vida del componente, como cualquiera de sus opciones

export default defineComponent({
    name: "CycleOption",
    data(){
        return{
            saludo: 'Hola bom dia'
        }
    },
    methods: {
        changeGrettings(){
            this.saludo = 'Otro Bom dia'
        }
    },
    beforeCreate(){ // cuando el componente esta a pundo de crearse 
        console.log('Aun no se crea')
    },
    created(){ // cuando el componente es creado
        console.log('Componente ya creado')
    },
    mounted(){  // cuando el componente es montado al DOM
        console.log('Componente Montado')
    },
    updated(){ // cuando el componente es actualizado
        console.log('Componente Actualizado')
    }



})


</script>

<style lang="scss" scoped>

</style>