import Login from "./views/Login.vue";
import Main from "./views/Main.vue"

const routes = [
    {
        path: "/",
        redirect: {
            name: "login"
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/main",
        name: "main",
        component: Main
    }
];
export default routes;