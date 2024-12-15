import {
  reactive,
  onMounted,
  onUnmounted,
  nextTick,
  markRaw,
  type DefineComponent,
} from "vue";
import MetaLogo from "~/assets/svg/meta.svg";
import TundraLogo from "~/assets/svg/tundra.svg";
import OvoLogo from "~/assets/svg/ovo.svg";
import TrayLogo from "~/assets/svg/tray.svg";
import HackneyLogo from "~/assets/svg/hackney.svg";
import Frontiers from "~/assets/svg/frontiers.svg";
import Snyk from "~/assets/svg/snyk.svg";

export const useCarousel = () => {
  type CarouselItem = {
    id: string;
    component: any;
  };

  const carousel = reactive<CarouselItem[]>([
    {
      id: "Hackney",
      component: markRaw(HackneyLogo as unknown as DefineComponent),
    },
    {
      id: "Ovo",
      component: markRaw(OvoLogo as unknown as DefineComponent),
    },
    {
      id: "Frontiers",
      component: markRaw(Frontiers as unknown as DefineComponent),
    },
    {
      id: "Snyk",
      component: markRaw(Snyk as unknown as DefineComponent),
    },
    {
      id: "Meta",
      component: markRaw(MetaLogo as unknown as DefineComponent),
    },
    {
      id: "Tundra",
      component: markRaw(TundraLogo as unknown as DefineComponent),
    },

    {
      id: "Tray",
      component: markRaw(TrayLogo as unknown as DefineComponent),
    },
  ]);

  function onTick() {
    const first = carousel.shift()!;

    /**
     * This is necessary to trick the TransitionGroup component
     * to think that this element is "brand new" in the list, and not the previous one that was removed.
     *
     * In this way we can have two independent animation, one of the item leaving, and one for the item entering
     */
    first.id = `${Math.random()}`;

    carousel.push(first);
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
