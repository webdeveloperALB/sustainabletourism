import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Topic1 from "@/components/topic-1"
import Topic2 from "@/components/topic-2"
import Topic3 from "@/components/topic-3"
import Topic4 from "@/components/topic-4"
import Topic5 from "@/components/topic-5"
import Topic6 from "@/components/topic-6"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div id="topic1">
          <Topic1 />
        </div>
        <div id="topic2">
          <Topic2 />
        </div>
        <div id="topic3">
          <Topic3 />
        </div>
        <div id="topic4">
          <Topic4 />
        </div>
        <div id="topic5">
          <Topic5 />
        </div>
        <div id="topic6">
          <Topic6 />
        </div>
      </div>
      <Footer />
    </main>
  )
}
