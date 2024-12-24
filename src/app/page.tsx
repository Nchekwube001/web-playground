"use client";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useInView,
  useAnimate,
  usePresence,
} from "motion/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};
const childVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const svgVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252,211,77,0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252,211,77,1)",
  },
};
export default function Home() {
  const router = useRouter();
  const { scrollYProgress: completionProgress } = useScroll();
  const containerRef = useRef(null);
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();
  const isInView = useInView(scope, {
    once: true,
  });
  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);
  // console.log({
  //   mainControls,
  // });
  // const mainControls = useAnimate();
  // console.log({
  //   mainControls,
  // });

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, []);
  useEffect(() => {
    animate("h1", { opacity: 1 });
  }, [animate]);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={childVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-lg"
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
          />
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-full"
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.4,
            }}
          />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-rose-400"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          {/* <Link href={"/portfolio"}>
            <p>Press me</p>
          </Link> */}
          <motion.button
            // onTap={()=>{

            // }}
            onClick={() => {
              // console.log({
              //   name: router,
              // });
              router.push("/playground");
              // router.push("/portfolio");
            }}
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
            className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
          >
            Subscribe
          </motion.button>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"
            drag
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 10,
            }}
            dragConstraints={{ top: -125, left: -125, right: 125, bottom: 125 }}
          />
        </motion.div>
        <motion.div
          variants={childVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              className="w-full bg-gray-400 rounded-xl h-full  origin-bottom"
              style={{
                scaleY: completionProgress,
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgVariant}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>

      <section className="flex flex-col gap-10 mb-10" ref={scope}>
        <motion.h1
          className="text-slate-100 font-thin text-5xl tracking-wide text-center"
          // animate={scope}
          // initial="hidden"
          // variants={{
          //   hidden: { opacity: 0, y: 75 },
          //   visible: { opacity: 1, y: 0 },
          // }}
          // transition={{
          //   delay: 0.3,
          // }}
        >
          Lets go Web devs
        </motion.h1>
        <p className="text-slate-100 font-thin text-4xl w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet
          nihil nulla impedit nemo illo nisi asperiores voluptates, veritatis
          ullam nobis labore similique rem aliquid vel, nesciunt quibusdam
          nostrum quae!
        </p>
        <p className="text-slate-100 font-thin text-4xl w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet
          nihil nulla impedit nemo illo nisi asperiores voluptates, veritatis
          ullam nobis labore similique rem aliquid vel, nesciunt quibusdam
          nostrum quae!
        </p>
      </section>
    </div>
  );
}
// "dev": "next dev --turbopack",
