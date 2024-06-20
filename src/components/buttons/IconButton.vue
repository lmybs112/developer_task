<template>
  <button :class="buttonClass">
    <component :is="iconComponent" />
    <span> {{ buttonText }} </span>
  </button>
</template>
<script setup>
import FacebookIcon from '@/components/icons/IconFacebook.vue'
import GoogleIcon from '@/components/icons/IconGoogle.vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['google', 'facebook'].includes(value)
  }
})

const iconComponents = {
  google: GoogleIcon,
  facebook: FacebookIcon
};

const buttonTexts = {
  google: 'Sign up with Google',
  facebook: 'Sign up with Facebook'
};

const buttonClasses = {
  google: 'signup__social-button signup__social-button--google',
  facebook: 'signup__social-button signup__social-button--facebook'
};

const iconComponent = iconComponents[props.type];
const buttonText = buttonTexts[props.type];
const buttonClass = buttonClasses[props.type];
</script>


<style scoped>
.signup__social-button {
  flex: 1;
  padding: var(--spacing-medium) 0;
  display: flex;
  justify-content: center;
  column-gap: var(--spacing-small);
  border-radius: var(--border-radius-medium);
  border: 1px solid var(--primary-color);
  cursor: pointer;
  background-color: var(--vt-c-white);
}
</style>