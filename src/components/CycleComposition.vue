<template>
    <div>
        <h1>{{ saludo }}</h1>
        <button @click="changeGrettings()">Cambiar</button>
    </div>
</template>

<script setup>
    

    // El uso de los elementos del ciclo de vida de un componente cunado usamos CompositionApi
    // tenemos que importarlos usando el prefijo on en su nombre como si fuera un hook

    import { ref, onBeforeMount, onMounted, onActivated, onUpdated } from "vue";
    // para usarlos estos funcionan como una función de callback, asi que usamos una funcion
    // flecha para todo lo que retornará
    onBeforeMount(() =>{
        console.log('Aun no se monta')
    })

    onMounted(() =>{
        console.log('Componente Montado')
    })

    onActivated(() =>{
        console.log('Creado creo')
    })

    onUpdated(() =>{
        console.log('Componente Actualizado')
    })


    let saludo = ref('Hola Bon dia');

    const changeGrettings = () =>{
        saludo.value = 'Otro bom dia'
    }

</script>

<style lang="scss" scoped>

</style>