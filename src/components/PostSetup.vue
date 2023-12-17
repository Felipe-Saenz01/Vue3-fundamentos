<template>
    <div class="post">
        <h1>{{ props.title }}</h1>
        <p>Composition setup</p>
        <p>{{ props.content }}</p>
        <button @click="handleClick(props.title)">Saludar</button>
    </div>
</template>

<script setup>

import {  defineProps, defineEmits } from 'vue';

const props = defineProps({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: false,
        default: 'Este post no tiene contenido :c'
    }
})

const emit = defineEmits(['sayBomdia'])

const handleClick = (title) =>{
    emit("sayBomdia", "Hola Bom dia desde "+title)
}


</script>

<style  scoped>
.post{
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
}
</style>