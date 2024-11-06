<template>
  <div class="sidebar" v-if="currentUser">
    <div class="user-info">
      <img :src="currentUser.avatar" alt="User avatar" class="user-avatar" />
      <div>
        <div class="user-name">{{ currentUser.userName }}</div>
        <div class="user-text">{{ currentUser.email }}</div>
      </div>
    </div>

    <nav class="nav-menu">
      <div class="nav-item active">
        <div class="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
            ></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        </div>
        <span>Thông tin cá nhân</span>
      </div>
      <div class="nav-item">
        <div class="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            ></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <span>Quản lý CV</span>
      </div>

      <div class="nav-item">
        <div class="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        <span>Lịch phỏng vấn</span>
      </div>
      <div class="nav-item">
        <div class="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <span>Đổi mật khẩu</span>
      </div>
    </nav>
  </div>
  <p v-else>Đang tải thông tin người dùng...</p>
</template>
  
  <script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const userId = JSON.parse(localStorage.getItem("UserLogin")).id;
const currentUser = computed(() => store.state.user.currentUser);
const navLinks = ref([
  { name: "Thông tin cá nhân", path: "profile" },
  {
    name: "Quản lý CV",
    path: "/manage",
  },
  { name: "Lịch phỏng vấn", path: "/interview" },
  { name: "Đổi mật khẩu", path: "/password" },
]);

onMounted(() => {
  store.dispatch("fetchUserById", userId);
});
</script>

<style scoped>
.sidebar {
  width: 280px;
  background: white;
  padding: 24px;
  border-right: 1px solid #eee;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.user-name {
  font-size: 15px;
}
.user-text {
  font-size: 14px;
  color: #666;
}

.nav-menu .nav-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin: 4px 0;
  border-radius: 8px;
  cursor: pointer;
  gap: 12px;
  color: #374151;
}

.nav-item.active {
  background-color: #fef2f2;
  color: #dc2626;
}

.nav-item span {
  font-size: 14px;
}

.icon-wrapper svg {
  width: 20px;
  height: 20px;
}
</style>