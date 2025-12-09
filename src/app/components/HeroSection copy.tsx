// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import hero_img from "@/app/assets/mockup-bg.png"
import Image from "next/image";
import razorpay from "@/app/assets/razorpay.svg"
// import paytm from "@/app/assets/p-1a.svg"

import shiprocket from "@/app/assets/shiprocket.svg"

// import razorpay from "@/app/assets/razorpay.png"

// export default function HeroSection() {
//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-hcom-bg via-[#1E293B] to-hcom-bg text-center text-hcom-text px-6 pt-20">
//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-5xl md:text-6xl font-bold leading-tight"
//       >
//         The Headless Commerce Engine <br /> for Scaling Businesses.
//       </motion.h1>
//       <p className="max-w-2xl mt-6 text-hcom-subtext text-lg">
//         Build, automate, and scale your storefronts across web, mobile, and retail —
//         without rebuilding your backend.
//       </p>
//       <div className="mt-8 flex gap-4">
//         <button className="bg-hcom-primary hover:bg-indigo-600 text-white px-6 py-3 rounded-xl">
//           Request Early Access
//         </button>
//         <button className="border border-hcom-primary text-hcom-primary hover:bg-hcom-primary/10 px-6 py-3 rounded-xl">
//           View Docs
//         </button>
//       </div>
//     </section>
//   );
// }

// components/HeroSection.tsx (Updated Light Theme)
// export default function HeroSection() {
//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center text-center bg-hcom-bg px-6 pt-20">
//       <h1 className="text-5xl md:text-6xl font-bold text-hcom-text leading-tight">
//         Headless Commerce <br /> for Scaling Businesses.
//       </h1>
//       <p className="max-w-2xl mt-6 text-hcom-subtext text-lg">
//         A modular backend to power storefronts, apps, and marketplaces — with APIs built for
//         performance and flexibility.
//       </p>
//       <div className="mt-8 flex gap-4">
//         <button className="bg-hcom-primary hover:bg-hcom-primaryHover text-white px-6 py-3 rounded-lg font-medium shadow-soft">
//           Request Early Access
//         </button>
//         <button className="border border-hcom-border text-hcom-text hover:bg-hcom-muted px-6 py-3 rounded-lg font-medium">
//           View Docs
//         </button>
//       </div>
//     </section>
//   );
// }

// import { Typewriter } from "react-simple-typewriter";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-hcom-bg px-6 overflow-hidden pt-20">
//       {/* Animated background blobs */}
//       <motion.div
//         className="absolute top-20 left-20 w-72 h-72 bg-hcom-primary/20 rounded-full blur-3xl"
//         animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
//         transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-10 right-20 w-96 h-96 bg-hcom-secondary/20 rounded-full blur-3xl"
//         animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
//         transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
//       />

//       {/* Text animation */}
//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl md:text-6xl font-bold text-hcom-text leading-tight"
//       >
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-hcom-primary to-hcom-secondary animate-gradient">
//           Headless Commerce
//         </span>
//         <br />
//         for Scaling Businesses.
//       </motion.h1>

//       {/* Typewriter tagline */}
//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="max-w-2xl mt-6 text-hcom-subtext text-lg"
//       >
//         <Typewriter
//           words={[
//             "Modular backend to power storefronts.",
//             "Built for performance and flexibility.",
//             "API-first engine for commerce at scale.",
//           ]}
//           loop={true}
//           cursor
//           cursorStyle="|"
//           typeSpeed={45}
//           deleteSpeed={30}
//           delaySpeed={2500}
//         />
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.7 }}
//         className="mt-10 flex gap-4 z-10"
//       >
//         <button className="bg-hcom-primary hover:bg-hcom-primaryHover text-white px-6 py-3 rounded-lg font-medium shadow-soft transition">
//           Request Early Access
//         </button>
//         <button className="border border-hcom-border text-hcom-text hover:bg-hcom-muted px-6 py-3 rounded-lg font-medium transition">
//           View Docs
//         </button>
//       </motion.div>
//     </section>
//   );
// }



export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hcom-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* --- LEFT: Text & CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-hcom-text leading-tight">
            {/* Build <span className="text-hcom-primary">Commerce</span><br /> */}
            Perfect for brands evolving beyond plugins.

            {/* Like an Engineering Team Not a Plugin Store. */}
          </h1>

          <p className="mt-6 text-hcom-subtext text-lg max-w-lg leading-relaxed">
            A scalable, API-first commerce OS that lets you own your data, customize every workflow, and sell across any channel — without limitations or vendor lock-in.

          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {/* <button className="bg-hcom-primary hover:bg-hcom-primaryHover text-white px-6 py-3 rounded-lg font-medium shadow-soft transition"> */}
            <button className="inline-flex  items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 px-6 py-3 font-semibold text-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:brightness-110">

              Request Early Access
            </button>
            {/* <button className="border border-hcom-border text-hcom-text hover:bg-hcom-muted px-6 py-3 rounded-lg font-medium transition">
              Book a Demo
            </button> */}
          </div>

          {/* Integration Logos */}
          <div className="mt-10 flex items-center gap-6 opacity-70">
            {[razorpay, shiprocket].map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt={logo + ""}
                className="h-6 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT: Product Mockup / Illustration --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          {/* Background gradient shape */}
          {/* <div className="absolute -top-10 -right-10 w-[500px] h-[500px] bg-gradient-to-tr from-hcom-primary/10 to-hcom-secondary/10 blur-3xl rounded-full" /> */}

          {/* <div className="relative bg-white/80 backdrop-blur-xl border border-hcom-border rounded-2xl shadow-soft p-6 max-w-md mx-auto"> */}
          {/* <div className="relative  backdrop-blur-xl  mx-auto">

            <Image
              src={hero_img}
              alt="HCOM Dashboard Preview"
              className="rounded-xl select-none"
            />
            <div className="absolute -top-6 right-6 bg-hcom-primary text-white text-sm font-medium px-3 py-1.5 rounded-full shadow">
              Headless API Core
            </div>
          </div> */}
        </motion.div>
      </div>

      {/* Decorative gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-hcom-primary via-hcom-secondary to-hcom-primary opacity-40" />
    </section>
  );
}
