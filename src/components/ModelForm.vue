<template>
    <form class="form" action="">
        <p>{{ inputText }} </p>
        <input type="text" v-model="inputText">
        <input type="checkbox" v-model="aggree"> Acepto terminos y condiciones
    </form>
</template>

<script setup>
    import {ref} from 'vue'
    let inputText = ref('');
    let aggree = true;

</script>

<style>
.form{
    padding: 15px;
    border-radius: 15px;
    margin: auto;
    border: solid 1px black;
    width: 70%;
}

</style>