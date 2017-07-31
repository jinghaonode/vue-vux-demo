<template>
    <div class="article-box" >
        <div>
            <li>
                <input type="text" v-model.trim="username" v-verify="username" placeholder="姓名"/>
                <label v-verified="verifyError.username"></label>
            </li>
            <li>
                <input type="password" v-model="pwd" v-verify="pwd" placeholder="密码"/>
                <label v-verified="verifyError.pwd"></label>
            </li>
            <li>
                <input type="text" v-model="email" v-verify="email" placeholder="邮箱"/>
                <label v-verified="verifyError.email"></label>
            </li>
            <div>
                <button v-on:click="submit">提交</button>
            </div>
            <hr>
            <div><label v-show="$verify.$errors.username"
                        v-text="$verify.$errors"></label></div>
        </div>
    </div>
</template>
<script>


    export default{
        data () {
            return {
                username: "",
                pwd: "",
                email: "",
                a: {
                    b: {
                        c: "123"
                    }
                }
            }
        },
        verify: {
            username: [
                "required",
                {
                    minLength: 2,
                    message: "姓名不得小于两位"
                },
                {
                    maxLength: 15,
                    message: "姓名最多15位"
                }
            ],
            pwd: {
                minLength: 6,
                message: "密码不得小于6位"
            } ,
            email: "email"
        },
        computed: {
            verifyError: function () {
                return this.$verify.$errors;
            }
        },
        methods: {
            submit: function () {
                console.log(this.$verify.check());
            }
        } 
    }
</script>
<style>

</style>
