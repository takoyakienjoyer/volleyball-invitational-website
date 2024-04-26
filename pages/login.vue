<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { InferType } from "yup";
import LoginSchema from "~/schemas/LoginSchema";

type Schema = InferType<typeof LoginSchema>;
type LoginState = {
  email: string | undefined;
  password: string | undefined;
};

const state = reactive<LoginState>({
  email: undefined,
  password: undefined,
});

const mounted = ref<boolean>(false);

onMounted(() => {
  mounted.value = true;
});

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>): Promise<void> {
  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body: {
        email: state.email,
        password: state.password,
      },
    });

    toast.add({ title: "Success", description: "Login successful. Redirecting...", icon: "i-heroicons-check-circle", color: "green" });

    navigateTo("/dashboard");
  } catch (error: any) {
    switch (error.status) {
      case 422:
        toast.add({ title: "Error", description: "Incorrect email or password.", icon: "i-heroicons-x-circle", color: "red" });
        break;

      default:
        toast.add({ title: "Error", description: "Something went wrong. Please try again later.", icon: "i-heroicons-x-circle", color: "red" });
        break;
    }
  }
}
</script>

<template>
  <UMain class="flex items-center justify-center">
    <ULandingCard class="mx-auto -mt-10 w-full max-w-sm">
      <template #title>
        <ClientOnly>
          <div class="text-center text-lg font-normal">Login</div>
        </ClientOnly>
      </template>
      <div class="h-3" v-if="!mounted" />

      <UDivider icon="i-heroicons-user" />
      <UForm class="space-y-4" :schema="LoginSchema" :state="state" @submit="onSubmit">
        <UFormGroup label="Email" required name="email" size="lg">
          <UInput v-model="state.email" size="lg" type="email" placeholder="Email" icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="Password" required name="password" size="lg">
          <UInput v-model="state.password" size="lg" type="password" placeholder="Password" icon="i-heroicons-lock-closed" />
        </UFormGroup>

        <div class="w-full text-center">
          <UButton type="submit" size="lg">Sign In</UButton>
        </div>
      </UForm>
    </ULandingCard>
  </UMain>
</template>
