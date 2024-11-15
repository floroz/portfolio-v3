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

export const useCarousel = () => {
  type CarouselItem = {
    id: string;
    component: any;
    className: string;
  };

  const carousel = reactive<CarouselItem[]>([
    {
      id: "Tundra",
      className: "text-primary w-[11rem]",
      component: markRaw(TundraLogo as unknown as DefineComponent),
    },
    {
      id: "Meta",
      className: "text-primary w-[11rem]",
      component: markRaw(MetaLogo as unknown as DefineComponent),
    },
    {
      id: "Frontiers",
      className: "text-primary w-[11rem]",
      component: markRaw(Frontiers as unknown as DefineComponent),
    },
    {
      id: "Ovo",
      className: "text-primary w-[11rem]",
      component: markRaw(OvoLogo as unknown as DefineComponent),
    },
    {
      id: "Tray",
      className: "text-primary w-[11rem]",
      component: markRaw(TrayLogo as unknown as DefineComponent),
    },
    {
      id: "Hackney",
      className: "text-primary w-[11rem]",
      component: markRaw(HackneyLogo as unknown as DefineComponent),
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
