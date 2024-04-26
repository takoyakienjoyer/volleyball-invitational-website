<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { InferType } from "yup";
import HomeLinksSchema from "~/schemas/HomeLinksSchema";

type Schema = InferType<typeof HomeLinksSchema>;
type HomeLinksSchema = {
  scheduleAndResultsLink: string | undefined;
  scheduleLink: string | undefined;
  poolPlayLink: string | undefined;
  bracketPlayLink: string | undefined;
  spectatorTicketsLink: string | undefined;
};

const state = reactive<HomeLinksSchema>({
  scheduleAndResultsLink: undefined,
  scheduleLink: undefined,
  poolPlayLink: undefined,
  bracketPlayLink: undefined,
  spectatorTicketsLink: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>): Promise<void> {
  console.log(event);
}

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Home Links" />
      <UDashboardPanelContent>
        <UCard>
          <UForm :schema="HomeLinksSchema" :state="state" @submit="onSubmit">
            <UFormGroup label="Schedule and Results Link" name="scheduleAndResultsLink" required>
              <UInput v-model="state.scheduleAndResultsLink" placeholder="Schedule and Results Link" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Schedule Link" name="scheduleLink" required>
              <UInput v-model="state.scheduleLink" placeholder="Schedule Link" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Pool Play Link" name="scheduleAndResultsLink" required>
              <UInput v-model="state.poolPlayLink" placeholder="Pool Play Link" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Bracket Play Link" name="scheduleAndResultsLink" required>
              <UInput v-model="state.bracketPlayLink" placeholder="Bracket Play Link" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Spectator Tickets Link" name="spectatorTicketsLink" required>
              <UInput v-model="state.spectatorTicketsLink" placeholder="Spectator Tickets Link" />
            </UFormGroup>
            <UButton class="mt-4" color="white" type="submit">Change Links</UButton>
          </UForm>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
