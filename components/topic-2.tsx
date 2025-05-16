"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TreePine, Mountain, Home, Route } from "lucide-react"

export default function Topic2() {
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
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Turizmi në Zonat e Mbrojtura</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Zhvillimi i qëndrueshëm i vendbanimeve rurale në zonat e mbrojtura - Rasti i Parkut Kombëtar Kopaonik (Serbi)
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
              <TreePine className="h-8 w-8 text-emerald-500" />
              <CardTitle>Biodiversiteti</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Parku Kombëtar Kopaonik mbron 1,531 specie bimore (11.9% e florës së Serbisë) dhe 91 specie endemike.
                Programet e monitorimit të vizitorëve kanë reduktuar ndikimin negativ në habitatet e ndjeshme me 27%.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Mountain className="h-8 w-8 text-emerald-500" />
              <CardTitle>Ekoturizmi Alpin</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Shtigjet ekoturistike të Kopaonikut shtrihen në 300 km dhe tërheqin 45,000 vizitorë jashtë sezonit të
                skijimit. Certifikimi "Eco-Mountain" është fituar nga 23 operatorë turistikë që respektojnë standardet e
                larta mjedisore.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Home className="h-8 w-8 text-emerald-500" />
              <CardTitle>Vendbanimet Rurale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                17 fshatra tradicionale brenda dhe përreth parkut kanë zhvilluar programe të turizmit rural. Të ardhurat
                e familjeve që ofrojnë akomodim autentik janë rritur me 42%, duke ndaluar emigrimin rural me 31%.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Route className="h-8 w-8 text-emerald-500" />
              <CardTitle>Planifikimi Hapësinor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Plani i Menaxhimit të Parkut 2018-2028 ka krijuar 3 zona të ndryshme mbrojtjeje me rregulla specifike
                për zhvillimin turistik. Ndërtimet e reja turistike janë kufizuar në 5% të sipërfaqes totale, duke
                ruajtur 85% të parkut në gjendje natyrore.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
