<template>
    <div> Quản lý sản phẩm 
        <!-- <template v-slot:title class="title">
            Quản lý sản phẩm 
        </template>
        <template v-slot:table>
            <el-main>
                <el-table 
                    :data="tableData"
                    border>
                    <el-table-column prop="date" label="Date" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="Name" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="Address">
                    </el-table-column>
                </el-table>
                <div class="block" style="text-alight:left">
                        <el-pagination
                            background
                            :current-page.sync="currentPage4"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="10"
                            layout="total, prev, pager, next, jumper"
                            :total="50">
                        </el-pagination>
                    </div>
            </el-main>
        </template> -->
    </div>
</template>

<script>
export default {
    name: "Products",
}
</script>