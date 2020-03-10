import Vue from "vue"
import Router from "vue-router"
import Cadastro from "@/views/Cadastro.vue"
import Home from "@/views/Home"


Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/cad",
            name: "cadastro",
            component: Cadastro
        },
        {
            path: "/",
            name: "Home",
            component: Home
        }
    ]
})

