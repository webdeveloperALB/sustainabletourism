"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Building, Landmark } from "lucide-react"

export default function Topic1() {
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
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Turizmi i Qëndrueshëm në Shqipëri</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Ndikimi ekonomik dhe praktikat e qëndrueshme në sektorin turistik shqiptar
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
              <TrendingUp className="h-8 w-8 text-emerald-500" />
              <CardTitle>Rritja Ekonomike</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Turizmi kontribuon me 21.2% në GDP-në e Shqipërisë, duke krijuar mbi 291,000 vende pune. Strategjia
                kombëtare synon rritjen e turizmit të qëndrueshëm me 8% çdo vit deri në 2030.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="h-8 w-8 text-emerald-500" />
              <CardTitle>Komunitetet Lokale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Projektet e agroturizmit në Theth dhe Valbonë kanë rritur të ardhurat e banorëve lokalë me 35%. Mbi 120
                shtëpi tradicionale janë transformuar në bujtina autentike që ruajnë trashëgiminë kulturore.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Building className="h-8 w-8 text-emerald-500" />
              <CardTitle>Infrastruktura e Gjelbër</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Investimet në energji të rinovueshme për sektorin e turizmit kanë arritur në 17 milionë euro. 42% e
                hoteleve të reja përdorin panele diellore dhe sisteme efikase të ujit, duke ulur konsumin e energjisë me
                30%.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Landmark className="h-8 w-8 text-emerald-500" />
              <CardTitle>Trashëgimia Kulturore</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Programi "Autentike Shqipëria" ka certifikuar 78 destinacione që ruajnë traditat lokale. Festivalet e
                gastronomisë tradicionale tërheqin mbi 50,000 turistë çdo vit, duke rritur qëndrimin mesatar me 2.3
                ditë.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
