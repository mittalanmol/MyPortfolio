// import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const ParticlesBackground = () => {
//   const particlesInit = async (engine) => {
//     // Initialize tsParticles instance
//     await loadFull(engine);
//   };

//   return (
//     <Particles
//       id='tsparticles'
//       init={particlesInit}
//       options={{
//         background: {
//           color: {
//             value: "#f0f0f0", // Change background color if needed
//           },
//         },
//         fpsLimit: 60,
//         particles: {
//           number: {
//             value: 80,
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           color: {
//             value: "#000", // Color of the particles
//           },
//           shape: {
//             type: "circle",
//           },
//           opacity: {
//             value: 0.5,
//           },
//           size: {
//             value: 3,
//           },
//           move: {
//             enable: true,
//             speed: 1.5,
//             direction: "none",
//             random: false,
//             straight: false,
//             outModes: {
//               default: "out",
//             },
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//             resize: true,
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// };

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import "./ParticlesBackground.css";

const ParticlesBackground = (props) => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#F7F7F7",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "grab",
          },
          onHover: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            // distance: 200,
            // duration: 15,
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
          value: "#808080",
        },
        links: {
          color: "#808080",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className='particles-container'>
      <Particles id={props.id} init={particlesLoaded} options={options} />
    </div>
  );
};

export default ParticlesBackground;
