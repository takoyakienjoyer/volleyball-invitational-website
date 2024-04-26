<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Sponsors" />
      <UDashboardPanelContent>
        <UCard>
          <div>
            <UFormGroup label="Sponsor Name" name="sponsorName" required>
              <UInput placeholder="Sponsor Name" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Sponsor Logo" name="sponsorLogo" required>
              <UInput type="file" color="white" variant="outline" />
            </UFormGroup>
            <UButton class="mt-4" color="white" type="submit">Save Sponsor</UButton>
          </div>
        </UCard>

        <UCard class="mt-4">
          <div>
            <UFormGroup label="Sponsor">
              <UDropdown :popper="{ placement: 'bottom-start' }">
                <UButton color="white" trailing-icon="i-heroicons-chevron-down-20-solid" />
              </UDropdown>
            </UFormGroup>
            <UButton class="mt-4" color="white" label="Edit Sponsor" />
            <UButton class="ml-4" color="red" label="Delete Sponsor" />
          </div>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
