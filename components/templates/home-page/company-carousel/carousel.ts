import { ref, onMounted, onUnmounted, markRaw, nextTick } from "vue";
import type { Component } from "vue";
import MetaLogo from "~/assets/svg/meta.svg";
import TundraLogo from "~/assets/svg/tundra.svg";
import OvoLogo from "~/assets/svg/ovo.svg";
import TrayLogo from "~/assets/svg/tray.svg";

export const useCarousel = () => {
  type CarouselItem = {
    id: string;
    component: Component;
    className: string;
  };

  const carousel = ref<CarouselItem[]>([
    {
      id: "Meta",
      className: "text-primary w-[11rem]",
      component: markRaw(MetaLogo),
    },
    {
      id: "Tundra",
      className: "text-primary w-[11rem]",
      component: markRaw(TundraLogo),
    },
    {
      id: "Ovo",
      className: "text-primary w-[11rem]",
      component: markRaw(OvoLogo),
    },
    {
      id: "Tray",
      className: "text-primary w-[11rem]",
      component: markRaw(TrayLogo),
    },
  ]);

  function onTick() {
    const first = carousel.value.shift()!;

    /**
     * This is necessary to trick the TransitionGroup component
     * to think that this element is "brand new" in the list, and not the previous one that was removed.
     *
     * In this way we can have two independent animation, one of the item leaving, and one for the item entering
     */
    first.id = `${Math.random()}`;

    carousel.value.push(first);
  }

  let interval: ReturnType<typeof setInterval> | null = null;

  onMounted(() => {
    nextTick(() => {
      onTick();
    });

    interval = setInterval(() => {
      onTick();
    }, 2000);
  });

  onUnmounted(() => {
    if (!interval) return;
    clearInterval(interval);
  });

  return {
    carousel,
  };
};
