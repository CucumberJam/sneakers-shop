<script setup>
import {ref, watch} from "vue";
import FilterComponent from "@/components/UI/FilterComponent.vue";
import SearchComponent from "@/components/UI/SearchComponent.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";

defineProps({
  isSearching: Boolean
})
const filterObj =ref({});

const filterSizes = ref({
  title: 'Size:',
  options: [35,36,37,38,39,40,41,42]
});
const filterSex = ref({
  title: 'Sex:',
  options: ['F', 'M']
});
const filterBrand = ref({
  title: 'Brand:',
  options: ['Fendi', 'Nike', 'Adidas']
});
const filterColors = ref({
  title: 'Colors:',
  options: ['black', 'red', 'blue', 'orange', 'red', 'green', 'yellow', 'white']
});
const sortObj = ref({
  title: 'Sort:',
  options: ['By name','By price (cheap)', 'By price (expensive)']
});

const emit = defineEmits(['sort', 'reset', 'search', 'filter']);
const sort = (value) => {
  emit('sort', value);
}
const resetFilters = () => {
  filterObj.value = {};

  emit('reset');
}

const filter = (query, type) => {
  if(!type) return;
  if(type === 'sizes') filterObj.value[type] = +query;
  else filterObj.value[type] = query;
  emit('filter', filterObj.value);
}


</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center mr-10 mb-8">
      <h2 class="text-3xl font-bold">All sneakers: </h2>
      <div class="flex gap-4">
        <FilterComponent :title="filterColors.title"
                         :options="filterColors.options"
                         type="colors"
                         @change="filter"/>

        <FilterComponent :title="filterBrand.title"
                         :options="filterBrand.options"
                         type="brand"
                         @change="filter"/>

        <FilterComponent :title="filterSex.title"
                         :options="filterSex.options"
                         type="sex"
                         @change="filter"/>

        <FilterComponent :title="filterSizes.title"
                         :options="filterSizes.options"
                         type="sizes"
                         @change="filter"/>

        <FilterComponent :title="sortObj.title"
                         :options="sortObj.options"
                         @change="sort"/>

      </div>
    </div>
    <div class="flex justify-between items-center mr-10 mb-8">
      <div></div>
      <div class="flex items-center gap-5">
        <SearchComponent :is-searching="isSearching"
                         @search="filter"/>
        <ButtonComponent class="w-30" name="Reset filters" @click="resetFilters"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>