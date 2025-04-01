<template>
  <div
    class="h-48 rounded-xl text-2xl w-full pr-4 relative flex flex-col-reverse"
    :class="{
      'bg-brand-100': notValid,
      'bg-gray-100 outline-gray-300': !notValid && variant === 'gray',
      'bg-white disabled:bg-gray-100 outline-gray-300 border-2 border-gray-100':
        !notValid && variant === 'white',
      'pl-16': !!icon,
      'pt-1': !!label,
    }"
  >
    <textarea
      :required="required"
      class="bg-transparent border-0 flex-1 w-full peer outline-none"
      @input="updateValue($event)"
      @blur="handleBlur"
      :max="max"
      :disabled="disabled || loading"
      placeholder=""
      :value="valueRef"
      :autofocus="autofocus"
      :id="id"
    ></textarea>

    <label
      v-if="label"
      :for="id"
      class="duration-300 text-gray-400 text-xl origin-[0] scale-75 translate-y-0 peer-focus:-translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-4"
      >{{ label }}
      {{ !required ? "(optional)" : "" }}
    </label>

    <Icon v-if="icon" :name="icon" size="30" class="absolute left-5 top-5" />
    <div
      v-if="disabled"
      class="absolute -right-2 -top-2 w-8 h-8 flex items-center justify-center bg-blue-950 text-white rounded-full"
    >
      <Icon :name="'lucide:lock'" size="15" />
    </div>
    <Icon
      v-if="loading"
      :name="'svg-spinners:3-dots-bounce'"
      :class="'absolute right-5 top-5'"
      :size="30"
    />
  </div>
</template>
<script setup lang="ts">
type Props = {
  required?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  label?: string;
  icon?: string;
  value?: string | number;
  autofocus?: boolean;
  id?: string;
  variant?: "white" | "gray";
  loading?: boolean;
};
const {
  required = false,
  label = "",
  disabled = false,
  autofocus = false,
  id = crypto.randomUUID(),
  min = 0,
  max = 500,
  value,
  variant = "gray",
  loading = false,
} = defineProps<Props>();
const isDirty = ref(false);
const valueRef = ref(value);

const notValid = computed(() => {
  if (!isDirty.value) return false;
  const valid = validator(valueRef.value);
  return !valid.success;
});

const emits = defineEmits(["update", "blur"]);
const updateValue = (event: Event) => {
  isDirty.value = true;
  const newValue = (event.target as { value?: string }).value;
  valueRef.value = newValue;
  emits("update", newValue);
};
const handleBlur = () => {
  emits("blur", valueRef.value);
};
</script>
