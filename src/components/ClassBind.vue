<template>
    <div class="binding" :style="{backgroundColor : fondo}" >
        <h3 :style="{color: letra}">Mensaje enviado correctamente</h3>
        <button class="button" @click="changeState" :style="{backgroundColor : letra, color: fondo}">{{ estado }}</button>
    </div>

</template>

<script setup>
    import { ref } from 'vue';
    //indentifica si hay un error
    let hasNight = false;
    let estado = ref('Noche');
    let fondo= ref('yellow');
    let letra = ref('black');

    const changeState = () =>{
        if(hasNight){
            hasNight = false;
            estado.value = 'Dia';
            fondo.value = 'black';
            letra.value = 'yellow';
        }else{
            hasNight = true;
            estado.value = 'Noche';
            letra.value = 'black';
            fondo.value = 'yellow';
        }
    }
</script>

<style>

.binding{
    padding: 15px;
    border-radius: 15px;
    margin: auto;
    border: solid 1px black;
    width: 70%;
}

.button{
    padding: 15px;
    border: 0;
    outline: 0;
}


</style>