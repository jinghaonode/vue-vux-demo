import axios from 'axios'
var PROD_URL = process.env.BASE_URL;//process.env.BASE_URL在webpack中配置。dev.env.js为测试环境，prod.env.js为发布环境
axios.defaults.baseURL = PROD_URL // 配置 apiURL
axios.defaults.timeout = 50000; // 超时
// http request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor

axios.interceptors.response.use(function (response) {
    // 通过状态码来识别服务器提示信息
    switch (response.status) {
        case 200:
            break;
    }
    let code = response.data.code
    if (code == 401) {
        window.goLogin()
    }
    if (code == 402) {
        window.location.replace(window.location.origin)
    }
    return response;
}, function (error) {
    // 非状态码错误  在此通过正则处理
    console.log('捕获到一个错误，错误信息：' + error)
    if (/Network Error/i.test(error)) {
        alert('您当前无法上网，请检查你的移动数据开关或wifi是否正常')
    }
    if (/ms exceeded/i.test(error)) {
        alert('您的网络连接不稳定，请检查你的移动数据开关或wifi是否正常')
        $(".weui_loading_toast").hide()
    }
    if (/code 500/i.test(error)) {
        alert('网络异常，请稍后重试')
    }
    return Promise.reject(error);
});
export default axios;

