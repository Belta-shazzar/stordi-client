<template>
  <div>
    <button
      type="submit"
      className="flex w-full justify-center bg-accent cursor-pointer bg-purple-primary text-white font-medium px-4 py-2 rounded hover:bg-hover hover:text-primary"
    >
      <!-- {submitting ? (
        <FaSpinner className="spinner" size={30} />
      ) : ( -->
      <slot />
      <!-- )} -->
    </button>
      <p class="text-center py-3 text-secondary font-medium">or</p>

      <button type="submit" class="flex justify-center items-center gap-5 w-full cursor-pointer bg-primary text-secondary font-medium px-4 py-2 rounded">
        <img class="w-[35px] h-[35px]" src="../icons/Google__G__Logo.svg.png" alt="" srcset="">
        <span class="align-middle">Sign in with Google</span>
      </button>
  </div>
</template>

<script setup></script>
