"use client"

import type React from "react"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Lock, Eye, Key, Server, Activity, Shield, Database, Smartphone, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import HeroHighlight from "@/components/ui/hero-highlight"

export default function LandingPage() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  })

  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })

  const techRef = useRef(null)
  const techInView = useInView(techRef, { once: true, amount: 0.2 })

  const securityRef = useRef(null)
  const securityInView = useInView(securityRef, { once: true, amount: 0.2 })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-black">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center sticky top-0 z-50 bg-blue-50/80 dark:bg-blue-950/80 backdrop-blur-sm">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-lg">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text">
            locken
          </span>
        </motion.div>
        <motion.nav
          className="hidden md:flex gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="#features"
            className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#technology"
            className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Technology
          </Link>
          <Link
            href="#security"
            className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Security
          </Link>
          <Link
            href="#mobile"
            className="text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Mobile App
          </Link>
        </motion.nav>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">Get Started</Button>
        </motion.div>
      </header>

      <main ref={scrollRef}>
        {/* Hero Section with the HeroHighlight component */}
        <section className="py-12 relative">
          <motion.div style={{ opacity, scale }}>
            <HeroHighlight containerClassName="bg-transparent dark:bg-transparent h-[30rem]">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, -5, 0] }}
                transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-blue-50 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
              >
                Full Smart Security System:
                <Highlight className="text-blue-900 dark:text-blue-50 bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-600 dark:to-blue-700">
                  AI-Driven Smartlock with Blockchain Logging
                </Highlight>
              </motion.h1>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30"
                >
                  View Demo
                </Button>
              </motion.div>
            </HeroHighlight>
          </motion.div>

          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <Link href="#features">
              <ChevronDown className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </Link>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              System Workflow
            </motion.h2>
            <motion.p
              className="text-center text-blue-700 dark:text-blue-300 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our comprehensive security system integrates multiple technologies to provide unparalleled protection and
              accountability.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              <motion.div
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl transform-gpu transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-100 dark:hover:bg-blue-800/30"
                variants={fadeInUp}
              >
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-lg inline-block mb-4">
                  <Key className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-100">Smart Lock BLE</h3>
                <p className="text-blue-700 dark:text-blue-300">
                  The smart lock emits a unique lockCID over Bluetooth Low Energy (BLE) for secure access.
                </p>
              </motion.div>

              <motion.div
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl transform-gpu transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-100 dark:hover:bg-blue-800/30"
                variants={fadeInUp}
              >
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-lg inline-block mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-100">Facial Recognition</h3>
                <p className="text-blue-700 dark:text-blue-300">
                  Motion detection and AI-powered facial verification prevent spoofing via static images.
                </p>
              </motion.div>

              <motion.div
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl transform-gpu transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-100 dark:hover:bg-blue-800/30"
                variants={fadeInUp}
              >
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-lg inline-block mb-4">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-100">Blockchain Logging</h3>
                <p className="text-blue-700 dark:text-blue-300">
                  Tamper-proof, trustless logging via Chainlink-powered private blockchain for all access events.
                </p>
              </motion.div>

              <motion.div
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl transform-gpu transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-100 dark:hover:bg-blue-800/30"
                variants={fadeInUp}
              >
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-lg inline-block mb-4">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-100">Anomaly Detection</h3>
                <p className="text-blue-700 dark:text-blue-300">
                  AI-driven packet inspection monitors IoT traffic and flags suspicious activities in real-time.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" ref={techRef} className="py-16 bg-blue-50 dark:bg-blue-950/30">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={techInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Technology Stack
            </motion.h2>
            <motion.p
              className="text-center text-blue-700 dark:text-blue-300 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={techInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our system leverages cutting-edge technologies to provide a secure, scalable, and reliable solution.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={techInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">Why These Technologies?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600 dark:bg-blue-500 p-1 rounded mt-1">
                      <Database className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-blue-900 dark:text-blue-100">Blockchain:</span>
                      <p className="text-blue-700 dark:text-blue-300">
                        Immutable logging of all IoT interactions; smart contract alerts.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600 dark:bg-blue-500 p-1 rounded mt-1">
                      <Database className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-blue-900 dark:text-blue-100">Supabase:</span>
                      <p className="text-blue-700 dark:text-blue-300">
                        Cloud-native DB enabling microservice communication & real-time sync.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600 dark:bg-blue-500 p-1 rounded mt-1">
                      <Server className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-blue-900 dark:text-blue-100">Microservices:</span>
                      <p className="text-blue-700 dark:text-blue-300">
                        Decoupled services increase modularity and scalability.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600 dark:bg-blue-500 p-1 rounded mt-1">
                      <Activity className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-blue-900 dark:text-blue-100">LangChain + AI:</span>
                      <p className="text-blue-700 dark:text-blue-300">
                        Real-time anomaly detection for packet-level network security.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="relative h-80 bg-blue-100 dark:bg-blue-900/40 rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={techInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-600 dark:bg-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-2 border-blue-400 dark:border-blue-600 rounded-full"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-blue-300 dark:border-blue-700 rounded-full"
                  animate={{
                    scale: [1, 1.03, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Lock className="h-16 w-16 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" ref={securityRef} className="py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={securityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Network Security
            </motion.h2>
            <motion.p
              className="text-center text-blue-700 dark:text-blue-300 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={securityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our AI-driven packet inspection provides comprehensive protection against network threats.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, y: 50 }}
                animate={securityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">
                    AI-Driven Packet Inspection
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <p className="text-blue-700 dark:text-blue-300">IoT traffic is monitored using packet tracing</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <p className="text-blue-700 dark:text-blue-300">
                        LangChain-powered ML model analyzes incoming traffic
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <p className="text-blue-700 dark:text-blue-300">
                        Flags suspicious packets from unusual IPs or DDOS attempts
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <p className="text-blue-700 dark:text-blue-300">Automatically blocks malicious IPs</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <p className="text-blue-700 dark:text-blue-300">Sends real-time alerts to the mobile app</p>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="order-1 md:order-2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={securityInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-80 w-full">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    animate={{
                      background: [
                        "linear-gradient(120deg, rgba(37,99,235,0.1) 0%, rgba(59,130,246,0.1) 100%)",
                        "linear-gradient(120deg, rgba(37,99,235,0.2) 0%, rgba(59,130,246,0.2) 100%)",
                        "linear-gradient(120deg, rgba(37,99,235,0.1) 0%, rgba(59,130,246,0.1) 100%)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="rounded-xl"
                  >
                    <div className="grid grid-cols-5 grid-rows-5 gap-4 p-4 w-full h-full">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-blue-500/20 dark:bg-blue-500/30 rounded-md"
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-blue-600 dark:bg-blue-500 p-4 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(37,99,235,0.4)",
                        "0 0 0 20px rgba(37,99,235,0)",
                        "0 0 0 0 rgba(37,99,235,0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Shield className="h-12 w-12 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section id="mobile" className="py-16 bg-blue-50 dark:bg-blue-950/30">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Mobile App
            </motion.h2>
            <motion.p
              className="text-center text-blue-700 dark:text-blue-300 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Flutter-based mobile application provides a seamless interface for employees to interact with the
              system.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white dark:bg-blue-900/20 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                }}
              >
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-lg inline-block mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-100">BLE Scanning</h3>
                <p className="text-blue-700 dark:text-blue-300">
                  The app continuously scans for BLE signals from authorized smart locks in the vicinity.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-blue-900/20 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                }}
              >
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-lg inline-block mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-100">Facial Recognition</h3>
                <p className="text-blue-700 dark:text-blue-300">
                  Handles facial recognition & verification with motion detection to prevent spoofing.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-blue-900/20 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                }}
              >
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-lg inline-block mb-4">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-100">Real-time Monitoring</h3>
                <p className="text-blue-700 dark:text-blue-300">
                  Displays login history, failed attempts, and notifications from the AI security system.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                Download App
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 dark:bg-blue-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex items-center gap-2 mb-6 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-2 rounded-lg">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-white">locken</span>
            </motion.div>
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                Contact
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="mt-8 text-center text-blue-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            &copy; {new Date().getFullYear()} Locken Security Systems. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

const Highlight = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <span className={`relative rounded-md ${className}`}>{children}</span>
}
