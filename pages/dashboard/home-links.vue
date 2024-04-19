<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import type { InferType } from "yup";
import HomeLinksSchema from "~/schemas/HomeLinksSchema";

type Schema = InferType<typeof HomeLinksSchema>;
type HomeLinksSchema = {
  scheduleAndResults: string | undefined;
  spectatorTickets: string | undefined;
};

const state = reactive<HomeLinksSchema>({
  scheduleAndResults: undefined,
  spectatorTickets: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>): Promise<void> {
  console.log(event);
}

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div class="pt-8">
    <UCard>
      <UForm> </UForm>
    </UCard>
  </div>
</template>
