"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Waves, Fish, Anchor, Ship } from "lucide-react"

export default function Topic4() {
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
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Turizmi i Qëndrueshëm në Tajlandë</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Piloti i Oqeanit Tajlandez: Rast Studimor mbi Turizmin e Qëndrueshëm, Mjedisin dhe Oqeanin
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
              <Waves className="h-8 w-8 text-emerald-500" />
              <CardTitle>Ekonomia Blu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Iniciativa "Blue Economy" e Tajlandës ka gjeneruar 13.4 miliardë dollarë nga turizmi detar i
                qëndrueshëm. 78% e operatorëve të zhytjeve kanë adoptuar praktikat "Green Fins" për mbrojtjen e recifeve
                koralare.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Fish className="h-8 w-8 text-emerald-500" />
              <CardTitle>Biodiversiteti Detar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Programi "Marine Protected Areas" ka zgjeruar zonat e mbrojtura detare në 32,000 km², duke rritur
                popullatat e breshkave detare me 23%. Taksa e konservimit prej 9$ për turist ka financuar restaurimin e
                1,200 hektarë mangrovë.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Anchor className="h-8 w-8 text-emerald-500" />
              <CardTitle>Komunitetet Bregdetare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                27 fshatra peshkatarësh tradicionale kanë zhvilluar programe ekoturizmi që gjenerojnë 40% të të
                ardhurave të tyre. Projekti "Homestay Detar" ka trajnuar 350 familje për të ofruar akomodim autentik,
                duke rritur të ardhurat e tyre me 65%.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Ship className="h-8 w-8 text-emerald-500" />
              <CardTitle>Lundrim i Qëndrueshëm</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Certifikimi "Green Cruise" është adoptuar nga 62% e operatorëve të lundrimit në Tajlandë. Portet
                kryesore turistike kanë instaluar sisteme furnizimi me energji elektrike nga bregu, duke reduktuar
                emetimet e anijeve me 43% në zonat e ankorimit.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
