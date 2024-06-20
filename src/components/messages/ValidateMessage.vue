<template>
    <div class="validate__password" :class="validationClass">
        <CheckIcon class="validate__password-icon" :style="getValidationStyle('icon')" />
        <small class="validate__password-text"  :style="getValidationStyle('text')">{{ validationText }}</small>
    </div>
</template>
<script setup>
import CheckIcon from '@/components/icons/IconCheck.vue'
const props = defineProps({
    type: {
        type: String,
        required: true,
        validator: (value) => ['length', 'hasNumber'].includes(value)
    },
    isValid: {
        type: Boolean,
        required: true,
        default: false,
    }
});

const getValidationStyle = (elementType) => {
 const colors = {
    greenLight: '#4AE7A5',
    grayLight: '#ababab',
    black: '#000'
 }
    const styles = {
        icon: {
            color: props.isValid ? colors.greenLight : colors.grayLight,
        },
        text: {
            color: props.isValid ? colors.black : colors.grayLight,
        }
    };
    return styles[elementType] || {};
};

const validationTexts = {
    length: '8 Characters min.',
    hasNumber: 'One number'
};

const validationClasses = {
    length: 'validate__password--length',
    hasNumber: 'validate__password--number'
};

const validationText = validationTexts[props.type];
const validationClass = validationClasses[props.type];

</script>

<style scoped>
.validate__password {
    display: flex;
    align-items: center;
    column-gap: 2px;
}
.validate__password-icon,
.validate__password-text{
    display: flex;
    height: var(--font-size-base);
}
</style>