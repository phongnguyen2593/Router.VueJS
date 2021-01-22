<template>
    <div id="app">
        <router-view  @authenticated="setAuthenticated"/> 
        
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            authenticated: '',
        }
    },
    mounted() {
        if (this.authenticated = true) {
            this.$router.replace({ name: "Login" });
        }
    },
    methods: {
        setAuthenticated(status) {
            this.authenticated = status;
        }
    }
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
