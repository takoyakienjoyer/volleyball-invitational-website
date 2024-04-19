<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { InferType } from "yup";
import AllTournamentSchema from "~/schemas/AllTournamentSchema";

type Schema = InferType<typeof AllTournamentSchema>;
type AllTournamentState = {
  placement: string | undefined;
  number: string | undefined;
  name: string | undefined;
  school: string | undefined;
  position: string | undefined;
};

const state = reactive<AllTournamentState>({
  placement: undefined,
  number: undefined,
  name: undefined,
  school: undefined,
  position: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>): Promise<void> {
  console.log(event);
}

const columns = [
  {
    key: "number",
    label: "#",
    align: "center",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "position",
    label: "Position",
  },
  {
    key: "school",
    label: "School",
  },
];

const team = [
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
  {
    number: 1,
    name: "...",
    position: "...",
    school: "...",
  },
];

const positions = [
  [
    {
      label: "Outside Hitter",
      click: () => {
        state.position = "Outside Hitter";
      },
    },
    {
      label: "Middle Blocker",
      click: () => {
        state.position = "Middle Blocker";
      },
    },
    {
      label: "Setter",
      click: () => {
        state.position = "Setter";
      },
    },
    {
      label: "Opposite Hitter",
      click: () => {
        state.position = "Opposite Hitter";
      },
    },
    {
      label: "Libero",
      click: () => {
        state.position = "Libero";
      },
    },
  ],
];

const placements = [
  [
    {
      label: "First",
      click: () => {
        state.placement = "First";
      },
    },
    {
      label: "Second",
      click: () => {
        state.placement = "Second";
      },
    },
    {
      label: "Third",
      click: () => {
        state.placement = "Third";
      },
    },
    {
      label: "Fourth",
      click: () => {
        state.placement = "Fourth";
      },
    },
    {
      label: "Fifth",
      click: () => {
        state.placement = "Fifth";
      },
    },
    {
      label: "Sixth",
      click: () => {
        state.placement = "Sixth";
      },
    },
    {
      label: "Seventh",
      click: () => {
        state.placement = "Seventh";
      },
    },
    {
      label: "Eighth",
      click: () => {
        state.placement = "Eighth";
      },
    },
    {
      label: "Ninth",
      click: () => {
        state.placement = "Ninth";
      },
    },
    {
      label: "Tenth",
      click: () => {
        state.placement = "Tenth";
      },
    },
  ],
];

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="All Tournament" />
      <UDashboardPanelContent>
        <UCard>
          <UTable class="-mx-6 -mb-6 -mt-6" :rows="team" :columns="columns" />
        </UCard>

        <UCard class="mt-4">
          <UForm :schema="AllTournamentSchema" :state="state" @submit="onSubmit">
            <UFormGroup label="Placement" name="placement" required>
              <UDropdown :items="placements" :popper="{ placement: 'bottom-start' }">
                <UButton color="white" :label="state.placement" trailing-icon="i-heroicons-chevron-down-20-solid" />
              </UDropdown>
            </UFormGroup>
            <UFormGroup class="mt-4" label="Number" name="number" required>
              <UInput v-model="state.number" color="white" variant="outline" placeholder="Number" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Name" name="name" required>
              <UInput v-model="state.name" color="white" variant="outline" placeholder="Name" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="School" name="school" required>
              <UInput v-model="state.school" color="white" variant="outline" placeholder="School" />
            </UFormGroup>
            <UFormGroup class="mt-4" label="Position" name="position" required>
              <UDropdown :items="positions" :popper="{ placement: 'bottom-start' }">
                <UButton color="white" :label="state.position" trailing-icon="i-heroicons-chevron-down-20-solid" />
              </UDropdown>
            </UFormGroup>
            <UButton class="mt-4" type="submit" color="white" label="Set Player" />
          </UForm>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
