<template>
    <div class="formWrap">
        <div class="title">Sản phẩm</div>
        <div class="inputWrap">
            <div class="inputLabel">Tên sản phẩm <span>(*)</span></div>
            <input
                    type="text"
                    placeholder="Nhập tên sản phẩm"
                    v-model="name"
            >
            <div class="errorMsg">
                {{nameErrorMsg}}
            </div>
        </div>
        <div class="inputWrap">
            <div class="inputLabel">Đơn giá <span>(*)</span></div>
            <input
                    type="number"
                    placeholder="Nhập đơn giá sản phẩm"
                    v-model="price"
            >
            <div class="errorMsg">
                {{priceErrorMsg}}
            </div>
        </div>
        <div class="inputWrap">
            <div class="inputLabel">Số lượng <span>(*)</span></div>
            <input
                    type="number"
                    placeholder="Nhập số lượng sản phẩm"
                    v-model="quantity"
            >
            <div class="errorMsg">
                {{quantityErrorMsg}}
            </div>
        </div>
        <div class="formActions">
            <button class="saveButton" @click="saveProduct"> Lưu
            </button>
            <button class="defaultButton" @click="clearData">Hủy</button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
  export default {
    name: 'ProductForm',
    data () {
        return {
            name: '',
            price: '',
            quantity: '',
        }
    },
    computed: {
        ...mapState([
            'nameErrorMsg',
            'priceErrorMsg',
            'quantityErrorMsg',
        ]),
    },
    methods: {
        ...mapMutations([
            'isDataValidated',
        ]),
        saveProduct () {
            if (this.isDataValidated(this.name, this.price, this.quantity) == true) {
                console.log('hahah');
            } else {
                console.log('hehehe');
            }
        },
        clearData () {
            this.name = ''
            this.price = ''
            this.quantity = ''
            this.$emit('onClear')
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
    $colorOrange: #f2994a;

    .formWrap {
        border: 1px solid $colorStroke;
        width: 500px;
        min-height: 400px;
        margin-right: 20px;
        padding: 24px;
        position: relative;

        .title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
            color: $colorMain;
        }

        .inputWrap {
            margin-bottom: 12px;

            .inputLabel {
                font-weight: bold;
                margin-bottom: 8px;

                span {
                    color: $colorRed;
                }
            }

            input {
                width: 100%;
                height: 40px;
                border: 1px solid $colorStroke;
                border-radius: 5px;
                outline: unset;
                font-size: 14px;

                &:hover,
                &:active,
                &:focus {
                    border: 1px solid $colorMain;
                }
            }
        }

        .formActions {
            padding: 24px 0;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .saveButton {
                background: $colorMain;
                border: unset;
                font-size: 14px;
                font-weight: bold;
                color: $colorWhite;
                width: 80px;
                height: 40px;
                border-radius: 5px;
                cursor: pointer;
            }

            .defaultButton {
                background: $colorStroke;
                border: unset;
                font-size: 14px;
                font-weight: bold;
                color: $colorDefault;
                width: 80px;
                height: 40px;
                border-radius: 5px;
                cursor: pointer;
                margin-left: 8px;
            }
        }

        .errorMsg {
            color: $colorRed;
            margin-top: 4px;
            font-size: 12px;
        }

        .hasError {
            border: 1px solid $colorRed !important;
        }
    }
</style>