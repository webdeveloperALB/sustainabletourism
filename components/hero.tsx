"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToContent = () => {
    document.getElementById("topic1")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Turizmi i Qëndrueshëm</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Zbuloni praktikat më të mira të turizmit të qëndrueshëm nga e gjithë bota
          </p>
          <Button
            onClick={scrollToContent}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full"
          >
            Eksploro Më Shumë
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToContent}
            className="text-white hover:text-emerald-400 hover:bg-transparent"
          >
            <ArrowDown className="h-8 w-8" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
