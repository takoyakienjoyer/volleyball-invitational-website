<script setup lang="ts">
import { sub, format, isSameDay, type Duration } from "date-fns";

const ranges = [
  { label: "Last 7 days", duration: { days: 7 } },
  { label: "Last 14 days", duration: { days: 14 } },
  { label: "Last 30 days", duration: { days: 30 } },
  { label: "Last 3 months", duration: { months: 3 } },
  { label: "Last 6 months", duration: { months: 6 } },
  { label: "Last year", duration: { years: 1 } },
];
const selected = ref({ start: sub(new Date(), { days: 14 }), end: new Date() });

function isRangeSelected(duration: Duration) {
  return isSameDay(selected.value.start, sub(new Date(), duration)) && isSameDay(selected.value.end, new Date());
}

function selectRange(duration: Duration) {
  selected.value = { start: sub(new Date(), duration), end: new Date() };
}

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
            <UFormGroup label="Tournament Dates" name="tournamentDates" required>
              <UPopover :popper="{ placement: 'bottom-start' }">
                <UButton icon="i-heroicons-calendar-days-20-solid"> {{ format(selected.start, "d MMM, yyy") }} - {{ format(selected.end, "d MMM, yyy") }} </UButton>

                <template #panel="{ close }">
                  <div class="flex items-center divide-gray-200 sm:divide-x dark:divide-gray-800">
                    <div class="hidden flex-col py-4 sm:flex">
                      <UButton
                        class="rounded-none px-6"
                        v-for="(range, index) in ranges"
                        :key="index"
                        :label="range.label"
                        color="gray"
                        variant="ghost"
                        :class="[isRangeSelected(range.duration) ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50']"
                        truncate
                        @click="selectRange(range.duration)"
                      />
                    </div>

                    <DatePicker v-model="selected" @close="close" />
                  </div>
                </template>
              </UPopover>
            </UFormGroup>
            <UFormGroup class="mt-4" label="Tournament Location" name="tournamentLocation" required>
              <UInput placeholder="Tournament Location" />
            </UFormGroup>
            <UButton class="mt-4" color="white" type="submit">Set Tournament Details</UButton>
          </div>
        </UCard>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
