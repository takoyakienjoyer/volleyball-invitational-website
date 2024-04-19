<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { InferType } from "yup";
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

async function onSubmit(event: FormSubmitEvent<Schema>): Promise<void> {
  console.log(event);
}

definePageMeta({
  layout: "dashboard",
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
