<template>
  <div class="mx-auto max-w1200px items-center justify-center">
    <div class="flex mt-10 mb-5">
      <v-btn variant="flat" class="border rounded cursor-pointer mr-2" @click="getJobs">crawler</v-btn>
      <input class="border rounded w-200px pa-0">
    </div>
    <div class="">
      <div v-for="(data, dx) in array" :key="dx" class="border mb-2 rounded px-2">
        <div class="text-lg font-bold my-2">{{ data.title }}</div>
        <div v-for="(tag, tx) in data.tag" :key="tx">
          <div v-for="(item, ix) in tag" :key="ix" class="flex">
            <div v-for="(chip, i) in item" :key="i" class="mb-6">
              <v-chip v-if="chip != ''" class="text-sm">{{ chip }}</v-chip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const array = ref([])
const getJobs = async () => {
  await postJob()
  const response = await fetch('http://localhost:3336/jobs');
  const data = await response.json();

  array.value = data
  return data
};

const postJob = async () => {
  const response = await fetch('http://localhost:3336/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const data = await response.json();

  return data;
}
</script>
