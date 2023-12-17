<template>
    <div class="post">
        <h1>{{ props.title }}</h1>
        <p>Composition normal</p>
        <p>{{ props.content }}</p>
        <button @click="handleClick(props.title)">Saludar</button>
    </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PostDetails',
    //props son la forma de comunicación vertical descendente donde las props son atributos
    //que el componente padre nos pasa y nosotros definimos cuales recibimos para usarlas
    props:{
        title:{
            type: String,
            required: true
        },  
        content:{
            type: String,
            required: false,
            default: 'Este post no tiene contenido :c'
        }
    },
    //emits son la forma de comunicación vertical ascendente donde los emits son eventos
    //que el componete padre nos pasa para que el componente hijo pueda pasarle informacion al padre
    emits:[
        "sayBomdia"
    ],
    //Incluyendo las props al setup y desestructurando los emits para su uso
    setup(props, {emit}){
        const handleClick = (title) =>{
            emit("sayBomdia", "Hola Bom dia desde "+title)
        }

        return{
            props,
            handleClick
        }
    }
})

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