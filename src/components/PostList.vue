<template>
    <div class="container">
        <PostDetails v-for="element in info" 
            :key="element.title" 
            :title="element.title" 
            :content="element.content" 
            @sayBomdia="showAlert" 
        />
        <PostSetup v-for="element in info2" 
            :key="element.title" 
            :title="element.title" 
            :content="element.content" 
            @sayBomdia="showAlert" 
        />
    </div>
</template>

<script setup>
    import PostDetails from './PostDetails.vue';
    import PostSetup from './PostSetup.vue';

    let info = [
        {
            title: 'Titulo Post 1',
            content: 'Contenido del Posrt 1, hola bom dia'
        },
        {
            title: 'Titulo Post 2',
            content: 'Contenido del Posrt 2, hola bom dia'
        },
        {
            title: 'Titulo Post 3',
            content: 'Contenido del Posrt 3, hola bom dia'
        },
        {
            title: 'Titulo Post 4',
            content: 'Contenido del Posrt 4, hola bom dia'
        },
        {
            title: 'Titulo Post 5',
            
        },
    ]
    let info2 = [
        {
            title: 'Titulo Post 6',
            content: 'Contenido del Posrt 6, hola bom dia'
        },
        {
            title: 'Titulo Post 7',
            content: 'Contenido del Posrt 7, hola bom dia'
        },
        {
            title: 'Titulo Post 8',
            content: 'Contenido del Posrt 8, hola bom dia'
        },
        {
            title: 'Titulo Post 9',
            content: 'Contenido del Posrt 9, hola bom dia'
        },
        {
            title: 'Titulo Post 10',
            
        },
    ]

    function showAlert(smg){
        alert(smg)
    }
    

</script>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>