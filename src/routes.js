import Login from "./views/Login.vue";
import Main from "./views/Main.vue";
import MessageForm from "./views/MessageForm";

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
  {
    path: "/message_form",
    name: "message_form",
    component: MessageForm,
  },
];
export default routes;
