"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, BarChart3, Award, Menu, X, ChevronRight, MapPin, Clock, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils" // Import cn for conditional class names

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy policy", href: "#privacy" },
    { name: "How it works", href: "#how-it-works" },
  ]

  const features = [
    {
      icon: MapPin,
      title: "Real-time blood availability",
      description:
        "Hospitals and users can instantly view available blood types and stock levels from nearby blood banks.",
      bgColor: "bg-vital-red/10",
      iconColor: "text-vital-red",
    },
    {
      icon: Bell,
      title: "Smart donor alerts",
      description: "Sends timely notifications to donors when their blood type is urgently needed in their area.",
      bgColor: "bg-lifepoint-gold/10",
      iconColor: "text-lifepoint-gold",
    },
    {
      icon: BarChart3,
      title: "Predictive demand tracking",
      description:
        "Predicts blood shortages using health data, local trends, and hospital reports, so supply meets demand before emergencies hit.",
      bgColor: "bg-tech-blue/10",
      iconColor: "text-tech-blue",
    },
    {
      icon: Award,
      title: "Lifepoints for recurring donations",
      description:
        "Tracks donation history and rewards frequent donors with health screenings, badges, and referral perks.",
      bgColor: "bg-fresh-mint/10",
      iconColor: "text-fresh-mint",
    },
  ]

  const testimonials = [
    {
      quote:
        "BloodChain helped us find blood for my sister's surgery in under 10 minutes. This platform is a blessing.",
      author: "Chinwe, Lagos",
      rating: 5,
    },
    {
      quote:
        "I always wanted to donate blood but didn't know where to go. Now I get alerts when my blood type is needed.",
      author: "Ahmed, Ibadan",
      rating: 5,
    },
    {
      quote: "As a nurse, this is the tool I've been waiting for. It will save countless lives.",
      author: "Nurse Bisi, UCH Hospital",
      rating: 5,
    },
  ]

  const donorSteps = [
    {
      number: "1",
      title: "Sign Up & Get Verified",
      description: "Register in seconds. We'll match you to nearby verified blood banks and hospitals.",
      image: "/images/healthcare-worker-female.jpg",
      alt: "Healthcare worker assisting a donor registration",
    },
    {
      number: "2",
      title: "Donate Blood",
      description: "Receive timely alerts when your blood type is needed. Donate at a convenient location.",
      image: "/images/blood-donation.jpg",
      alt: "Blood donation process",
    },
    {
      number: "3",
      title: "Earn LifePoints & Redeem",
      description: "Track your donation history, earn LifePoints, and redeem them for health screenings or perks.",
      image: "/images/heart-hands-cupping.jpg",
      alt: "Hands holding a heart, symbolizing care and reward",
    },
  ]

  const hospitalSteps = [
    {
      number: "1",
      title: "Log In & Search",
      description: "Access real-time blood inventory. Search for specific blood types and quantities needed.",
      image: "/images/doctor-consultation.jpg",
      alt: "Doctors consulting, symbolizing hospital operations",
    },
    {
      number: "2",
      title: "Choose Delivery Option",
      description: "Select standard or emergency delivery based on urgency. Our system optimizes dispatch.",
      image: "/images/mockup-clean.png",
      alt: "Mobile app showing delivery options",
    },
    {
      number: "3",
      title: "Blood Delivered by Certified Riders",
      description: "Ensure safe and timely delivery of blood units by our network of certified logistics partners.",
      image: "/images/blood-donation.jpg",
      alt: "Certified rider delivering blood",
    },
  ]

  return (
    <div className="min-h-screen bg-clean-white font-inter">
      {/* Header */}
      <motion.header
        className="fixed top-0 w-full bg-clean-white/95 backdrop-blur-sm border-b border-deep-charcoal/10 z-50"
        style={{ opacity: headerOpacity }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
              <Image
                src="/images/bloodchain 002.png"
                alt="BloodChain Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-vital-red text-xl font-montserrat font-bold">BloodChain</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-deep-charcoal/80 hover:text-vital-red transition-colors font-inter"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.div {...scaleOnHover}>
                <Button className="bg-vital-red hover:bg-vital-red/90 text-clean-white px-6 font-inter">Sign Up</Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-deep-charcoal" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-clean-white border-t border-deep-charcoal/10"
            >
              <div className="container mx-auto px-4 py-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-deep-charcoal/80 hover:text-vital-red font-inter"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-vital-red/5 to-clean-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              style={{ y: heroY }}
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-5xl lg:text-6xl font-montserrat font-bold leading-tight bg-gradient-to-r from-vital-red to-deep-charcoal bg-clip-text text-transparent">
                  Connecting Lives With Every Drop
                </h1>
              </motion.div>

              <motion.p className="text-xl text-deep-charcoal/80 leading-relaxed font-inter" variants={fadeInUp}>
                BloodChain connects blood donors, hospitals, and banks - fast, smart, and in real-time.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    className="bg-vital-red hover:bg-vital-red/90 text-clean-white px-8 py-4 text-lg font-inter"
                  >
                    Become A Donor
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div {...scaleOnHover}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-vital-red text-vital-red hover:bg-vital-red/10 px-8 py-4 text-lg font-inter bg-transparent"
                  >
                    Sign Up as Hospital
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-6 text-sm text-deep-charcoal/60 font-inter"
                variants={fadeInUp}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-tech-blue" />
                  <span>Verified & Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-tech-blue" />
                  <span>Real-time Matching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-tech-blue" />
                  <span>Nationwide Coverage</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10">
                <Image
                  src="/images/mockup.png"
                  alt="BloodChain Mobile App"
                  width={600}
                  height={600}
                  className="w-full max-w-md mx-auto"
                />
              </div>

              {/* Animated background circles with moving dot */}
              <motion.div
                className="absolute inset-0 -z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="absolute inset-0 border-2 border-vital-red/10 rounded-full"></div>
                <div className="absolute inset-4 border-2 border-vital-red/20 rounded-full"></div>
                <div className="absolute inset-8 border-2 border-vital-red/30 rounded-full"></div>
                {/* Moving dot micro-interaction */}
                <motion.div
                  className="absolute w-3 h-3 bg-vital-red rounded-full"
                  style={{
                    top: "calc(50% - 224px - 6px)", // Half of image height - radius of outermost circle - half dot size
                    left: "calc(50% - 6px)", // Half of image width - half dot size
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How BloodChain Works for Donors Section */}
      <section id="how-it-works-donors" className="py-20 bg-clean-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-montserrat font-bold text-vital-red mb-4">How BloodChain Works for Donors</h2>
            <p className="text-lg text-deep-charcoal/80 font-inter">
              Become a life-saver. Here's how you can make a difference.
            </p>
            <motion.div
              className="inline-flex items-center px-4 py-2 mt-4 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-inter"
              variants={fadeInUp}
            >
              <span className="mr-2">✨</span> Smart matching & dispatch powered by AI
            </motion.div>
          </motion.div>

          {/* Desktop Layout: 2 columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {/* Left Column: Step 1 and Step 2 */}
            <div className="space-y-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-clean-white border border-deep-charcoal/20 rounded-2xl pl-8 flex gap-6"
              >
                <div className="pt-[123px] pb-[123px] pl-1.5 pr-1.5 flex-1">
                  <div className="text-sm text-deep-charcoal/60 mb-2 font-inter">Step 1</div>
                  <h3 className="text-2xl font-montserrat font-bold text-deep-charcoal mb-4">{donorSteps[0].title}</h3>
                  <p className="text-deep-charcoal/80 font-inter">{donorSteps[0].description}</p>
                </div>
                <div className="flex items-stretch">
                  <div className="aspect-[4/3] h-full roudd-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={donorSteps[0].image || "/placeholder.svg"}
                      alt={donorSteps[0].alt}
                      width={320}
                      height={368}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-clean-white border border-deep-charcoal/20 rounded-2xl p-8 flex gap-6"
              >
                <div className="flex-1">
                  <div className="text-sm text-deep-charcoal/60 mb-2 font-inter">Step 2</div>
                  <h3 className="text-2xl font-montserrat font-bold text-deep-charcoal mb-4">{donorSteps[1].title}</h3>
                  <p className="text-deep-charcoal/80 font-inter">{donorSteps[1].description}</p>
                </div>
                <div className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={donorSteps[1].image || "/placeholder.svg"}
                    alt={donorSteps[1].alt}
                    width={320}
                    height={368}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column: Step 3 */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-clean-white border border-deep-charcoal/20 rounded-2xl p-8 h-full flex flex-col"
              >
                <div className="mb-8">
                  <div className="text-sm text-deep-charcoal/60 mb-2 font-inter">Step 3</div>
                  <h3 className="text-2xl font-montserrat font-bold text-deep-charcoal mb-4">{donorSteps[2].title}</h3>
                  <p className="text-deep-charcoal/80 font-inter">{donorSteps[2].description}</p>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden">
                  <Image
                    src={donorSteps[2].image || "/placeholder.svg"}
                    alt={donorSteps[2].alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Layout: Stacked vertically */}
          <div className="md:hidden space-y-6">
            {donorSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-clean-white border border-deep-charcoal/20 rounded-2xl p-6"
              >
                <div className="text-sm text-deep-charcoal/60 mb-2 font-inter">Step {step.number}</div>
                <h3 className="text-xl font-montserrat font-bold text-deep-charcoal mb-3">{step.title}</h3>
                <p className="text-deep-charcoal/80 mb-4 text-sm font-inter">{step.description}</p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.alt}
                    width={300}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How BloodChain Works for Hospitals Section */}
      <section id="how-it-works-hospitals" className="py-20 bg-warm-sand">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-montserrat font-bold text-deep-charcoal mb-4">
              How BloodChain Works for Hospitals
            </h2>
            <p className="text-lg text-deep-charcoal/80 font-inter">
              Streamline your blood supply management and save critical time.
            </p>
            <motion.div
              className="inline-flex items-center px-4 py-2 mt-4 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-inter"
              variants={fadeInUp}
            >
              <span className="mr-2">✨</span> Smart matching & dispatch powered by AI
            </motion.div>
          </motion.div>

          {/* Desktop Layout: 2 columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {/* Left Column: Step 1 and Step 2 */}
            <div className="space-y-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-clean-white border border-deep-charcoal/20 rounded-2xl p-8 flex gap-6"
              >
                <div className="flex-1">
                  <div className="text-sm text-deep-charcoal/60 mb-2 font-inter">Step 1</div>
                  <h3 className="text-2xl font-montserrat font-bold text-deep-charcoal mb-4">
                    {hospitalSteps[0].title}
                  </h3>
                  <p className="text-deep-charcoal/80 font-inter">{hospitalSteps[0].description}</p>
                </div>
                <div className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={hospitalSteps[0].image || "/placeholder.svg"}
                    alt={hospitalSteps[0].alt}
                    width={200}
                    height={130}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-clean-white border border-deep-charcoal/20 rounded-2xl p-8 flex gap-6"
              >
                <div className="flex-1">
                  <div className="text-sm text-deep-charcoal/60 mb-2 font-inter">Step 2</div>
                  <h3 className="text-2xl font-montserrat font-bold text-deep-charcoal mb-4">
                    {hospitalSteps[1].title}
                  </h3>
                  <p className="text-deep-charcoal/80 font-inter">{hospitalSteps[1].description}</p>
                </div>
                <div className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={hospitalSteps[1].image || "/placeholder.svg"}
                    alt={hospitalSteps[1].alt}
                    width={120}
                    height={80}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column: Step 3 */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-clean-white border border-deep-charcoal/20 rounded-2xl p-8 h-full flex flex-col"
              >
                <div className="mb-8">
                  <div className="text-sm text-deep-charcoal/60 mb-2 font-inter">Step 3</div>
                  <h3 className="text-2xl font-montserrat font-bold text-deep-charcoal mb-4">
                    {hospitalSteps[2].title}
                  </h3>
                  <p className="text-deep-charcoal/80 font-inter">{hospitalSteps[2].description}</p>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden">
                  <Image
                    src={hospitalSteps[2].image || "/placeholder.svg"}
                    alt={hospitalSteps[2].alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Layout: Stacked vertically */}
          <div className="md:hidden space-y-6">
            {hospitalSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-clean-white border border-deep-charcoal/20 rounded-2xl p-6"
              >
                <div className="text-sm text-deep-charcoal/60 mb-2 font-inter">Step {step.number}</div>
                <h3 className="text-xl font-montserrat font-bold text-deep-charcoal mb-3">{step.title}</h3>
                <p className="text-deep-charcoal/80 mb-4 text-sm font-inter">{step.description}</p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.alt}
                    width={300}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Section */}
      <section className="py-20 bg-clean-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-montserrat font-bold text-vital-red mb-8">The Blood Crisis in Nigeria</h2>

              <div className="space-y-6 text-deep-charcoal text-base leading-relaxed font-inter">
                <p>
                  Every year, Nigeria needs over <strong>1.8 million pints</strong> of blood, yet less than{" "}
                  <strong>10%</strong> comes from voluntary donors. This severe shortage puts thousands of lives at
                  risk, from women experiencing childbirth complications to accident victims and patients awaiting
                  urgent surgery.
                </p>

                <p>
                  Many of these deaths are preventable. The real issue isn't just the lack of blood, it's the lack of
                  access, connection, and timely response.
                </p>

                <p className="font-semibold">That's where BloodChain comes in.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/blood-donation.jpg"
                  alt="Blood donation process"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-warm-sand">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-montserrat font-bold text-vital-red mb-6">Our Mission</h2>
            <div className="max-w-4xl mx-auto space-y-4 text-deep-charcoal text-base leading-relaxed font-inter">
              <p>We're building a smart, connected blood donation ecosystem — powered by AI and driven by community.</p>
              <p>
                BloodChain connects verified donors, blood banks, and hospitals in real time, ensuring that safe blood
                is available exactly when and where it's needed.
              </p>
            </div>
          </motion.div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-12">
              {features.slice(0, 2).map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                        feature.bgColor,
                      )}
                    >
                      <Icon className={cn("h-8 w-8", feature.iconColor)} />
                    </div>
                    <h3 className="text-xl font-montserrat font-bold text-deep-charcoal mb-4">{feature.title}</h3>
                    <p className="text-deep-charcoal/80 text-sm leading-relaxed font-inter">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="w-80 h-80 bg-vital-red rounded-2xl overflow-hidden">
                <Image
                  src="/images/heart-hands-holding.jpg"
                  alt="Hands holding heart"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-12">
              {features.slice(2, 4).map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index + 2}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                        feature.bgColor,
                      )}
                    >
                      <Icon className={cn("h-8 w-8", feature.iconColor)} />
                    </div>
                    <h3 className="text-xl font-montserrat font-bold text-deep-charcoal mb-4">{feature.title}</h3>
                    <p className="text-deep-charcoal/80 text-sm leading-relaxed font-inter">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-clean-white border border-deep-charcoal/20 rounded-2xl p-6 text-center"
                >
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                      feature.bgColor,
                    )}
                  >
                    <Icon className={cn("h-8 w-8", feature.iconColor)} />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-deep-charcoal mb-3">{feature.title}</h3>
                  <p className="text-deep-charcoal/80 text-sm leading-relaxed font-inter">{feature.description}</p>
                </motion.div>
              )
            })}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: features.length * 0.1 }}
              className="flex justify-center pt-4"
            >
              <div className="w-64 h-64 bg-vital-red rounded-2xl overflow-hidden">
                <Image
                  src="/images/heart-hands-holding.jpg"
                  alt="Hands holding heart"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-clean-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-montserrat font-bold text-deep-charcoal mb-4">What People Are Saying</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-clean-white border border-deep-charcoal/20 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <blockquote className="text-deep-charcoal/80 mb-6 text-base leading-relaxed font-inter">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-deep-charcoal/60 font-inter font-medium not-italic">{testimonial.author}</cite>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-vital-red">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-montserrat font-bold mb-6 text-clean-white"
              variants={fadeInUp}
            >
              Ready to Save Lives? Let's Start.
            </motion.h2>

            <motion.p className="text-xl mb-8 text-clean-white/90 font-inter" variants={fadeInUp}>
              Sign up now to become a blood hero in your community. Whether you're a donor, a hospital, or a blood bank
              we need you.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6" variants={fadeInUp}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-2 border-clean-white/30 text-clean-white placeholder:text-clean-white/60 flex-1 h-12 font-inter"
              />
              <motion.div {...scaleOnHover}>
                <Button
                  size="lg"
                  className="bg-clean-white text-deep-charcoal hover:bg-gray-100 px-8 h-12 font-semibold font-inter"
                >
                  Register As a Donor
                </Button>
              </motion.div>
            </motion.div>

            <motion.p className="text-sm text-clean-white/75 font-inter" variants={fadeInUp}>
              By clicking Sign Up you're confirming that you agree with our{" "}
              <span className="underline">Terms and Conditions</span>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-clean-white border-t border-deep-charcoal/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="mb-4 md:mb-0 flex items-center space-x-1">
              <Image
                src="/images/bloodchain 002.png"
                alt="BloodChain Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-vital-red text-xl font-montserrat font-bold">BloodChain</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 mb-4 md:mb-0">
              <Link href="#" className="text-deep-charcoal/80 hover:text-deep-charcoal transition-colors font-inter">
                Home
              </Link>
              <Link href="#" className="text-deep-charcoal/80 hover:text-deep-charcoal transition-colors font-inter">
                About us
              </Link>
              <Link href="#" className="text-deep-charcoal/80 hover:text-deep-charcoal transition-colors font-inter">
                Contact us
              </Link>
              <Link href="#" className="text-deep-charcoal/80 hover:text-deep-charcoal transition-colors font-inter">
                How it works
              </Link>
              <Link href="#" className="text-deep-charcoal/80 hover:text-deep-charcoal transition-colors font-inter">
                Help Center
              </Link>
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <motion.a
                href="#"
                className="text-deep-charcoal/60 hover:text-deep-charcoal transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="text-deep-charcoal/60 hover:text-deep-charcoal transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="text-deep-charcoal/60 hover:text-deep-charcoal transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="text-deep-charcoal/60 hover:text-deep-charcoal transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="text-deep-charcoal/60 hover:text-deep-charcoal transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-deep-charcoal/20 mt-8 pt-8 text-center">
            <p className="text-deep-charcoal/80 text-sm font-inter">
              © 2025 BloodChain. All rights reserved.{" "}
              <Link href="#" className="hover:text-deep-charcoal">
                Privacy Policy
              </Link>{" "}
              <Link href="#" className="hover:text-deep-charcoal">
                Terms of Service
              </Link>{" "}
              <Link href="#" className="hover:text-deep-charcoal">
                Cookies Settings
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
