<template>
  <div class="signup">
    <div class="signup__back">
      <a class="signup__back-link" href="#">
        <BackIcon />
        <span> Back </span>
      </a>
    </div>
    <div class="signup__container">
      <div class="signup__header">
        <h2 class="signup__subtitle">Start from free</h2>
        <h1 class="signup__title">Create an account</h1>
      </div>
      <transition>
        <div class="error_message" v-show="showRequired">
          <AlertIcon />
          <span class="error_message-text">
            Please complete all the required fields to proceed.
          </span>
        </div>
      </transition>

      <div class="signup__social">
        <SocialIconButton type="google" />
        <SocialIconButton type="facebook" />
      </div>
      <div class="signup__divider">
        <span> Or use your email for registration </span>
        <span> </span>
      </div>
      <form class="signup__form" @submit.prevent="createAccount">
        <div class="signup__input-group">
          <section>
            <div>
              <input type="text" v-model="signupForm.firstName" required />
              <label>First Name</label>
            </div>
            <div>
              <input type="text" v-model="signupForm.lastName" required />
              <label>Last Name</label>
            </div>
          </section>
          <section>
            <div>
              <input type="text" v-model="signupForm.email" required />
              <label>E-mail</label>
            </div>
          </section>
          <section>
            <div class="signup__password-container">
              <input class="signup__input signup__input--password" ref="password"
                :type="showPassword ? 'text' : 'password'" v-model="signupForm.password" required />
              <span class="signup__password-toggle" @click="togglePasswordVisibility">
                <ViewIcon :style="getViewIconStyle" />
              </span>
              <label>Password</label>
            </div>
          </section>
          <div class="validate__password-container">
            <ValidateMessage type="length" :isValid="getValidation('length')" />
            <ValidateMessage type="hasNumber" :isValid="getValidation('hasNumber')" />
          </div>
        </div>
        <CustomCheckbox v-model="agreed"
          label="By creating an account, you agree to accept our Privacy Policy, Terms of Service and Notification settings." />
        <button class="signup__submit-button" type="submit" @click="validateRequired" formnovalidate>
          Create an Free Account!
        </button>
      </form>
      <div class="signup__login-link">
        Already have an account? <a href="#"><strong>Log in</strong></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomCheckbox from '@/components/checkboxes/CustomCheckbox.vue'
import ValidateMessage from '@/components/messages/ValidateMessage.vue'
import SocialIconButton from '@/components/buttons/SocialIconButton.vue'
import BackIcon from '@/components/icons/IconBack.vue'
import ViewIcon from '@/components/icons/IconView.vue'
import AlertIcon from '@/components/icons/IconAlert.vue'

const agreed = ref(false)
const showPassword = ref(false)
const isValidPasswordLength = ref(false)
const showRequired = ref(false)
const isValidPasswordHasNumber = ref(false)
const signupForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})

const createAccount = () => {
  // Handle account creation
}

const getViewIconStyle = computed(() => {
  return {
    color: showPassword.value ? '#3c71ff' : '#ababab',
  };
});

const getValidation = (validationType) => {
  const validations = {
    length: isValidPasswordLength.value,
    hasNumber: isValidPasswordHasNumber.value
  };
  const isValid = validations[validationType];

  return isValid
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
  const passwordField = document.querySelector('.signup__input--password')
  passwordField.type = showPassword.value ? 'text' : 'password'
}

const validatePasswordLength = () => {
  isValidPasswordLength.value = signupForm.password.length >= 8
}

const validatePasswordIncludeNumber = () => {
  const numberPattern = /\d/
  isValidPasswordHasNumber.value = numberPattern.test(signupForm.password)
}

const validateRequired = () => {
  const { firstName, lastName, email, password } = signupForm
  if (!agreed.value) {
    return showRequired.value = true
  }
  showRequired.value = ![firstName, lastName, email, password].every(
    (field) => field.trim() !== ''
  )
  console.log('validateRequired')
  return showRequired.value
}

watch(
  () => signupForm.password,
  () => {
    validatePasswordLength()
    validatePasswordIncludeNumber()
  }
)
</script>

