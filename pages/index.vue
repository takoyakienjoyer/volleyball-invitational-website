<template>
  <div>
    <ClientOnly>
      <section id="landing">
        <img class="animate-fade absolute h-[44.5rem] w-full overflow-hidden object-cover opacity-0 brightness-[0.5]" src="~/assets/LWEInvitational_edited.jpg" />

        <div class="absolute right-[3.8rem] mt-[2.5rem] flex w-full items-center justify-center">
          <img class="animate-top h-[548px] w-[441px] object-cover opacity-0" src="~/assets/LWEInvitational_logo.png" />
          <div class="ml-8 mt-16">
            <div class="animate-right opacity-0 delay-500">
              <h1 class="mb-4 w-[28rem] text-[2.75rem]/[3.25rem] font-bold text-white">Welcome to the 2024 LWE Boys' Volleyball Invitational</h1>
            </div>
            <div class="animate-right opacity-0 delay-1000">
              <p class="mb-4 w-[26rem] text-lg font-light text-white">
                Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet.
              </p>
            </div>
            <div class="animate-right delay-1500 opacity-0">
              <UButton :ui="{ rounded: 'rounded-full' }" icon="i-heroicons-chevron-down" variant="solid" size="xl" to="/#info" />
            </div>
          </div>
        </div>
      </section>
    </ClientOnly>

    <div class="h-[44.5rem]"></div>

    <ClientOnly>
      <HomeLinks />

      <HomeTeams/>
    </ClientOnly>

    <div class="h-[100rem]"></div>
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
