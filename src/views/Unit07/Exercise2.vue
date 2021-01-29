<template>
    <div class="container">
        <ProductForm  />
        <ProductList />
    </div>
</template>

<script>
  import ProductForm from '@/components/ProductForm'
  import ProductList from '@/components/ProductList'

  export default {
    name: 'Exercise2',
    components: {
      ProductForm,
      ProductList
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
    $colorDefault: #253036;

    .container {
        height: 100vh;
        padding: 24px;
        color: $colorDefault;
        display: flex;
        align-items: flex-start;
    }
</style>