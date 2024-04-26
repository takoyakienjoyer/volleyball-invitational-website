<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { InferType } from "yup";
import { getSessionToken } from "~/authentication/Session";
import PasswordResetSchema from "~/schemas/PasswordResetSchema";

type Schema = InferType<typeof PasswordResetSchema>;
type PasswordResetState = {
  currentPassword: string | undefined;
  newPassword: string | undefined;
  confirmPassword: string | undefined;
};

const state = reactive<PasswordResetState>({
  currentPassword: undefined,
  newPassword: undefined,
  confirmPassword: undefined,
});

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>): Promise<void> {
  try {
    await $fetch("/api/auth/password-reset", {
      method: "POST",
      body: {
        currentPassword: state.currentPassword,
        newPassword: state.newPassword,
        confirmPassword: state.confirmPassword,
      },
    });

    toast.add({ title: "Success", description: "Password changed successfully.", icon: "i-heroicons-check-circle", color: "green" });

    state.currentPassword = undefined;
    state.newPassword = undefined;
    state.confirmPassword = undefined;
  } catch (error: any) {
    switch (error.status) {
      case 422:
        toast.add({ title: "Error", description: "Incorrect current password.", icon: "i-heroicons-x-circle", color: "red" });
        break;

      default:
        toast.add({ title: "Error", description: "Something went wrong. Please try again later.", icon: "i-heroicons-x-circle", color: "red" });
        break;
    }
  }
}

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Settings" />
      <UDashboardPanelContent>
        <UCard>
          <UForm :schema="PasswordResetSchema" :state="state" @submit="onSubmit">
            <UFormGroup label="Current Password" name="currentPassword" required>
              <UInput v-model="state.currentPassword" type="password" placeholder="Password" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="New Password" name="newPassword" required>
              <UInput v-model="state.newPassword" type="password" placeholder="Password" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Confirm New Password" name="confirmPassword" required>
              <UInput v-model="state.confirmPassword" type="password" placeholder="Password" />
            </UFormGroup>
            <UButton class="mt-4" color="white" type="submit">Change Password</UButton>
          </UForm>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
