<template>
  <div>
    <ClientOnly>
      <section id="landing">
        <img class="animate-fade absolute h-[44.5rem] w-full overflow-hidden object-cover opacity-0 brightness-[0.5]" src="~/assets/LWEInvitational_edited.jpg" />

        <div class="absolute w-full items-center justify-center lg:mt-[2.5rem] lg:flex">
          <img class="animate-top mx-auto w-[294px] object-contain opacity-0 md:w-[255px] lg:mx-0 lg:w-[441px]" src="~/assets/LWEInvitational_logo.png" />
          <div class="lg:ml-8 lg:mt-24">
            <div class="animate-right opacity-0 delay-500">
              <h1 class="mx-10 mb-4 text-center text-3xl font-bold text-white lg:mx-0 lg:w-[28rem] lg:text-start lg:text-[2.75rem]/[3.25rem]">
                Welcome to the {{ new Date().getFullYear() }} LWE Boys' Volleyball Invitational
              </h1>
            </div>
            <div class="animate-right opacity-0 delay-1000">
              <p class="mx-8 mb-4 text-center text-xl font-light text-white lg:mx-0 lg:w-[26rem] lg:text-start">
                Join the {{ new Date().getFullYear() }} LWE Boys' Volleyball Invitational for excellent competition and excitement. Watch your favorite teams compete.
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

      <ULandingSection title="Sponsors" icon="i-heroicons-cube-transparent"></ULandingSection>

      <!--
      <SocialFeed />
      -->
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
