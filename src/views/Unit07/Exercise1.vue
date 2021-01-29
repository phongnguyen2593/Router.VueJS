<template>
    <div class="container">
        <div class="productList">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </tr>
                <tr v-if="products.length === 0">
                    <td colspan="6" class="textCenter">Không có dữ liệu</td>
                </tr>
                <tr v-for="(product, index) in products" :key="index">
                    <td class="textCenter">{{index + 1}}</td>
                    <td>
                        <div class="productNameWrap">
                            <img v-if="product.image" :src="product.image" alt="">
                            <img v-else src="@/assets/defaultImg.png" alt="">
                            <div class="textMain">{{product.name}}</div>
                        </div>
                    </td>
                    <td>{{formatPrice(product.id)}}</td>
                    <td class="textCenter">{{product.quantity}}</td>
                    <td class="textCenter">
                        <span v-if="product.quantity > 0" class="textGreen">Còn hàng</span>
                        <span v-else class="textRed">Hết hàng</span>
                    </td>
                    <td>
                        <button class="addToCartButton" @click="addToCart(product)">Thêm vào giỏ</button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="cartWrap">
            <div class="title">Giỏ hàng</div>
            <div class="cartEmpty" v-if="cartProducts.length === 0">
                Không có sản phẩm nào được thêm vào giỏ
            </div>
            <div class="cartProductWrap" v-for="(product, index) in cartProducts" :key="product.id">
                <div class="cartProductNameWrap">
                    <img v-if="product.image" :src="product.image" alt="">
                    <img v-else src="@/assets/defaultImg.png" alt="">
                    <div>
                        <strong>{{formatProductName(product.name)}}</strong>
                        <!-- <div>{{formatPrice(product.price)}}</div> -->
                    </div>
                </div>
                <div class="actions">
                    <input
                        class="quantityChangeInput"
                        type="number"
                        v-model="cartProducts[index].quantity"
                    >
                    <button class="removeFromCartButton" @click="removeFromCart(index)">Xoá</button>
                </div>
            </div>
            <div class="cartTotal">
                Tổng tiền: {{caculateTotal}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
  export default {
    name: 'Exercise1',
    computed: {
      ...mapState([
        'products', 'cartProducts'
      ]),
      ...mapGetters([
        'formatPrice',
        'caculateTotal',
        'formatProductName'
      ]),
    },
    methods: {
      ...mapMutations([
        'addProductToCart',
        'remove',
      ]),
      addToCart (product) {
        this.addProductToCart(product);
      },
      removeFromCart (cartIndex) {
        this.remove(cartIndex);
      },
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

    .container {
        height: 100vh;
        padding: 24px;
        color: $colorDefault;
        display: flex;
        align-items: flex-start;

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

                .productNameWrap {
                    display: flex;
                    align-items: center;

                    img {
                        margin-right: 8px;
                        width: 40px;
                        height: 40px;
                    }
                }

                .addToCartButton {
                    background: $colorMain;
                    border: unset;
                    font-size: 14px;
                    font-weight: bold;
                    color: $colorWhite;
                    width: 120px;
                    height: 40px;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
        }

        .cartWrap {
            border: 1px solid $colorStroke;
            width: 500px;
            height: 500px;
            margin-left: 20px;
            padding: 24px;
            position: relative;

            .title {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .cartEmpty {
                text-align: center;
                margin-top: 100px;
            }

            .cartProductWrap {
                height: 60px;
                border-bottom: 1px solid $colorStroke;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .cartProductNameWrap {
                    display: flex;
                    align-items: center;

                    img {
                        margin-right: 8px;
                        width: 40px;
                        height: 40px;
                    }
                }

                .actions {
                    display: flex;
                    align-items: center;

                    .quantityChangeInput {
                        width: 80px;
                        height: 30px;
                        margin-right: 12px;
                        border: 1px solid $colorStroke;
                    }

                    .removeFromCartButton {
                        width: 60px;
                        height: 30px;
                        background: $colorRed;
                        border: unset;
                        border-radius: 5px;
                        color: $colorWhite;
                        cursor: pointer;
                    }
                }
            }

            .cartTotal {
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 24px;
                color: $colorRed;
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
</style>