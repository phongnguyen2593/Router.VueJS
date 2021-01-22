<template>
    <base-layout>
            <router-view/>
    </base-layout>
</template>

<script>
import BaseLayout from '../layouts/BaseLayout.vue'
export default {
    name: "Admin",
    data () {
        const item = {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
        };
        return {
            tableData: Array(4).fill(item),
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
        }
    },
    components: {
        BaseLayout
    }
}
</script>

<style lang="scss" scoped>
    .el-main {
        
        .block {
            text-align: right;
            margin-top: 20px;
        }
    }
</style>