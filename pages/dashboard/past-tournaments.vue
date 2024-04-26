<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { InferType } from "yup";
import TournamentHistorySchema from "~/schemas/TournamentHistorySchema";

type Schema = InferType<typeof TournamentHistorySchema>;
type TournamentHistoryState = {
  tournamentDescription: string | undefined;
  tournamentChampions: string | undefined;
  tournamentMVPs: string | undefined;
};

const state = reactive<TournamentHistoryState>({
  tournamentDescription: undefined,
  tournamentChampions: undefined,
  tournamentMVPs: undefined,
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
      <UDashboardNavbar title="Tournament History" />
      <UDashboardPanelContent>
        <UCard>
          <UForm :schema="TournamentHistorySchema" :state="state" @submit="onSubmit">
            <UFormGroup label="Tournament Description" name="tournamentDescription" required>
              <UTextarea v-model="state.tournamentDescription" placeholder="Tournament Description" autoresize />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Tournament Champions" name="tournamentChampions" required>
              <UTextarea v-model="state.tournamentChampions" placeholder="Tournament Champions" autoresize />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Tournament MVPs" name="tournamentMVPs" required>
              <UTextarea v-model="state.tournamentMVPs" placeholder="Tournament MVPs" autoresize />
            </UFormGroup>
            <UButton class="mt-4" color="white" type="submit">Change History</UButton>
          </UForm>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
