<template>
  <div class="view-account">
    <div class="view-account-header"></div>
    <div class="view-account-background">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
      <div class="square square-1"></div>
      <div class="square square-2"></div>
      <div class="triangle"></div>
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
    </div>
    <div class="view-account-container animate__animated animate__fadeInDown">
      <div class="view-account-top">
        <div class="view-account-top-logo">
          <img src="https://gratis.naiveadmin.com/assets/account-logo-D9-eMHsk.png" alt="" />
        </div>
        <div class="view-account-top-desc">Naive Ui Admin 中后台前端/设计解决方案</div>
      </div>
      <div class="view-account-form">
        <h2 class="view-account-title">账号登录</h2>
        <div class="login-welcome">欢迎回来，请登录您的账号</div>
        <n-form
          ref="formRef"
          label-placement="left"
          size="large"
          :model="formInline"
          :rules="rules"
          class="login-form"
        >
          <n-form-item path="username" class="username-item">
            <n-input 
              v-model:value="formInline.username" 
              placeholder="请输入用户名"
              class="login-input"
            >
              <template #prefix>
                <n-icon size="18" color="#808695">
                  <PersonOutline />
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item path="password" class="password-item">
            <n-input
              v-model:value="formInline.password"
              type="password"
              showPasswordOn="click"
              placeholder="请输入密码"
              class="login-input"
            >
              <template #prefix>
                <n-icon size="18" color="#808695">
                  <LockClosedOutline />
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item class="default-color remember-forgot">
            <div class="flex-between-wrapper">
              <div class="left">
                <n-checkbox v-model:checked="autoLogin">自动登录</n-checkbox>
              </div>
              <div class="right">
                <a href="javascript:" class="forgot-link">忘记密码</a>
              </div>
            </div>
          </n-form-item>
          <n-form-item>
            <n-button 
              type="primary" 
              @click="handleSubmit" 
              size="large" 
              :loading="loading" 
              block
              class="login-button"
            >
              登录
            </n-button>
          </n-form-item>
          <n-form-item class="default-color other-item">
            <div class="flex view-account-other">
              <div class="flex-initial other-text">
                <span>其它登录方式</span>
              </div>
              <div class="social-login">
                <a href="javascript:" class="social-icon">
                  <n-icon size="24" color="#909399">
                    <LogoGithub />
                  </n-icon>
                </a>
                <a href="javascript:" class="social-icon">
                  <n-icon size="24" color="#909399">
                    <LogoFacebook />
                  </n-icon>
                </a>
                <a href="javascript:" class="social-icon">
                  <n-icon size="24" color="#909399">
                    <LogoWechat />
                  </n-icon>
                </a>
              </div>
              <div class="flex-initial" style="margin-left: auto">
                <a href="javascript:" class="register-link">注册账号</a>
              </div>
            </div>
          </n-form-item>
        </n-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { PersonOutline, LockClosedOutline, LogoGithub, LogoFacebook, LogoWechat } from '@vicons/ionicons5';
  
  // 添加页面加载动画效果
  onMounted(() => {
    // 聚焦用户名输入框
    setTimeout(() => {
      const usernameInput = document.querySelector('input[placeholder="请输入用户名"]');
      if (usernameInput) {
        (usernameInput as HTMLElement).focus();
      }
    }, 500);
  });
  interface FormState {
    username: string;
    password: string;
  }

  const formRef = ref();
  const loading = ref(false);
  const autoLogin = ref(true);

  const formInline = reactive({
    username: 'admin',
    password: '123456',
    isCaptcha: true,
  });

  const rules = {
    username: { required: true, message: '请输入用户名', trigger: 'blur' },
    password: { required: true, message: '请输入密码', trigger: 'blur' },
  };


  const router = useRouter();
  const route = useRoute();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
</script>

