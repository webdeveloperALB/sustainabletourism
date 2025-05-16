"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClubIcon as GolfIcon, Sprout, Droplets, Factory } from "lucide-react"

export default function Topic6() {
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
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Golfi dhe Turizmi i Qëndrueshëm</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A është Golfi një Formë e Re e Turizmit të Qëndrueshëm apo Shkelje e Thirrjeve Rurale Tradicionale? Krahasim
          midis Italisë dhe Brazilit
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
              <GolfIcon className="h-8 w-8 text-emerald-500" />
              <CardTitle>Golfi i Qëndrueshëm</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Në Itali, 42 fusha golfi kanë fituar certifikimin "GEO Certified®" për praktikat e qëndrueshme. Resorti
                Toscana Golf në Itali përdor 100% ujë të ricikluar dhe ka krijuar 27 hektarë habitat natyror që strehon
                78 specie të egra.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Sprout className="h-8 w-8 text-emerald-500" />
              <CardTitle>Biodiversiteti</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Fushat e golfit në Terras de São José (Brazil) kanë ruajtur 65% të sipërfaqes si zona natyrore, duke
                mbrojtur 120 specie vendase. Në kontrast, disa projekte në Toskana kanë zëvendësuar 230 hektarë vreshta
                tradicionale, duke reduktuar biodiversitetin bujqësor me 38%.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Droplets className="h-8 w-8 text-emerald-500" />
              <CardTitle>Menaxhimi i Ujit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Fushat e golfit në rajonin Puglia (Itali) konsumojnë mesatarisht 0.5 milionë litra ujë në ditë, ndërsa
                ato në Rio Grande do Sul (Brazil) kanë reduktuar konsumin e ujit me 47% duke përdorur varietete bari
                rezistente ndaj thatësirës dhe sisteme inteligjente të ujitjes.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Factory className="h-8 w-8 text-emerald-500" />
              <CardTitle>Ndikimi Socio-ekonomik</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Në Itali, resortet e golfit krijojnë 12.3 vende pune për hektar, krahasuar me 2.7 për bujqësinë
                tradicionale. Në Brazil, projekti "Golf & Community" ka trajnuar 350 të rinj nga komunitetet me të
                ardhura të ulëta për punë në industrinë e golfit, duke rritur të ardhurat e tyre mesatare me 215%.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
