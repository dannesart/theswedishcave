<template>
  <NuxtLayout>
    <Chunk>
      <Headline :size="1">Log in</Headline>

      <form class="flex gap-6">
        <Input
          :value="email"
          @update="email = $event"
          :label="'Email'"
          :required="true"
          :icon="'lucide:at-sign'"
        />
        <Button @click="logIn" :loading="loading">Log in</Button>
      </form>
    </Chunk>
  </NuxtLayout>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const loading = ref(false);

const logIn = async () => {
  if (!email.value) return;
  loading.value = true;
  await supabase.auth.signInWithOtp({
    email: email.value,
  });
  loading.value = false;
};
</script>
