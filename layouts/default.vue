<template>
  <div 
    class="flex min-h-screen bg-purple-50"
  >
    <!-- Sidebar Utama -->
    <div class="sidebar bg-white border-e-2 border-gray-100 p-3">
      <div class="mt-2 mb-5">
        <div class="h-[50px] p-2 bg-blue-300 rounded-md"></div>
      </div>
      <div class="flex flex-col">
        <div 
          v-for="(item, index) in itemSidebar" 
          :key="index" 
          :class="itemSelected === index ? 'text-white bg-blue-500' : 'text-blue-500'"
          class="p-2 my-2 rounded-md cursor-pointer"
        >
          <Icon :name="item.icon" size="24" class="align-middle"  @click="openSlide(index, subItemSelected)"/>
        </div>
      </div>
      <hr class="border-gray-200 my-3">
      <div class="flex flex-col">

        <NuxtLink class="text-blue-500 p-2 rounded-md">
          <Icon name="ic:baseline-card-travel" size="24" class="align-middle"/>
        </NuxtLink>
        <NuxtLink class="text-blue-500 p-2 rounded-md">
          <Icon name="ic:baseline-settings" size="24" class="align-middle"/>
        </NuxtLink>
      </div>
    </div>

    <!-- Side Extra dengan Flex dan Transisi Lebar -->
    <div 
      v-if="isSideOpen"
      class="bg-white border-e-2 border-gray-100 px-2 py-[100px] justify-center sideExtra"
      :style="{ width: isSideOpen ? '15rem' : '0rem' }"
    >
      <div 
        class="px-4 py-2 mx-2 bg-blue-500 rounded-lg text-white flex items-center justify-between cursor-pointer"
        @click="openSlide(itemSelected, subItemSelected)"
      >
        <h1 class="text-base font-semibold">{{ itemSidebar[itemSelected].name }}</h1>
        <Icon name="ic:baseline-keyboard-arrow-up"/>
      </div>
      <div class="text-sm px-4">
        <div
          v-for="(item, index) in itemSidebar[itemSelected].sub" 
          :key="index"
          :class="subItemSelected[1] === index && subItemSelected[0] === itemSelected ? 'font-semibold text-blue-500' : 'text-black'"
          class="my-4 p-2 rounded-md cursor-pointer"
        >
          <NuxtLink 
            @click="openSlide(itemSelected, [itemSelected, index])" 
            :to="item.path"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Konten Utama -->
    <div class="flex-1">
      <header class="h-[60px] bg-white border-b-2 border-gray-100 flex items-center px-[30px]">
        <div class="w-full flex items-center justify-between">
          <p class="text-xl font-bold">Header</p>
          <div class="flex items-center">
            <Icon name="ic:round-notifications-none" size="24" class="me-2"/>
            <div class="bg-green-200 rounded-full text-sm w-7 h-7 flex items-center justify-center mx-2">
              <p class="text-sm font-semibold">J</p>
            </div>
            <p class="text-lg font-semibold">John Doe</p>
            <div class=" bg-gray-400 rounded-full text-sm w-5 h-5 flex items-center justify-center mx-2">
              <Icon name="ic:outline-keyboard-arrow-down" size="16"/>
            </div>
          </div>
        </div>
      </header>
      <nav class="h-[50px] bg-white flex items-center px-[30px]">
        <div class="flex items-center text-sm">
          <div v-for="(item, index) in listPath" :key="index">
            <Icon 
            v-if="index % 2 !== 0" 
              class="mt-1 mx-2 text-gray-400"
              :name="item" 
              size="24" 
            />
            <p 
              v-else 
              :class="index === listPath.length - 1 ? 'text-gray-400' : 'text-blue-500'"
              class="font-semibold"
            >{{ item }}</p>
          </div>
        </div>
      </nav>
      <main>
        <div class="my-4 mx-5 p-5 bg-white rounded-xl">
          <ContentTitle :judul="subKategori"/>
          <slot/>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import itemSidebar from '~/data/listSidebar'

const isSideOpen = ref<boolean>(false)
const itemSelected = ref<number>(0)
const subItemSelected = ref<number[]>([0, 0])

const kategori = computed(() => itemSidebar[subItemSelected.value[0]].name)
const subKategori = computed(() => itemSidebar[subItemSelected.value[0]].sub[subItemSelected.value[1]].name)

const listPath = computed(() => [
  kategori.value,
  "ic:round-keyboard-arrow-right",
  subKategori.value,
])

const openSlide = (indexItem: number, indexSubItem: number[]) => {
  const isOpen = !(indexItem === itemSelected.value && isSideOpen.value)
  const isMove = indexSubItem !== subItemSelected.value

  isSideOpen.value = isOpen
  if (isMove) {
    subItemSelected.value = indexSubItem
  } else {
    itemSelected.value = !isOpen 
      ? subItemSelected.value[0] 
      : indexItem
  }
}

useSeoMeta({
  title: "Dashboard",
  description: "Dashboard bla bla bla"
})
</script>

<style scoped>
</style>
