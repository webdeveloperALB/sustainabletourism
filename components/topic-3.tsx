"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WormIcon as Virus, Plane, Smartphone, ShieldCheck } from "lucide-react"

export default function Topic3() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Turizmi në Epokën e Pandemisë</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Turizmi i Qëndrueshëm në Epokën e Pandemisë: Rasti i Japonisë
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Virus className="h-8 w-8 text-emerald-500" />
              <CardTitle>Përshtatja ndaj COVID-19</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Programi "Go To Travel" i Japonisë subvencionoi 35% të kostove të udhëtimit vendas, duke gjeneruar 9.3
                miliardë dollarë në ekonominë lokale. 87% e atraksioneve turistike implementuan sisteme rezervimi me
                kapacitet të kufizuar.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Plane className="h-8 w-8 text-emerald-500" />
              <CardTitle>Turizmi Mikro-lokal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Koncepti "Micro-Tourism" promovoi udhëtime në distanca të shkurtra, duke ulur emetimet e karbonit me
                42%. Destinacionet rurale si Hokkaido dhe Okinawa panë rritje të vizitorëve me 28%, duke shpërndarë
                përfitimet ekonomike përtej qyteteve të mëdha.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Smartphone className="h-8 w-8 text-emerald-500" />
              <CardTitle>Digjitalizimi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Aplikacioni "Japan Smart Tourism" u shkarkua nga 3.7 milionë përdorues, duke ofruar ture virtuale dhe
                informacion në kohë reale për masat e sigurisë. 72% e ryokan-eve tradicionale implementuan check-in pa
                kontakt dhe sistemet e pagesave digjitale.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <ShieldCheck className="h-8 w-8 text-emerald-500" />
              <CardTitle>Protokollet e Sigurisë</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Certifikimi "Safety & Security" u adoptua nga 95% e bizneseve turistike japoneze. Onsen-et (burimet
                termale) implementuan sisteme rezervimi me kohë të caktuar, duke ruajtur eksperiencën tradicionale
                ndërsa respektojnë distancimin social.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
