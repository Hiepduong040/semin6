<template>
  <div class="login-container">
    <!-- Left section: Login Form -->
    <div class="form-section">
      <img class="bg-image" src="../../images/bg_register.png" alt="" />
      <div class="form-content">
        <img class="logo" src="../../images/logo.png" alt="Logo" />
        <h2>Đăng nhập</h2>
        <p>Cùng phát triển con đường sự nghiệp với Rikkei Jobs</p>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="you@company.com" />
        </div>
        <div class="input-group">
          <label for="password">Mật khẩu</label>
          <input type="password" id="password" placeholder="**********" />
        </div>
        <div class="options">
          <div class="remember-me">
            <input type="checkbox" id="remember" />
            <label for="remember">Ghi nhớ đăng nhập</label>
          </div>
          <a href="#" class="forgot-password">Quên mật khẩu?</a>
        </div>

        <button class="login-button">Đăng nhập</button>
        <p class="register-link">
          Bạn chưa có tài khoản? <router-link to="./registerUser" >Đăng ký</router-link>
        </p>
      </div>
    </div>
    <!-- Right section: Image -->
    <div class="image-section">
      <img
        class="login-image"
        src="../../images/loginImage.png"
        alt="Login Image"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* General layout */
.login-container {
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
  margin-left: 100px;
}

.bg-image {
  position: absolute;
  top: -138px;
  left: -30px;
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

label {
  font-size: 14px;
  color: #333;
  display: block;
  margin-bottom: 4px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
}

/* Options section */
/* Options section */
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.remember-me {
  display: flex;
  align-items: center;
}

.remember-me input[type="checkbox"] {
  margin-right: 5px; /* Space between checkbox and label */
}

.forgot-password {
  font-size: 14px;
  color: #d32f2f;
  text-decoration: none;
}


.login-button {
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

.login-button:hover {
  background-color: #b71c1c;
}

.register-link {
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}

.register-link a {
  color: #d32f2f;
  text-decoration: none;
}

/* Right image section */
.image-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
}

.login-image {
  object-fit: cover;
  width: 704px;
  height: 960px;
  gap: 0px;
  opacity: 0px;
  background: linear-gradient(
    0deg,
    rgba(25, 16, 58, 0.24) -56.78%,
    rgba(25, 16, 58, 0.2) 157.76%
  );
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-section {
    margin-left: 0; /* Remove the offset on smaller screens */
    padding: 20px;
  }

  .form-content {
    max-width: 100%;
  }

  .image-section {
    display: none; /* Hide the image section on small screens */
  }
}
</style>
