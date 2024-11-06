import ChangePassword from "@/view/user/ChangePassword.vue";
import InterviewSchedule from "@/view/user/InterviewSchedule.vue";
import ManageCV from "@/view/user/ManageCV.vue";
import Profile from "@/view/user/Profile.vue";
import LoginUser from "@/auth/user/LoginUser.vue";
import RegisterUser from "@/auth/user/RegisterUser.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/loginUser', component: LoginUser},
  { path: '/registerUser', component: RegisterUser},
  { path: "/profile", component: Profile },
  { path: "/manage", component: ManageCV },
  { path: "/interview", component: InterviewSchedule },
  { path: "/password", component: ChangePassword },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
