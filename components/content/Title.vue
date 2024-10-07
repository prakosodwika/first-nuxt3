<template>
  <div>
    <div class="border-s-8 border-blue-500">
      <h1 class="m-2 text-2xl font-bold">{{ judul }}</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  judul: {
    type: String,
    required: true
  }
})
</script>