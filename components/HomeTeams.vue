<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

type RefElement = Element | ComponentPublicInstance | null;

const refs = ref<RefElement[]>([]);
const teamsSection = ref<any>(null);
const sectionTitle = ref<string>();

const { stop } = useIntersectionObserver(
  teamsSection,
  ([{ isIntersecting }]) => {
    if (!isIntersecting) return;

    refs.value.forEach((element: any) => {
      element.style.animationPlayState = "running";
    });

    stop();
  },
  { threshold: 0.0005 },
);

onMounted(() => {
  sectionTitle.value = new Date().getFullYear() + " Teams";

  refs.value.forEach((element: any) => {
    element.style.animationFillMode = "forwards";
    element.style.transformOrigin = "center";
    element.style.animationPlayState = "paused";
    element.style.animationDuration = "1s";
  });
});
</script>

<template>
  <UContainer class="-mt-16">
    <section class="-scroll-m-[0.5rem] lg:-scroll-m-[2rem]" id="teams" ref="teamsSection">
      <div class="animate-bottom" :ref="(element: any) => (refs[0] = element)">
        <ULandingSection icon="i-heroicons-user-group" :title="sectionTitle">
          <div class="-mt-8 lg:-mt-16 lg:grid lg:grid-cols-5 lg:gap-4">
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h2024040803302262281c40d2fcc3840" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/knight_clean__1_.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Lincoln-Way Central</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h2024040803302295853c8c59018934f" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/warrior_transparent__1_.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Lincoln-Way West</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h20240408033022778f2a6518b1c2e44" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/Lincoln-WayEastIL.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Lincoln-Way East</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h202404080330233291ca9717135b640" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/Marist_M_Hawk.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Marist</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h2024040803302117835f1bf4831d84c" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/BellevilleEast.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Belleville East</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h20240408033021321994af337452f48" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/Brother_Rice_logo.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Brother Rice</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h2024040803302146821b0f95d24b647" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/DGNorth.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Downers Grove North</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h2024040803302171041d457597a8043" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/Tiger-Logo-Bold.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Fishers</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h2024040803302158533e94cae815949" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/20181010220511_427_mascotOrig.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Downers Grove South</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h2024040803302184197eab3195d8249" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/Wqf8icdl_400x400.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Glenbard West</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h2024040803302197839f5fd5c9b3d44" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/EFB434CD-CC08-41F9-9CB0-DADC9C69653E.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Glenbard South</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h20240408033022124b1f48c4f785846" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/il-hinsdalecentral.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Hinsdale Central</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h20240408033022277c16bccd22ce242" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/JCA.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Joliet Catholic Academy</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h20240408033022444a8ff9b87bda743" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/il-lphs.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Lake Park</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h202404080330231258c412365bde740" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/LTHS-Octagon-Maroon.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Lockport</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h20240408033023507b6bf8fe64a584e" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/Minooka.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Minooka</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h20240408033023717b2e29c5f78324e" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/updated_logo.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Naperville North</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h20240408033023945c19e3f3cac4e47" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/20181010190507_313_mascotOrig.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Plainfield East</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h202404080330241782dcf0a80ed744d" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/Roncalli.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Roncalli</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h202404080330244368f5d36d359874f" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/east_logo_2.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">St. Charles East</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h20240408033024718da64c73d56194e" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/242677168_223901809776873_7760493579053295521_n.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">West Aurora</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h20240408033024997ed574e6e4f714b" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/g6O6VnYD_400x400.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Wheaton St. Francis</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h202404080330252897af07d54db1145" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/Copy-of-WY-ClearBkgd1.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Whitney Young</span>
              </div>
            </NuxtLink>
            <NuxtLink to="https://www.gobound.com/host/lwevb/tournaments/R600/divisions/D2/teams/h202404080331401066102fc59be144d" target="_blank">
              <div class="mt-8 flex flex-col items-center lg:mt-0">
                <img class="h-[250px] object-contain lg:h-[180px]" src="~/assets/Athletic fox head transparent.png" />
                <span class="mt-4 w-full text-center text-xl font-bold lg:text-base">Yorkville</span>
              </div>
            </NuxtLink>
          </div>
        </ULandingSection>
      </div>
    </section>
  </UContainer>
</template>

<style scoped lang="scss">
.animate-top {
  animation: translateDown;
}

.animate-bottom {
  animation: translateUp;
}

.animate-left {
  animation: translateLeft;
}

.animate-right {
  animation-name: translateRight;
}

@keyframes translateDown {
  0% {
    transform: translate3D(0, -100px, 0);
    opacity: 0;
  }

  100% {
    transform: translateY(0, 0, 0);
    opacity: 1;
  }
}

@keyframes translateUp {
  0% {
    transform: translate3D(0, 100px, 0);
    opacity: 0;
  }

  100% {
    transform: translateY(0, 0, 0);
    opacity: 1;
  }
}

@keyframes translateLeft {
  0% {
    transform: translate3D(-100px, 0, 0);
    opacity: 0;
  }

  100% {
    transform: translate3D(0, 0, 0);
    opacity: 1;
  }
}

@keyframes translateRight {
  0% {
    transform: translate3D(100px, 0, 0);
    opacity: 0;
  }

  100% {
    transform: translate3D(0, 0, 0);
    opacity: 1;
  }
}
</style>
