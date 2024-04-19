<script setup lang="ts">
import type { FormError } from "#ui/types";

const fields = [
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

const validate = (state: any) => {
  const errors: FormError[] = [];
  if (!state.email) errors.push({ path: "email", message: "Email is required" });
  if (!state.password) errors.push({ path: "password", message: "Password is required" });
  return errors;
};

function onSubmit(data: any) {
  console.log("Submitted", data);
}
</script>

<template>
  <div class="flex items-center justify-center">
    <ULandingCard class="mx-auto -mt-10 w-full max-w-sm">
      <UAuthForm
        :fields="fields"
        :validate="validate"
        title="Sign in to your account"
        icon="i-heroicons-lock-closed"
        :ui="{ base: 'text-center', footer: 'text-center', default: { submitButton: { label: 'Sign in' } } }"
        @submit="onSubmit"
      >
      </UAuthForm>
    </ULandingCard>
  </div>
</template>
