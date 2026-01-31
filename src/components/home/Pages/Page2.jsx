import React from "react";
import {
  GraduationCap,
  MapPin,
  Mail,
  CircuitBoard,
  Gamepad2,
  Clapperboard,
  Brain,
} from "lucide-react";
import { RevealOnScroll } from "../../utils/Reveal"; // Adjust path if necessary

const Page2 = () => {
  return (
    <div className="w-full min-h-screen py-20 bg-transparent flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Biography Section - Spans 7 columns */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={0.2} className="h-full">
              <div className="bg-[#0F1624]/60 dark:bg-white/80 backdrop-blur-md border border-gray-700/50 dark:border-gray-200 rounded-3xl p-8 hover:border-gray-600 dark:hover:border-blue-300 transition-all duration-300 shadow-2xl h-full">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 bg-clip-text text-transparent mb-6">
                  About Me
                </h2>
                <div className="space-y-4 text-gray-300 dark:text-gray-900 leading-relaxed text-lg">
                  <p>
                    I am a{" "}
                    <strong className="text-white dark:text-gray-900">
                      Computer Science & Engineering undergraduate
                    </strong>{" "}
                    with a passion for building scalable digital solutions. My
                    journey involves everything from full-stack web development
                    to exploring the frontiers of{" "}
                    <strong className="text-white dark:text-gray-900">
                      Machine Learning
                    </strong>{" "}
                    and{" "}
                    <strong className="text-white dark:text-gray-900">
                      IoT
                    </strong>
                    .
                  </p>
                  <p>
                    Currently, I work as a{" "}
                    <strong className="text-white dark:text-gray-900">
                      Full Stack Developer
                    </strong>{" "}
                    at Adiance Technologies, where I architect high-performance
                    platforms. Previously, I had the privilege of interning at{" "}
                    <strong className="text-white dark:text-gray-900">
                      ISRO
                    </strong>
                    , contributing to satellite data visualization tools that
                    impact real-world analysis.
                  </p>
                  <p>
                    Beyond code, I am a researcher—having published a paper on
                    NLP-based matchmaking—and an active community leader. I
                    believe in clean code, data-driven decisions, and the power
                    of collaboration.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700/50 dark:border-gray-400">
                  <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-900 uppercase tracking-wider mb-4">
                    Interests & Hobbies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 dark:text-blue-800 text-sm font-medium border border-blue-500/20 dark:border-blue-300 flex items-center gap-2">
                      <Brain size={16} /> AI Research
                    </span>
                    <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 dark:text-purple-800 text-sm font-medium border border-purple-500/20 dark:border-purple-300 flex items-center gap-2">
                      <Gamepad2 size={16} /> Gaming
                    </span>
                    <span className="px-4 py-2 rounded-full bg-pink-500/10 text-pink-300 dark:text-pink-800 text-sm font-medium border border-pink-500/20 dark:border-pink-300 flex items-center gap-2">
                      <Clapperboard size={16} /> Movies
                    </span>
                    <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-300 dark:text-green-800 text-sm font-medium border border-green-500/20 dark:border-green-300 flex items-center gap-2">
                      <CircuitBoard size={16} /> IoT Tinker
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Aside Section - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <RevealOnScroll delay={0.4}>
              <div className="bg-[#1A202B] dark:bg-white rounded-3xl p-6 border-l-4 border-blue-500 shadow-xl dark:shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 dark:text-blue-600">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white dark:text-gray-900">
                    Education
                  </h3>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 dark:text-gray-800">
                    Bachelor of Technology
                  </h4>
                  <p className="text-gray-400 dark:text-gray-600">
                    Computer Science & Engineering
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-blue-400 dark:text-blue-600 font-medium">
                      Karnavati University
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-800 dark:bg-gray-100 dark:text-gray-800 px-2 py-1 rounded">
                      2022 - 2026
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Contact Card */}
            <RevealOnScroll delay={0.5}>
              <div className="bg-[#1A202B] dark:bg-white rounded-3xl p-6 border-l-4 border-purple-500 shadow-xl dark:shadow-sm">
                <h3 className="text-xl font-bold text-white dark:text-gray-900 mb-6">
                  Contact Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Mail
                        size={18}
                        className="text-purple-400 dark:text-purple-600"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-700">
                        Email
                      </p>
                      <a
                        href="mailto:jaybhuptani1054@gmail.com"
                        className="text-sm md:text-base text-gray-200 dark:text-gray-800 hover:text-purple-400 dark:hover:text-purple-600 transition-colors"
                      >
                        jaybhuptani1054@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <MapPin
                        size={18}
                        className="text-purple-400 dark:text-purple-600"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-700">
                        Location
                      </p>
                      <p className="text-sm md:text-base text-gray-200 dark:text-gray-900">
                        Ahmedabad, Gujarat, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Quote / Stat Card (Optional filler for balance) */}
            <RevealOnScroll delay={0.6}>
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 dark:from-blue-100 dark:to-purple-100 border border-white/10 dark:border-blue-200 rounded-3xl p-6 text-center shadow-lg dark:shadow-sm">
                <p className="text-gray-300 dark:text-gray-900 italic font-semibold">
                  "Innovating at the intersection of Hardware, Software, and
                  Intelligence."
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
