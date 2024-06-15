<template>
  <div class="signup">
    <div class="signup__container">
      <a class="signup__back-link" href="#">← Back</a>
      <h2 class="signup__subtitle">Start from free</h2>
      <h1 class="signup__title">Create an account</h1>
      <div class="signup__social">
        <button class="signup__social-button signup__social-button--google">Sign up with Google</button>
        <button class="signup__social-button signup__social-button--facebook">Sign up with Facebook</button>
      </div>
      <div class="signup__divider">Or use your email for registration</div>
      <form class="signup__form" @submit.prevent="createAccount">
        <div class="signup__input-group">
          <input class="signup__input" type="text" placeholder="First Name" v-model="firstName" required>
          <input class="signup__input" type="text" placeholder="Last Name" v-model="lastName" required>
        </div>
        <input class="signup__input" type="email" placeholder="E-mail" v-model="email" required>
        <div class="signup__password-container">
          <input class="signup__input signup__input--password" ref="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" v-model="password" required>
          <span class="signup__password-toggle" @click="togglePasswordVisibility">👁️</span>
        </div>
        <div class="signup__agreement">
          <input type="checkbox" v-model="agreed" required>
          <span>By creating an account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.</span>
        </div>
        <button class="signup__submit-button" type="submit">Create a Free Account!</button>
      </form>
      <div class="signup__login-link">
        Already have an account? <a href="#"><strong>Log in</strong></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const agreed = ref(false);
const showPassword = ref(false);

const createAccount = () => {
  // Handle account creation
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
  const passwordField = document.querySelector('.signup__input--password');
  passwordField.type = showPassword.value ? 'text' : 'password';
};
</script>

<style scoped>

.signup__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  background-color: var(--vt-c-white);
}

.signup__back-link {
  align-self: flex-start;
  margin-bottom: 20px;
  color: #333;
  text-decoration: none;
}

.signup__title {
  margin-bottom: 10px;
}

.signup__subtitle {
  margin-bottom: 20px;
}

.signup__social {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.signup__social-button {
  flex: 1;
  margin: 0 5px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.signup__social-button--google {
  background-color: #4285f4;
  color: var(--vt-c-white);
}

.signup__social-button--facebook {
  background-color: #3b5998;
  color: var(--vt-c-white);
}

.signup__divider {
  margin: 20px 0;
  font-size: 14px;
  color: #999;
}

.signup__form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.signup__input-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.signup__input {
  flex: 1;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.signup__password-container {
  position: relative;
  margin-bottom: 20px;
}

.signup__password-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.signup__agreement {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  font-size: 12px;
  color: #333;
}

.signup__agreement input {
  margin-right: 10px;
}

.signup__submit-button {
  padding: 10px;
  background-color: #007bff;
  color: var(--vt-c-white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.signup__login-link {
  margin-top: 20px;
  font-size: 14px;
}

.signup__login-link a {
  color: #007bff;
  text-decoration: none;
}
</style>