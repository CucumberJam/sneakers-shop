<script setup>

const props = defineProps({
  title: String,
  options: Array,
  type: {
    type: String,
    required: false
  }
})
let value = props.title;
</script>

<template>
  <div class="flex items-center gap-3 text-slate-500">
    <select id="size" v-model="value" class="py-2 px-3 border rounded-md outline-0
        focus:border-gray-400"
            @change.passive="$emit('change', value, type)">
      <option disabled>{{ title }}</option>
      <option v-for="elem in options" :key="elem">{{elem}}</option>
    </select>
  </div>
</template>

<style scoped>

</style>