<style scoped>
  .view-account {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background-color: #f0f2f5;
  background: linear-gradient(140deg,#e8f1fa,#c2d9ec,#a1c3e0,#80aed3);
  position: relative;
}
.view-account::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0icmdiYSg0NSwgMTQwLCAyNDAsIDAuMSkiIC8+Cjwvc3ZnPg==');
  opacity: 0.6;
  z-index: 0;
}
.view-account::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICA8cmVjdCB4PSI1MCIgeT0iNTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNTUgNTUpIiBmaWxsPSJyZ2JhKDQ1LCAxNDAsIDI0MCwgMC4wNSkiIC8+Cjwvc3ZnPg==');
  opacity: 0.8;
  z-index: 0;
}
.view-account-container {
  padding: 32px 40px 20px;
  max-width: 580px;
  min-width: 460px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  margin-top: 10vh;
  position: relative;
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.95);
  border: 1px solid rgba(255,255,255,0.18);
  transition: all 0.3s ease;
}
.view-account-container:hover {
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  transform: translateY(-5px);
}
@keyframes float {
  .view-account-container 0% {
    transform: translateY(0px);
  }
  .view-account-container 50% {
    transform: translateY(-10px);
  }
  .view-account-container 100% {
    transform: translateY(0px);
  }
}
.view-account-title {
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
  position: relative;
}
.view-account-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: linear-gradient(to right,#2d8cf0,#0081ff);
  border-radius: 2px;
}
.view-account .login-welcome {
  text-align: center;
  font-size: 14px;
  color: #606266;
  margin-bottom: 30px;
  margin-top: 20px;
}
.view-account-top {
  padding: 10px 0;
  text-align: center;
}
.view-account-top-logo {
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
}
.view-account-top-logo img {
  height: 60px;
}
.view-account-top-desc {
  font-size: 14px;
  color: #606266;
}
.view-account-other {
  width: 100%;
  display: flex;
  align-items: center;
}
.view-account .default-color {
  color: #515a6e;
}
.view-account .default-color .ant-checkbox-wrapper {
  color: #515a6e;
}
.view-account .login-button {
  margin-top: 10px;
  height: 42px;
  font-size: 16px;
  border-radius: 4px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}
