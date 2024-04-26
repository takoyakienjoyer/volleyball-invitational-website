<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Dashboard" />
      <UDashboardPanelContent>
        <UCard>
          <div>
            <UFormGroup label="Current Password" name="currentPassword" required>
              <UInput type="password" placeholder="Password" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="New Password" name="newPassword" required>
              <UInput type="password" placeholder="Password" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Confirm New Password" name="confirmPassword" required>
              <UInput type="password" placeholder="Password" />
            </UFormGroup>
            <UButton class="mt-4" color="white" type="submit">Change Password</UButton>
          </div>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
