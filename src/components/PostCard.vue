<template>
    <div class="post-card">
        <h3>Titulo</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo sint minima ullam assumenda officiis, voluptates enim maiores nostrum. Veritatis, quasi aliquid ratione consequuntur est quas ducimus rerum aperiam beatae quia.</p>
        <PostButton />
    </div>
</template>


<script setup>
    import PostButton from './PostButton.vue';
</script>

<style scoped>

.post-card{
    padding: 15px;
    border-radius: 15px;
    margin: 5px;
    border: solid 1px #ccc;
}
</style>

