"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Recycle, Award, Lightbulb } from "lucide-react"

export default function Topic5() {
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
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Turizmi i Qëndrueshëm në Australi</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Praktikat dhe politikat inovative të turizmit të qëndrueshëm në Australi
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
              <Leaf className="h-8 w-8 text-emerald-500" />
              <CardTitle>Ekoçertifikimi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Programi "ECO Certification" ka akredituar 3,500 biznese turistike australiane. Operatorët e çertifikuar
                raportojnë 28% më shumë kënaqësi të klientëve dhe 17% rritje të rezervimeve nga turistët e ndërgjegjshëm
                mjedisorë.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Recycle className="h-8 w-8 text-emerald-500" />
              <CardTitle>Ekonomia Qarkulluese</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Iniciativa "Zero Waste Tourism" ka reduktuar mbetjet e hoteleve me 43%. Resorti Lizard Island në
                Barrierën e Madhe Koralare operon me 95% energji diellore dhe ka eliminuar plotësisht përdorimin e
                plastikës njëpërdorimshme.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-8 w-8 text-emerald-500" />
              <CardTitle>Turizmi Aborigjen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Bizneset turistike në pronësi aborigjene kanë rritur me 67% që nga 2015, duke gjeneruar 5.8 miliardë
                dollarë australianë. Programi "Welcome to Country" ka trajnuar 780 guida vendase që ndajnë njohuritë
                tradicionale për menaxhimin e tokës.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <Lightbulb className="h-8 w-8 text-emerald-500" />
              <CardTitle>Inovacioni Klimatik</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Fondi "Climate Innovation for Tourism" ka investuar 75 milionë dollarë në 120 projekte për përshtatjen
                ndaj ndryshimeve klimatike. Teknologjia e restaurimit të koraleve në Cairns ka rigjeneruar 650 hektarë
                recife të dëmtuara, duke tërhequr 120,000 vizitorë shtesë çdo vit.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
