import { loadStarsPreset } from "@tsparticles/preset-stars";
import Particles, {
  IParticlesProps,
  initParticlesEngine,
} from "@tsparticles/react";
import { useCallback, useEffect, useState } from "react";

export const StarsBackground = () => {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  console.log(init);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  const options = {
    background: {
      color: "#02031d",
    },
    fullScreen: {
      enable: false,
    },
    preset: "stars",
    particles: {
      number: {
        value: 250,
      },
      density: {
        enable: true,
        value_area: 789.1476416322727,
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.38927153781200905,
        random: false,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
  } as IParticlesProps["options"];
  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};