<style scoped>
.signup {
  border-radius: var(--border-radius-medium);
  box-shadow: 0px 5px 10px 5px #dee7ff40;
  padding: var(--spacing-large) 0;
  height: 100%;
  width: 100%;
  max-width: 610px;
  background-color: var(--vt-c-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: var(--spacing-xlarge);
}

.signup__container {
  max-width: 410px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: var(--spacing-medium);
}

.signup__back {
  width: 95%;
  margin: 0 auto;
  padding: 0 var(--spacing-medium);
}

.signup__back-link {
  max-width: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  gap: 0 var(--spacing-small);
  color: var(--vt-c-black);
  text-decoration: none;
  font-size: var(--font-size-medium);
  line-height: var(--line-height-medium);
}
.signup__login-link strong::after,
.signup__back-link::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 2px;
  width: 0%;
  background: var(--primary-color);
  transition: all 0.3s ease;
}
.signup__login-link strong:hover::after,
.signup__back-link:hover::after {
  width: 100%;
}

.signup__title {
  font-size: var(--font-size-xlarge);
  line-height: var(--line-height-xlarge);
  font-weight: 700;
}

.signup__subtitle {
  font-size: var(--font-size-large);
  line-height: var(--line-height-large);
}

.signup__social {
  display: flex;
  justify-content: space-between;
  column-gap: var(--spacing-large);
}

.signup__divider {
  display: flex;
  align-items: center;
  column-gap: var(--spacing-small);
  font-size: var(--font-size-medium);
  line-height: var(--line-height-medium);
}

.signup__divider>span:nth-child(2) {
  height: 1px;
  flex-grow: 1;
  border: 1px solid var(--vt-c-black);
}

.signup__form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: var(--spacing-medium);
}

.signup__input-group {
  display: flex;
  flex-direction: column;
  row-gap: var(--spacing-medium);
}

.signup__input-group>section>div {
  position: relative;
  display: flex;
  width: 100%;
  column-gap: var(--spacing-large);
}

.signup__input-group>section {
  gap: var(--spacing-large);
  display: flex;
  width: 100%;
}

.signup__input-group>section:first-child>div>input {
  width: 100%;
}

.signup__input-group>section>div>label {
  padding: var(--spacing-medium);
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  pointer-events: none;
  color: var(--text-secondary-color);
  font-size: var(--font-size-medium);
  line-height: var(--line-height-medium);
}

.signup__input-group>section>div>input {
  flex: 1;
  padding: var(--spacing-medium);
  border-radius: var(--border-radius-medium);
  border: 0;
  background-color: var(--background-secondary-color);
}

.signup__input-group>section>div>input:focus {
  outline: 0;
}

.signup__input-group>section>div>input:focus~label,
.signup__input-group>section>div>input:valid~label {
  font-size: 0.75em;
  color: #999;
  top: -12px;
  -webkit-transition: all 0.225s ease;
  transition: all 0.225s ease;
}

.signup__password-container {
  position: relative;
}

.validate__password-container {
  display: flex;
  align-items: center;
  column-gap: var(--spacing-medium);
}

.signup__password-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.signup__submit-button {
  padding: var(--spacing-medium) 0;
  background-color: var(--primary-color);
  color: var(--vt-c-white);
  border: none;
  border-radius: var(--border-radius-medium);
  cursor: pointer;
}

.signup__login-link {
  color: var(--text-secondary-color);
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
  text-align: center;
}

.signup__login-link a {
  color: var(--primary-color);
  line-height: var(--line-height-small);
  font-weight: 700;
  width: fit-content;
  text-decoration: none;
  position: relative;
}

.error_message {
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-small);
  border-radius: var(--border-radius-medium);
  border: 1px solid var(--accent-primary-color);
  background: var(--accent-secondary-color);
  column-gap: var(--spacing-small);
  letter-spacing: 0.05em;
}

.error_message-text {
  font-size: var(--font-size-base);
  line-height: var(--line-heigh-base);
  font-weight: 400;
}

/* 手機版樣式 */
@media only screen and (max-width: 600px) {
  .signup {
    box-shadow: none;
    border-radius: 0;
    height: 100vh;
    justify-content: flex-start;
  }

  .signup__back,
  .signup__container {
    width: 100%;
    padding: 0 var(--spacing-small);
  }
}
</style>
