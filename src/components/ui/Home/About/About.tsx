// import React from "react";
// import {
//   Code2,
//   Cpu,
//   Database,
//   Globe,
//   Briefcase,
//   GraduationCap,
//   Award,
// } from "lucide-react";

// const AboutSkills = () => {
//   const skills = [
//     {
//       name: "Frontend",
//       tech: "Next.js, React, TypeScript, Tailwind CSS",
//       icon: <Code2 className="w-6 h-6" />,
//     },
//     {
//       name: "Backend",
//       tech: "Node.js, Express, Prisma",
//       icon: <Cpu className="w-6 h-6" />,
//     },
//     {
//       name: "Database",
//       tech: "PostgreSQL, MongoDB, Redis, Supabase",
//       icon: <Database className="w-6 h-6" />,
//     },
//     {
//       name: "DevOps",
//       tech: "Docker, Vercel, AWS, CI/CD",
//       icon: <Globe className="w-6 h-6" />,
//     },
//   ];

//   const info = [
//     {
//       title: "Experience",
//       value: "1+ Year Full-Stack Development",
//       icon: <Briefcase className="w-5 h-5" />,
//     },
//     {
//       title: "Education",
//       value: "BSS Degree",
//       icon: <GraduationCap className="w-5 h-5" />,
//     },
//     {
//       title: "Courses",
//       value: "Full-Stack Web Development Training",
//       icon: <Award className="w-5 h-5" />,
//     },
//   ];

//   return (
//     <section className="py-24 bg-[#0a0a0a] text-white">
//       <div className="container mx-auto px-6 max-w-6xl">
//         <div className="flex flex-col lg:flex-row gap-14 items-start">
//           {/* LEFT SIDE */}
//           <div className="w-full lg:w-1/2 space-y-8">
//             {/* CMD CARD */}
//             <div className="relative group">
//               <div
//                 className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600
//                               blur opacity-30 group-hover:opacity-60 transition"
//               ></div>

//               <div className="relative bg-[#111111] border border-white/10 p-6 rounded-lg shadow-xl">
//                 <div className="flex gap-2 mb-4">
//                   <span className="w-3 h-3 rounded-full bg-red-500" />
//                   <span className="w-3 h-3 rounded-full bg-yellow-500" />
//                   <span className="w-3 h-3 rounded-full bg-green-500" />
//                 </div>

//                 <pre className="text-sm font-mono text-gray-400 leading-relaxed">
//                   <code>
//                     <span className="text-purple-400">const</span> developer ={" "}
//                     {"{"}
//                     {"\n"}
//                     &nbsp;&nbsp;name:{" "}
//                     <span className="text-green-400">Sweet Ali</span>,{"\n"}
//                     &nbsp;&nbsp;role:{" "}
//                     <span className="text-green-400">Full Stack Developer</span>
//                     ,{"\n"}
//                     &nbsp;&nbsp;focus:{" "}
//                     <span className="text-green-400">Scalable Web Apps</span>,
//                     {"\n"}
//                     &nbsp;&nbsp;mission:{" "}
//                     <span className="text-green-400">
//                       Clean & Maintainable Code
//                     </span>
//                     {"\n"}
//                     {"}"};
//                   </code>
//                 </pre>
//               </div>
//             </div>

//             {/* INFO UNDER CMD */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {info.map((item) => (
//                 <div
//                   key={item.title}
//                   className="p-4 rounded-xl bg-white/5 border border-white/10
//                              hover:border-purple-500/40 transition"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="text-purple-400">{item.icon}</div>
//                     <div>
//                       <p className="text-xs text-gray-400">{item.title}</p>
//                       <p className="text-sm font-medium">{item.value}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {skills.map((skill) => (
//               <div
//                 key={skill.name}
//                 className="group relative p-6 rounded-xl bg-white/5 border border-white/10
//                            hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div
//                   className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600
//                                 opacity-0 group-hover:opacity-30 blur rounded-xl transition"
//                 ></div>

//                 <div className="relative space-y-3">
//                   <div className="text-purple-400">{skill.icon}</div>
//                   <h3 className="text-lg font-semibold">{skill.name}</h3>
//                   <p className="text-sm text-gray-400">{skill.tech}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSkills;

import React from "react";
import { Terminal, Code2, Cpu, Globe } from "lucide-react";

const AboutMe = () => {
  const coreSkills = [
    { name: "Frontend", tech: "Next.js 15, React, TypeScript, Tailwind CSS" },
    { name: "Backend", tech: "Node.js, Express, Prisma, PostgreSQL" },
    { name: "DevOps", tech: "Docker, Vercel, AWS, CI/CD" },
    { name: "Database", tech: "MongoDB, Redis, Supabase" },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual Side: Code Snippet Card */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#111111] border border-white/10 p-6 rounded-lg shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="font-mono text-sm text-gray-400">
                  <code>
                    <span className="text-purple-400">const</span> developer ={" "}
                    {"{"} <br />
                    &nbsp;&nbsp;name:{" "}
                    <span className="text-green-400">Sweet Ali</span>, <br />
                    &nbsp;&nbsp;role:{" "}
                    <span className="text-green-400">
                      Full Stack Engineer
                    </span>, <br />
                    &nbsp;&nbsp;specialty:{" "}
                    <span className="text-green-400">
                      Scalable Web Arch
                    </span>, <br />
                    &nbsp;&nbsp;mission:{" "}
                    <span className="text-green-400">
                      Building resilient digital systems
                    </span>{" "}
                    <br />
                    {"}"};
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Modern Architecture
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              I am a Full-Stack Engineer specializing in high-performance MERN
              applications. My focus is on bridging the gap between clean
              frontend architecture and scalable backend systems. I transform
              complex business requirements into seamless digital experiences
              through type-safe, maintainable code.
            </p>

            {/* Skill Grid replaces the progress bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {coreSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
                >
                  <h3 className="text-purple-400 font-semibold mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400">{skill.tech}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium hover:scale-105 transition-transform active:scale-95">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
