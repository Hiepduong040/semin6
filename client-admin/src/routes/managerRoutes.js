import ManagerLayout from "@/layouts/manager/ManagerLayout.vue";
import BookingInterview from "@/views/enterprise/BookingInterview.vue";
import DashboardEnterprise from "@/views/enterprise/Dashboard/DashboardEnterprise.vue";
import JobsEnterprise from "@/views/enterprise/JobsEnterprise.vue";
import ProfileEnterprise from "@/views/enterprise/ProfileEnterprise.vue";
import ProfileManager from "@/views/manager/ProfileManager.vue";

const managerRouters = [
  {
    path: "/user",
    redirect: "user/profile",
    component: ManagerLayout,
    // children: [
    //   {
    //     path: "account",
    //     component: ManagerLayout,
    //     name: "account",
    //     // redirect: "user/profile/",
    children: [
      // {
      //   path: "profile",
      //   component: ProfileManager,
      //   name: "profile",
      // },
      // {
      //   path: "enterprises",
      //   component: DashboardEnterprise,
      //   name: "enterprises",
      // },//nam
      // {
      //   path: "interviews",
      //   component: BookingInterview,
      //   name: "interviews",
      // },
      // {
      //   path: "basic-info",
      //   component: ProfileEnterprise,
      //   name: "basic-info",
      // },
      // {
      //   path: "jobs",
      //   component: JobsEnterprise,
      //   name: "jobs",
      // },
      
      {
        path: "/profile",
        component: Slider,
        children: [
          { path: "", component: Profile },
          { path: "manage", component: ManageCV },
          { path: "certify", component: Certify },
          { path: "interview", component: InterviewSchedule },
          { path: "password", component: ChangePassword },
        ],
      },
      // ],
      // },
    ],
  },
];

export default managerRouters;
