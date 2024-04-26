<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { InferType } from "yup";
import AllTournamentSchema from "~/schemas/AllTournamentSchema";

type Schema = InferType<typeof AllTournamentSchema>;
type AllTournamentState = {
  mvp: boolean | undefined;
  number: string | undefined;
  name: string | undefined;
  school: string | undefined;
  position: string | undefined;
};

const state = reactive<AllTournamentState>({
  mvp: false,
  number: undefined,
  name: undefined,
  school: undefined,
  position: undefined,
});

const selectedPlayer = ref<string | undefined>(undefined);

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

var team = ref(<any[]>[]);

try {
  const response = await $fetch("/api/all-tournament");
  team.value = response;
} catch (error) {
  console.error(error);
}

var existingPlayers = ref(<any[]>[]);
existingPlayers.value[0] = [];

for (let i = 0; i < team.value.length; i++) {
  existingPlayers.value[0].push({
    label: team.value[i].name,
    click: () => {
      selectedPlayer.value = team.value[i].name;
    },
  });
}

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>): Promise<void> {
  team.value.push({
    mvp: state.mvp,
    number: state.number,
    name: state.name + (state.mvp ? " (MVP)" : ""),
    school: state.school,
    position: state.position,
    class: state.mvp ? "bg-blue-500/25 dark:bg-blue-400/25" : "",
  });

  team.value.sort((a, b) => {
    if (a.mvp && !b.mvp) return -1;
    if (!a.mvp && b.mvp) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const name = state.name;
  existingPlayers.value[0].push({
    label: name,
    click: () => {
      selectedPlayer.value = name;
    },
  });

  try {
    await $fetch("/api/dashboard/all-tournament", {
      method: "POST",
      body: {
        method: "INSERT",
        player: {
          mvp: state.mvp,
          number: state.number,
          name: state.name,
          school: state.school,
          position: state.position,
        },
      },
    });
  } catch (error: any) {
    toast.add({ title: "Error", description: "Something went wrong. Please try again later.", icon: "i-heroicons-x-circle", color: "red" });
    return;
  }

  state.mvp = false;
  state.number = undefined;
  state.name = undefined;
  state.school = undefined;
  state.position = undefined;
}

async function onDeletePlayer(): Promise<void> {
  if (!selectedPlayer.value) {
    toast.add({ title: "Error", description: "Please select a player to delete.", icon: "i-heroicons-x-circle", color: "red" });
    return;
  }

  try {
    await $fetch("/api/dashboard/all-tournament", {
      method: "POST",
      body: {
        method: "DELETE",
        player: {
          mvp: team.value.find((player) => player.name.split(" (MVP)")[0] === selectedPlayer.value)?.mvp,
          number: team.value.find((player) => player.name.split(" (MVP)")[0] === selectedPlayer.value)?.number,
          name: selectedPlayer.value,
          school: team.value.find((player) => player.name.split(" (MVP)")[0] === selectedPlayer.value)?.school,
          position: team.value.find((player) => player.name.split(" (MVP)")[0] === selectedPlayer.value)?.position,
        },
      },
    });
  } catch (error: any) {
    toast.add({ title: "Error", description: "Something went wrong. Please try again later.", icon: "i-heroicons-x-circle", color: "red" });
    return;
  }

  team.value = team.value.filter((player) => player.name.split(" (MVP)")[0] !== selectedPlayer.value);
  existingPlayers.value[0] = existingPlayers.value[0].filter((player: { label: string | undefined }) => player.label !== selectedPlayer.value);

  toast.add({ title: "Success", description: "Player deleted successfully.", icon: "i-heroicons-check-circle", color: "green" });

  selectedPlayer.value = undefined;
}

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

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="All-Tournament" />
      <UDashboardPanelContent>
        <UCard>
          <UTable class="-mx-6 -mb-6 -mt-6" :rows="team" :columns="columns" />
        </UCard>

        <UCard class="mt-4">
          <UForm :schema="AllTournamentSchema" :state="state" @submit="onSubmit">
            <UFormGroup label="MVP" name="mvp" required>
              <UCheckbox v-model="state.mvp" />
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
            <UButton class="mt-4" type="submit" color="white" label="Add Player" />
          </UForm>
        </UCard>

        <UCard class="mt-4">
          <div>
            <UFormGroup label="Player">
              <UDropdown :items="existingPlayers" :popper="{ placement: 'bottom-start' }">
                <UButton color="white" :label="selectedPlayer" trailing-icon="i-heroicons-chevron-down-20-solid" />
              </UDropdown>
            </UFormGroup>

            <UButton class="mt-4" color="red" label="Delete Player" @click="onDeletePlayer" />
          </div>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
