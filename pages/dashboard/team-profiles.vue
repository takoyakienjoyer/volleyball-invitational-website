<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { InferType } from "yup";
import TeamProfileSchema from "~/schemas/TeamProfileSchema";

type Schema = InferType<typeof TeamProfileSchema>;
type TeamProfileState = {
  name: string | undefined;
  nickname: string | undefined;
  enrollment: number | undefined;
  location: string | undefined;
  colors: string | undefined;
  conference: string | undefined;
  headCoach: string | undefined;
  stateFinalAppearances: number | undefined;
  stateChampionships: number | undefined;
  currentTournamentRecord: string | undefined;
  yearsParticipated: number | undefined;
  eastInviteRecord: string | undefined;
  bestFinish: string | undefined;
  pastAllTournament: string | undefined;
  pastMVP: string | undefined;
  logo: File | undefined;
  coachHeadshot: File | undefined;
};

const state = reactive<TeamProfileState>({
  name: undefined,
  nickname: undefined,
  enrollment: undefined,
  location: undefined,
  colors: undefined,
  conference: undefined,
  headCoach: undefined,
  stateFinalAppearances: undefined,
  stateChampionships: undefined,
  currentTournamentRecord: undefined,
  yearsParticipated: undefined,
  eastInviteRecord: undefined,
  bestFinish: undefined,
  pastAllTournament: undefined,
  pastMVP: undefined,
  logo: undefined,
  coachHeadshot: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>): Promise<void> {
  console.log(event);
}

const existingTeams = [[{ label: "Lincoln-Way East" }]];

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Team Profiles" />
      <UDashboardPanelContent>
        <UCard>
          <UForm :schema="TeamProfileSchema" :state="state" @submit="onSubmit">
            <UFormGroup label="School Name" name="name" required>
              <UInput v-model="state.name" color="white" variant="outline" placeholder="School Name" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Nickname" name="nickname" required>
              <UInput v-model="state.nickname" color="white" variant="outline" placeholder="Nickname" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="School Enrollment" name="enrollment" required>
              <UInput v-model="state.enrollment" color="white" variant="outline" placeholder="School Enrollment" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Location" name="location" required>
              <UInput v-model="state.location" color="white" variant="outline" placeholder="Location" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="School Colors" name="colors" required>
              <UInput v-model="state.colors" color="white" variant="outline" placeholder="School Colors" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Conference" name="conference" required>
              <UInput v-model="state.conference" color="white" variant="outline" placeholder="Conference" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Head Coach" name="headCoach" required>
              <UInput v-model="state.headCoach" color="white" variant="outline" placeholder="Head Coach" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="State Final Appearances (Program)" name="stateFinalAppearances" required>
              <UInput v-model="state.stateFinalAppearances" color="white" variant="outline" placeholder="State Final Appearances (Program)" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="State Championships" name="stateChampionships" required>
              <UInput v-model="state.stateChampionships" color="white" variant="outline" placeholder="State Championships" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Current Tournament Record" name="currentTournamentRecord" required>
              <UInput v-model="state.currentTournamentRecord" color="white" variant="outline" placeholder="Current Tournament Record" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Years Participated" name="yearsParticipated" required>
              <UInput v-model="state.yearsParticipated" color="white" variant="outline" placeholder="Years Participated" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="East Invite Record" name="eastInviteRecord" required>
              <UInput v-model="state.eastInviteRecord" color="white" variant="outline" placeholder="East Invite Record" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Best Finish" name="bestFinish" required>
              <UInput v-model="state.bestFinish" color="white" variant="outline" placeholder="Best Finish" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Past All Tournament" name="pastAllTournament" required>
              <UInput v-model="state.pastAllTournament" color="white" variant="outline" placeholder="Past All Tournament" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Past MVPs" name="pastMVP" required>
              <UInput v-model="state.pastMVP" color="white" variant="outline" placeholder="Past MVPs" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="School Logo" name="logo" required>
              <UInput v-model="state.logo" type="file" color="white" variant="outline" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Coach Headshot" name="coachHeadshot" required>
              <UInput v-model="state.coachHeadshot" type="file" color="white" variant="outline" />
            </UFormGroup>
            <UButton class="mt-4" type="submit" color="white" label="Save Profile" />
          </UForm>
        </UCard>

        <UCard class="mt-4">
          <UForm>
            <UFormGroup label="Team">
              <UDropdown :items="existingTeams" :popper="{ placement: 'bottom-start' }">
                <UButton color="white" trailing-icon="i-heroicons-chevron-down-20-solid" />
              </UDropdown>
            </UFormGroup>

            <div>
              <UButton class="mt-4" color="white" label="Edit Profile" />
            </div>
            <div>
              <UButton class="mt-4" color="red" label="Delete Profile" />
            </div>
          </UForm>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
