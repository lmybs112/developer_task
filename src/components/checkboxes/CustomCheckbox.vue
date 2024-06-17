<template>
  <label class="custom-checkbox">
    <div>
      <input
        type="checkbox"
        class="custom-checkbox__input"
        v-model="checked"
        @change="handleChange"
      />
      <span class="custom-checkbox__checkmark"></span>
    </div>
    <span class="custom-checkbox__label">{{ label }}</span>
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const checked = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    checked.value = newValue
  }
)

const handleChange = () => {
  emit('update:modelValue', checked.value)
}
</script>

<style scoped>
.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  gap: var(--spacing-small);
}

input[type='checkbox'] {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

input[type='checkbox']:not(:checked) + .custom-checkbox__checkmark {
  position: relative;
  display: inline-block;
  background-color: var(--checkbox-primary-color);
  border: 1px solid var(--checkbox-primary-color);
}

input[type='checkbox']:checked + .custom-checkbox__checkmark {
  transition: background-color 100ms ease-out;
  position: relative;
  display: inline-block;
  background-color: var(--vt-c-white);
  border: 1px solid var(--primary-color);
  background: url('@/assets/icons/check.svg') center/12px no-repeat;
}
.custom-checkbox__checkmark {
  width: 18px;
  height: 18px;
  border-radius: var(--border-radius-small);
}

.custom-checkbox__label {
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
  color: var(--text-secondary-color);
  text-align: left;
}
</style>
