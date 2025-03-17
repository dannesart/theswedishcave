<template>
  <NuxtLayout>
    <Chunk>
      <Headline :size="1">Log in</Headline>
      <div class="grid gap-12" v-if="!sent">
        <Text>
          Logging in will store your email. And that's it. <br />
          If you do not accept this. <br />
          Please consider not to press the button.
        </Text>
        <form class="flex gap-6 flex-none h-fit">
          <Input
            :value="email"
            @update="email = $event"
            :label="'Email'"
            :required="true"
            :icon="'lucide:at-sign'"
          />
          <Button @click.prevent="logIn" :loading="loading">Log in</Button>
        </form>
      </div>
      <template v-else>
        <Text>
          Please have a look in your mail box. <br />
          You should have recieved a "magic link" in a mail. <br />
          This link will take you to an authorized page.
        </Text>
      </template>
    </Chunk>
  </NuxtLayout>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const loading = ref(false);
const sent = ref(false);

const logIn = async () => {
  if (!email.value) return;
  loading.value = true;
  try {
    await supabase.auth.signInWithOtp({
      email: email.value,
    });
  } catch (error) {}
  sent.value = true;
  loading.value = false;
};
</script>
