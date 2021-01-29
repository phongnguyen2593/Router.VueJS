<template>
    <div id="app">
        <Exercise1 />
        <Exercise2 />
    </div>
</template>

<script>
import Exercise1 from '@/views/Unit07/Exercise1.vue'
import Exercise2 from '@/views/Unit07/Exercise2.vue'
export default {
    name: 'App',
    components: {
        Exercise1,
        Exercise2
    },
    data() {
        return {
           //
        }
    },
}
</script>

<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
