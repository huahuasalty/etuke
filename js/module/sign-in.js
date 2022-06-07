const vue = new Vue({
    el: "#sign-in-root",
    data: {
        loginForm: {
            phone: "",
            password: "",
            code: "",
        },
        codeImg: ""
    },
    methods: {
        login() {
            window.location.href = "./governance-information-platform.html"
        }
    }
})