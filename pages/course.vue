<template>
  <div>
    <div class="mb-12">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold">Mastering Nuxt</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <div
          class="space-y-1 mb-4 flex flex-col"
          v-for="chapter in chapters"
          :key="chapter.slug"
        >
          <h4>{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
            :to="lesson.path"
            :class="{
              'text-blue-500': lesson.path === $route.fullPath,
              'text-gray-600': lesson.path !== $route.fullPath,
            }"
          >
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="p-12 bg-white rounded-md w-[65ch]">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <p>
              Oh on, something wrong with the lesson!
              <code>{{ error }}</code>
            </p>
            <button
              class="bg-gray-500 text-white mt-3 rounded py-2 px-5"
              @click="resetError(error)"
            >
              Reset
            </button>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { chapters } = useCourse();

async function resetError(error: any) {
  await navigateTo(
    "/course/chapter-1/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3"
  );
  error.value = null;
}
</script>
