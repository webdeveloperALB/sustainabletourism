import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">EcoTourism</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Informacion profesional për turizmin e qëndrueshëm në botë.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Temat</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#topic1"
                  className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Turizmi në Shqipëri
                </Link>
              </li>
              <li>
                <Link
                  href="#topic2"
                  className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Zonat e Mbrojtura
                </Link>
              </li>
              <li>
                <Link
                  href="#topic3"
                  className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Turizmi në Pandemi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Më Shumë</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#topic4"
                  className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Turizmi në Tajlandë
                </Link>
              </li>
              <li>
                <Link
                  href="#topic5"
                  className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Turizmi në Australi
                </Link>
              </li>
              <li>
                <Link
                  href="#topic6"
                  className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Golfi dhe Turizmi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Na Ndiqni</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} EcoTourism. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
  )
}
