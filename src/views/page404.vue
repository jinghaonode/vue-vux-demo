<template>
    <div class="pagemain page404">
        <div class="img"><img src="http://shequ-1251225286.cossh.myqcloud.com/static/imgs/404.png" alt=""></div>
        <div class="msg">{{errMsg}}</div>
        <router-link to="/">
            <div class="cen">
                <x-button plain type="primary" style="border-radius:99px;">返回首页</x-button>
            </div>
        </router-link>
    </div>

</template>

<script type="es6">
    import {XButton} from 'vux'
    export default {
        components:{
            XButton
        },
        data () {
            return {
                title: '皮皮虾我们走，吃炸鸡喝啤酒' ,
                errMsg:'错误代码:404，请求的页面木见了'
            }
        },
        beforeCreate(){

        },
        mounted(){
             
        },
        methods: {
            

        }
    }
</script>

<style>
    .page404{ overflow:hidden;}
    .page404 .img{ width:50%; margin:auto; margin-top:30%;}
    .page404 .img img{ width:100%;}
    .page404 .msg{ font-size:14px; margin-top:2%; color:#333333; text-align:center}
    .page404 .cen{ width:80%; margin:auto; margin-top:5%;}
</style>
 