.view-account .login-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.09);
}
.view-account .login-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255,255,255,0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1,1) translate(-50%);
  transform-origin: 50% 50%;
}
.view-account .login-button:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}
@keyframes ripple {
  .view-account .login-button 0% {
    transform: scale(0,0);
    opacity: 0.5;
  }
  .view-account .login-button 20% {
    transform: scale(25,25);
    opacity: 0.3;
  }
  .view-account .login-button 100% {
    opacity: 0;
    transform: scale(40,40);
  }
}
.view-account .remember-forgot {
  margin-bottom: 5px;
}
.view-account .remember-forgot .flex-between-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.view-account .remember-forgot .right {
  text-align: right;
}
.view-account .forgot-link {
  color: #606266;
  transition: all 0.2s;
}
.view-account .forgot-link:hover {
  color: #2d8cf0;
}
.view-account .social-login {
  display: flex;
  margin-left: 16px;
}
.view-account .social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
  transition: all 0.3s;
  background-color: rgba(144,147,153,0.1);
}
.view-account .social-icon:hover {
  background-color: rgba(45,140,240,0.2);
  transform: scale(1.1);
}
.view-account .social-icon:hover :deep(svg) {
  color: #2d8cf0 !important;
}
.view-account .register-link {
  color: #2d8cf0;
  transition: all 0.3s;
}
.view-account .register-link:hover {
  color: #57a3f3;
  text-decoration: underline;
}
.view-account .login-form {
  padding: 0;
}
.view-account .login-form :deep(.n-form-item-feedback-wrapper) {
  min-height: 18px;
}
.view-account .login-form :deep(.n-input) {
  border-radius: 4px;
}
.view-account .login-input :deep(.n-input__input-el) {
  padding-left: 5px;
}
.view-account .login-input :deep(.n-input-wrapper) {
  transition: all 0.3s ease;
}
.view-account .login-input:hover :deep(.n-input-wrapper) {
  box-shadow: 0 0 0 1px rgba(45,140,240,0.2);
}
.view-account .username-item,
.view-account .password-item {
  margin-bottom: 24px;
}
.view-account .other-text {
  padding-left: 5px;
}
.view-account .other-item {
  margin-bottom: 0;
}
@media (min-width: 768px) {
  .view-account {
    background-image: url('../../assets/images/login.svg'), radial-gradient(circle at 10% 20%,rgba(100,149,237,0.25) 0%,rgba(65,105,225,0.2) 40%,rgba(30,144,255,0.1) 90%);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    position: relative;
  }
  .view-account::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg,rgba(45,140,240,0.1),rgba(45,140,240,0.05));
    backdrop-filter: blur(10px);
    z-index: 0;
  }
  .view-account::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEuNSIgZmlsbD0icmdiYSg0NSwgMTQwLCAyNDAsIDAuMikiIC8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiIC8+Cjwvc3ZnPg==');
    opacity: 0.3;
    z-index: 0;
    pointer-events: none;
  }
  .view-account-container {
    margin-top: 15vh;
    z-index: 1;
    position: relative;
  }
}
@media (max-height: 650px) {
  .view-account-container {
    margin-top: 5vh;
  }
}
.view-account-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}
.view-account-background .line {
  position: absolute;
  background: linear-gradient(90deg,rgba(45,140,240,0.2),rgba(0,129,255,0.1));
}
.view-account-background .line-1 {
  width: 300px;
  height: 2px;
  top: 15%;
  right: 5%;
  transform: rotate(-30deg);
  animation: pulse 8s ease-in-out infinite;
}
.view-account-background .line-2 {
  width: 200px;
  height: 2px;
  bottom: 20%;
  left: 10%;
  transform: rotate(45deg);
  animation: pulse 6s ease-in-out infinite 1s;
}
.view-account-background .line-3 {
  width: 150px;
  height: 2px;
  top: 40%;
  left: 5%;
  transform: rotate(-15deg);
  animation: pulse 7s ease-in-out infinite 2s;
}
.view-account-background .square {
  position: absolute;
}
.view-account-background .square-1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 15%;
  background: linear-gradient(45deg,rgba(45,140,240,0.15),rgba(0,129,255,0.05));
  transform: rotate(30deg);
  animation: rotate 15s linear infinite;
}
.view-account-background .square-2 {
  width: 60px;
  height: 60px;
  bottom: 15%;
  right: 10%;
  border: 2px solid rgba(45,140,240,0.1);
  background: transparent;
  animation: rotate 12s linear infinite reverse;
}
.view-account-background .triangle {
  position: absolute;
  bottom: 30%;
  right: 20%;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 80px solid rgba(45,140,240,0.08);
  animation: float 10s ease-in-out infinite;
}
@keyframes pulse {
  .view-account-background 0% {
    opacity: 0.3;
  }
  .view-account-background 50% {
    opacity: 0.6;
  }
  .view-account-background 100% {
    opacity: 0.3;
  }
}
@keyframes rotate {
  .view-account-background 0% {
    transform: rotate(0deg);
  }
  .view-account-background 100% {
    transform: rotate(360deg);
  }
}
.view-account-background .wave {
  position: absolute;
  opacity: 0.3;
  transform-origin: bottom left;
}
.view-account-background .wave-1 {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0icmdiYSg0NSwgMTQwLCAyNDAsIDAuMikiIGQ9Ik0wLDMyMEMwLDI0MCA0MCwxNjAgODAsMTYwQzEyMCwxNjAgMTYwLDI0MCAyMDAsMjQwQzI0MCwyNDAgMjgwLDE2MCAzMjAsMTYwQzM2MCwxNjAgNDAwLDI0MCA0NDAsMjQwQzQ4MCwyNDAgNTIwLDE2MCA1NjAsMTYwQzYwMCwxNjAgNjQwLDI0MCA2ODAsMjQwQzcyMCwyNDAgNzYwLDE2MCA4MDAsMTYwQzg0MCwxNjAgODgwLDI0MCA5MjAsMjQwQzk2MCwyNDAgMTAwMCwxNjAgMTA0MCwxNjBDMTA4MCwxNjAgMTEyMCwyNDAgMTE2MCwyNDBDMTIwMCwyNDAgMTI0MCwxNjAgMTI4MCwxNjBDMTMyMCwxNjAgMTM2MCwyNDAgMTQwMCwyNDBDMTQ0MCwyNDAgMTQ0MCwxNjAgMTQ0MCwxNjBMMTQ0MCwzMjBMMCwzMjBaIj48L3BhdGg+PC9zdmc+');
  background-size: 100% 120px;
  animation: wave-left-to-right 15s ease-in-out infinite;
  transform: rotate(-2deg);
}
.view-account-background .wave-2 {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0icmdiYSg0NSwgMTQwLCAyNDAsIDAuMTUpIiBkPSJNMCwzMjBDMCwyNDAgNjAsMTgwIDEyMCwxODBDMTgwLDE4MCAyNDAsMjQwIDMwMCwyNDBDMzYwLDI0MCA0MjAsMTgwIDQ4MCwxODBDNTQwLDE4MCA2MDAsMjQwIDY2MCwyNDBDNzIwLDI0MCA3ODAsMTgwIDg0MCwxODBDOTAwLDE4MCA5NjAsMjQwIDEwMjAsMjQwQzEwODAsMjQwIDExNDAsMTgwIDEyMDAsMTgwQzEyNjAsMTgwIDEzMjAsMjQwIDEzODAsMjQwQzE0NDAsMjQwIDE0NDAsMTgwIDE0NDAsMTgwTDE0NDAsMzIwTDAsMzIwWiI+PC9wYXRoPjwvc3ZnPg==');
  background-size: 100% 100px;
  animation: wave-left-to-right 18s ease-in-out infinite;
  animation-delay: -5s;
  transform: rotate(-1deg);
}
.view-account-background .wave-3 {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0icmdiYSg0NSwgMTQwLCAyNDAsIDAuMSkiIGQ9Ik0wLDMyMEMwLDI2MCAzMCwyMDAgNjAsMjAwQzkwLDIwMCAxMjAsMjYwIDE1MCwyNjBDMTgwLDI2MCAyMTAsMjAwIDI0MCwyMDBDMjcwLDIwMCAzMDAsMjYwIDMzMCwyNjBDMzYwLDI2MCAzOTAsMjAwIDQyMCwyMDBDNDUwLDIwMCA0ODAsMjYwIDUxMCwyNjBDNTQwLDI2MCA1NzAsMjAwIDYwMCwyMDBDNjMwLDIwMCA2NjAsMjYwIDY5MCwyNjBDNzIwLDI2MCA3NTAsMjAwIDc4MCwyMDBDODEwLDIwMCA4NDAsMjYwIDg3MCwyNjBDOTAwLDI2MCA5MzAsMjAwIDk2MCwyMDBDOTkwLDIwMCAxMDIwLDI2MCAxMDUwLDI2MEMxMDgwLDI2MCAxMTEwLDIwMCAxMTQwLDIwMEMxMTcwLDIwMCAxMjAwLDI2MCAxMjMwLDI2MEMxMjYwLDI2MCAxMjkwLDIwMCAxMzIwLDIwMEMxMzUwLDIwMCAxMzgwLDI2MCAxNDEwLDI2MEMxNDQwLDI2MCAxNDQwLDIwMCAxNDQwLDIwMEwxNDQwLDMyMEwwLDMyMFoiPjwvcGF0aD48L3N2Zz4=');
  background-size: 100% 80px;
  animation: wave-left-to-right 20s ease-in-out infinite;
  animation-delay: -2s;
}
@keyframes wave-left-to-right {
  .view-account-background 0% {
    background-position-x: 0;
    background-position-y: 100%;
  }
  .view-account-background 50% {
    background-position-x: 720px;
    background-position-y: 50%;
  }
  .view-account-background 100% {
    background-position-x: 1440px;
    background-position-y: 0%;
  }
}
@keyframes float {
  .view-account-background 0% {
    transform: translateY(0);
  }
  .view-account-background 50% {
    transform: translateY(-15px);
  }
  .view-account-background 100% {
    transform: translateY(0);
  }
}

</style>