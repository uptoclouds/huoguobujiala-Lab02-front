<template>
  <div class="networkError min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
    <h1 class="text-4xl font-bold text-red-600 mb-4">Uh-Oh!</h1>

    <h3 class="text-lg text-gray-700 mb-6">
      It looks like you're experiencing some network issues, please take a breath and
      <a href="#" @click="$router.go(-1)" class="text-blue-500 hover:underline">click here</a> to try again.
    </h3>
  </div>
</template>
