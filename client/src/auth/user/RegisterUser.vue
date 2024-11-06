<template>
  <div class="register-container">
    <!-- Left section: Registration Form -->
    <div class="form-section">
      <img class="bg-image" src="../../images/bg_register.png" alt="" />
      <div class="form-content">
        <form @submit.prevent="registerUser">
          <img class="logo" src="../../images/logo.png" alt="Logo" />
          <h2>Đăng ký</h2>
          <p>Cùng phát triển con đường sự nghiệp với Rikkei Jobs</p>
          <div class="input-group">
            <label for="email">Email</label>
            <div class="input-wrapper">
              <i class="icon-email">
                <CdMail />
              </i>
              <input
                type="text"
                v-model="emailRegister"
                id="email"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div class="input-group">
            <label for="password">Mật khẩu</label>
            <div class="input-wrapper">
              <i class="icon-lock">
                <AnOutlinedLock />
              </i>
              <input
                type="password"
                v-model="passwordRegister"
                id="password"
                placeholder="**********"
              />
              <i class="icon-eye"><AkEyeSlashed /></i>
            </div>
          </div>
          <div class="input-group">
            <label for="confirm-password">Xác nhận mật khẩu</label>
            <div class="input-wrapper">
              <i class="icon-lock">
                <AnOutlinedLock />
              </i>
              <input
                type="password"
                id="confirm-password"
                placeholder="**********"
                v-model="confirmPasswordRegister"
              />
              <i class="icon-eye"><AkEyeSlashed /></i>
            </div>
          </div>
          <button type="submit" class="register-button">Đăng ký</button>
        </form>
      </div>
    </div>
    <!-- Right section: Image -->
    <div class="image-section">
      <img class="register-image" src="../../images/registerImage.png" />
    </div>
  </div>
</template>

<script setup>
import { CdMail } from "@kalimahapps/vue-icons";
import { AnOutlinedLock } from "@kalimahapps/vue-icons";
import { AkEyeSlashed } from "@kalimahapps/vue-icons";
import Swal from "sweetalert2";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { computed, ref } from "vue";
const store = useStore();
const router = useRouter();
store.dispatch("fetchAllUsers");

const usersList = computed(() => store.state.user.users);
// console.log(111111,usersList);

const emailRegister = ref("");
const passwordRegister = ref("");
const confirmPasswordRegister = ref("");

const d = new Date();
const registerUser = () => {
  // kiem tra thong tin nhap vao
  if (
    !emailRegister.value ||
    !passwordRegister.value ||
    !confirmPasswordRegister.value
  ) {
    Swal.fire({
      icon: "error",
      title: "Lỗi đăng ký",
      text: "Vui lòng điền đầy đủ thông tin",
    });
    return;
  } // check email xem ton tai khong
  let checkEmail = usersList.value.find(
    (item) => item.email === emailRegister.value
  );
  if (checkEmail) {
    Swal.fire({
      icon: "error",
      title: "Lỗi Email",
      text: "Email đã tồn tại",
    });
    return;
  }
  //kiem tre nhap lai mat khau
  if(confirmPasswordRegister.value !== passwordRegister.value) {
    Swal.fire({
      icon: "error",
      title:"Lỗi mật khẩu",
      text: "Mật khẩu không trùng khớp"
    });
    return;
  }

  // hop le thi tao nguoi dung moi
  const newUser = {
    id: Math.ceil(Math.random() *1000000),
    email: emailRegister.value,
    userName: emailRegister.value,
    password: passwordRegister.value,
    createAt: d.getDay() + '/' + d.getMonth() + '/' + d.getFullYear(),
    firstName:'',
    lastName:'',
    userName:'',
    gender:'',
    status:"active",
    updateAt:'',
    avatar:'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg',
    address:'',
    emailVerified:'',
    role:'user',
    deletedAt:'',
    permissionList:['']
  };
  store.dispatch("createUser",newUser);

    emailRegister.value='';
    passwordRegister.value='';
    confirmPasswordRegister.value='';

    Swal.fire({
    icon: 'success',
    title: 'Thành công',
    text: 'Đăng ký người dùng thành công',
  })
};
</script>

<style scoped>
/* General layout */
.register-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

/* Left form section */
.form-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 40px;
  box-sizing: border-box;
  max-width: 600px;
  position: relative;
  margin-left: 100px;
}

.bg-image {
  position: absolute;
  top: -158px;
  left: -110px;
  width: 585px;
  height: 423px;
  object-fit: cover;
}

.form-content {
  width: 100%;
  max-width: 481px;
  text-align: left;
}

.logo {
  height: 32px;
  width: 132px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
}

p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

/* Input fields */
.input-group {
  margin-bottom: 15px;
}

.label {
  font-size: 14px;
  color: #333;
  display: block;
  margin-bottom: 4px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.input-wrapper input {
  width: 100%;
  padding: 10px 40px 10px 30px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: center;
}

.input-wrapper i {
  position: absolute;
  color: rgba(102, 102, 102, 0.7);
}

.icon-email {
  padding-left: 10px;
  display: flex;
  justify-content: center;
}

.icon-lock {
  padding-left: 10px;
  display: flex;
  justify-content: center;
}

.icon-eye {
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(102, 102, 102, 0.7);
}

@media (max-width: 768px) {
  .input-wrapper input {
    padding: 10px 30px 10px 30px;
  }

  .icon-eye {
    right: 8px;
  }
}
/* Register button */
.register-button {
  width: 100%;
  padding: 12px;
  background-color: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.register-button:hover {
  background-color: #b71c1c;
}

/* Right image section */
.image-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
}

.register-image {
  width: 100%; /* Makes the image responsive */
  height: 100%; /* Maintains aspect ratio */
  max-width: 704px;
  max-height: 960px; /* Limits the maximum width */
  object-fit: cover; /* Ensures the image covers the area */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .register-container {
    flex-direction: column;
  }

  .form-section {
    max-width: 100%;
    padding: 20px;
  }

  .image-section {
    display: none; /* Hide the image section on smaller screens */
  }
}
</style>
