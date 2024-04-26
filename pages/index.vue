<script setup lang="ts">
var visitorCount = ref(0);

function getYearDifferenceWithSuffix() {
  const yearDifference = new Date().getFullYear() - 1992;
  let suffix = "th";

  if (yearDifference % 10 === 1 && yearDifference % 100 !== 11) {
    suffix = "st";
  } else if (yearDifference % 10 === 2 && yearDifference % 100 !== 12) {
    suffix = "nd";
  } else if (yearDifference % 10 === 3 && yearDifference % 100 !== 13) {
    suffix = "rd";
  }

  return `${yearDifference}${suffix}`;
}

function addCommasToNumber(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

onMounted(async () => {
  if ((useCookie("has-visited", { readonly: true }).value as String) != "true") {
    try {
      visitorCount.value = await $fetch("/api/visit");
    } catch (error: any) {
      console.error(error);
    }
  }
});
</script>

<template>
  <div>
    <ClientOnly>
      <section id="landing">
        <img class="animate-fade absolute h-[44.5rem] w-full overflow-hidden object-cover opacity-0 brightness-[0.5]" src="~/assets/LWEInvitational_edited.jpg" />

        <div class="absolute w-full items-center justify-center lg:mt-[2.5rem] lg:flex">
          <img class="animate-top mx-auto w-[294px] object-contain opacity-0 md:w-[255px] lg:mx-0 lg:w-[441px]" src="~/assets/LWEVBinvite_logo.svg" />
          <div class="lg:ml-8 lg:mt-24">
            <div class="animate-right opacity-0 delay-500">
              <h1 class="mx-10 mb-4 text-center text-3xl font-bold text-white lg:mx-0 lg:w-[28rem] lg:text-start lg:text-[2.75rem]/[3.25rem]">
                Welcome to the {{ getYearDifferenceWithSuffix() }} Lincoln-Way East Boys' Volleyball Invitational
              </h1>
            </div>
            <div class="animate-right opacity-0 delay-1000">
              <p class="mx-8 mb-4 text-center text-xl font-light text-white lg:mx-0 lg:w-[26rem] lg:text-start">
                Friday, April 26th and Saturday, April 27th, 2024 at Lincoln-Way East and Central High School campuses
              </p>
            </div>
            <div class="animate-right delay-1500 text-center opacity-0 lg:text-start">
              <UButton class="h-10 w-32 lg:w-10" :ui="{ rounded: 'rounded-full' }" variant="solid" to="/#info">
                <UIcon class="h-full w-full flex-shrink-0" name="i-heroicons-chevron-down" aria-hidden="true" />
              </UButton>
            </div>
          </div>
        </div>
      </section>

      <div class="h-[44.5rem]"></div>

      <HomeLinks />

      <HomeTeams />

      <HomeSponsors />

      <SocialFeed />

      <div class="text-center">
        <p class="text-sm">Total Website Views</p>
        <p class="text-2xl">{{ addCommasToNumber(visitorCount) }}</p>
      </div>
    </ClientOnly>
  </div>
</template>

<style>
.animate-fade {
  animation: fadeIn 1s ease-in-out forwards;
}

.animate-top {
  animation: translateDown 1s ease-in-out forwards;
}

.animate-right {
  animation: translateRight 1s ease-in-out forwards;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-1000 {
  animation-delay: 1s;
}

.delay-1500 {
  animation-delay: 1.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes translateDown {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes translateRight {
  from {
    opacity: 0;
    transform: translateX(25px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
