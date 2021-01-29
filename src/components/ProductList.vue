<template>
    <div class="productList">
        <table>
            <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
            </tr>
            <!-- <tr v-if="products.length === 0">
                <td colspan="6" class="textCenter">Không có dữ liệu</td>
            </tr> -->
            <!-- v-for="(product, index) in getPaginationProductions" :key="product.id" -->
            <tr >
                <!-- <td>{{product.id}}</td>
                <td><span class="textMain">{{product.name}}</span></td> -->
                <!-- <td>{{formatPrice(product.price)}}</td> -->
                <!-- <td class="textCenter">{{product.quantity}}</td>
                <td class="textCenter">
                    <span v-if="product.quantity > 0" class="textGreen">Còn hàng</span>
                    <span v-else class="textRed">Hết hàng</span>
                </td>
                <td> -->
                    <!-- <button class="editButton" @click="editProduct(product)">Sửa</button> -->
                    <!-- <button class="deleteButton" @click="deleteProduct(index)">Xóa</button> -->
                <!-- </td> -->
            </tr>
        </table>
        <div class="paginationWrap">
            <!-- <div class="paginationDetail">
                {{
                total === 0 ? 'Hiển thị 0 - 0 trên tổng 0 (0 trang)' :
                `Hiển thị ${from} - ${to} trên tổng ${total} (${lastPage} trang)`
                }}
            </div> -->
            <div>
                <!-- <button class="paginationButton" @click="goPrePage" :class="{isButtonDisabled: isGoPrePageDisabled}"> -->
                    <!-- <img src="@/assets/back.png" alt=""> -->
                <!-- </button> -->
                <!-- <button class="paginationButton" @click="goNextPage" :class="{isButtonDisabled: isGoNextPageDisabled}"> -->
                    <!-- <img src="@/assets/next.png" alt=""> -->
                <!-- </button> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'ProductList',
    data () {
      return {
        currentPage: 1,
        perPage: 5
      }
    },
    computed: {
        ...mapState([
            'products',
        ])
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
    $colorStroke: #d8e0ea;
    $colorMain: #0080dd;
    $colorDefault: #253036;
    $colorGreen: #39cd74;
    $colorRed: #f54b5e;
    $colorTableHeader: #f2f6fe;
    $colorWhite: #fff;
    $colorOrange: #f2994a;

    .productList {
        .textCenter {
            text-align: center;
        }

        .textGreen {
            color: $colorGreen;
        }

        .textRed {
            color: $colorRed;
        }

        .textMain {
            color: $colorMain;
        }

        table {
            border: 1px solid $colorStroke;
            border-spacing: 0;
            width: 900px;

            th {
                background: $colorTableHeader;
                padding: 14px;
                border-right: 1px solid $colorStroke;
                border-bottom: 1px solid $colorStroke;
            }

            td {
                text-align: left;
                padding: 12px;
                font-size: 14px;
                border-right: 1px solid $colorStroke;
            }

            .editButton {
                background: $colorOrange;
                border: unset;
                font-size: 14px;
                font-weight: bold;
                color: $colorWhite;
                width: 60px;
                height: 40px;
                border-radius: 5px;
                cursor: pointer;
            }

            .deleteButton {
                background: $colorRed;
                border: unset;
                font-size: 14px;
                font-weight: bold;
                color: $colorWhite;
                width: 60px;
                height: 40px;
                border-radius: 5px;
                cursor: pointer;
                margin-left: 8px;
            }
        }

        .paginationWrap {
            margin: 16px 0 32px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .paginationDetail {
                color: $colorDefault;
            }

            .paginationButton {
                width: 32px;
                height: 32px;
                margin-left: 4px;
                padding: 3px;
                cursor: pointer;
                background: $colorWhite;
                border: 1px solid $colorDefault;

                img {
                    width: 14px;
                    height: 14px;
                    margin-top: 5px;
                }

                &.isButtonDisabled {
                    background: $colorStroke;
                    cursor: not-allowed;
                    opacity: 0.5;
                }
            }
        }

    }
</style>