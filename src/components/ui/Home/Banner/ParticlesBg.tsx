"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
const ParticlesBg = () => {
  const [, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fullScreen: { enable: false },

      fpsLimit: 150,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#5d5d5dff",
        },
        links: {
          color: "#0084c2",
          distance: 250,
          enable: true,
          opacity: 0.7,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2.5,
          straight: false,
        },
        number: {
          density: {
            // enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },

      detectRetina: true,
    }),
    []
  );

  // const options: ISourceOptions = useMemo(
  //   () => ({
  //     background: {
  //       color: {
  //         value: "#000000",
  //       },
  //     },
  //     fullScreen: { enable: false },
  //     fpsLimit: 60,

  //     interactivity: {
  //       events: {
  //         onHover: {
  //           enable: true,
  //           mode: "repulse", // keep your mouse effect
  //         },
  //       },
  //       modes: {
  //         repulse: {
  //           distance: 120, // subtle push effect
  //           duration: 0.4,
  //         },
  //       },
  //     },

  //     particles: {
  //       color: {
  //         value: "#9c9c9c",
  //       },
  //       links: {
  //         color: "#00aaff", // bright but not harsh
  //         distance: 180, // smaller web connections
  //         enable: true,
  //         opacity: 0.5, // soft, lucrative look
  //         width: 0.5,
  //       },
  //       move: {
  //         direction: "none",
  //         enable: true,
  //         outModes: {
  //           default: OutMode.out,
  //         },
  //         random: false,
  //         speed: 0.6, // smoother & calm
  //         straight: false,
  //       },
  //       number: {
  //         value: 50, // balanced, not too many
  //         density: {
  //           enable: true,
  //           area: 800,
  //         },
  //       },
  //       opacity: {
  //         value: 0.7,
  //       },
  //       shape: {
  //         type: "circle",
  //       },
  //       size: {
  //         value: { min: 1, max: 2.5 },
  //       },
  //     },

  //     detectRetina: true,
  //   }),
  //   []
  // );

  return <Particles options={options} className="absolute inset-0 z-0" />;
};

export default ParticlesBg;
