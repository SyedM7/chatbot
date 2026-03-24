"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Menu, X, Github } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mediaErrors, setMediaErrors] = useState(new Set())

  const portfolioUrl = typeof window !== "undefined" ? window.location.origin : "https://your-portfolio-url.com"

  const handleMediaError = (src, type, retryCount = 0) => {
    console.log(`[v0] ${type} failed to load:`, src, `Retry attempt: ${retryCount}`)

    if (retryCount < 2) {
      setTimeout(
        () => {
          const element = document.querySelector(`[src="${src}"]`)
          if (element) {
            element.src = `${src}?retry=${retryCount + 1}`
          }
        },
        1000 * (retryCount + 1),
      )
    } else {
      setMediaErrors((prev) => new Set([...prev, src]))
    }
  }

  const MediaLoader = ({ children, fallback }) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )}
        <div onLoad={() => setIsLoading(false)} onError={() => setIsLoading(false)}>
          {children}
        </div>
        {fallback}
      </div>
    )
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(portfolioUrl)
    alert("Portfolio link copied to clipboard!")
  }

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioUrl)}`
    window.open(url, "_blank")
  }

  const shareOnTwitter = () => {
    const text = "Check out Ibad Ullah's portfolio - SEO Specialist & IT Enthusiast"
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(portfolioUrl)}`
    window.open(url, "_blank")
  }

  const shareViaEmail = () => {
    const subject = "Ibad Ullah's Portfolio"
    const body = `Hi,\n\nI wanted to share Ibad Ullah's portfolio with you. He's an experienced SEO Specialist & IT Enthusiast.\n\nCheck it out: ${portfolioUrl}\n\nBest regards`
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl font-bold text-white">Ibad Ullah</h1>

            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-gray-300 hover:text-gold transition-colors">
                About
              </a>
              <a href="#experience" className="text-gray-300 hover:text-gold transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-gray-300 hover:text-gold transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-300 hover:text-gold transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                Contact
              </a>
            </div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#about"
                  className="text-gray-300 hover:text-gold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-gold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-gold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-gold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-gold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Ibad Ullah</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Data Analytics Specialist & SEO Expert
              </p>
              <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                Data Analytics professional with hands-on experience in Python, SQL, Power BI, and advanced Excel.
                Recently completed comprehensive analytics projects during internship with Elevvo Pathways. Proven track
                record in SEO optimization for 20+ websites, e-commerce growth, and turning data into actionable
                business insights through end-to-end analytics solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-200 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+92 3258971498</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="break-all sm:break-normal">ibadtoqir@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-gold text-gold hover:bg-gradient-to-r hover:from-gold/10 hover:to-yellow-500/10 hover:text-gold bg-transparent transition-all duration-300"
              >
                <Link href="/resume">View Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm a passionate SEO Specialist, Data Analytics professional, and IT Enthusiast with comprehensive
                experience in digital marketing, web optimization, and data-driven insights. My journey includes
                optimizing over 20 websites, building successful e-commerce brands, and developing analytical solutions
                that turn raw data into actionable business intelligence.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                With a Bachelor's in Computer Science from Salim Habib University and recent completion of a Data
                Analytics internship at Elevvo Pathways, I combine technical expertise with marketing acumen and
                analytical thinking to deliver comprehensive digital solutions across multiple domains.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">Websites Optimized</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">Organic Sales Generated</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">Analytics Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
                    3+
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="border-l-4 border-l-gradient-to-b border-l-gold bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-white mb-2">Education</h3>
                  <p className="text-gray-300">Bachelor of Science in Computer Science</p>
                  <p className="text-sm text-gray-400">Salim Habib University (Nov 2021 – Jun 2025)</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gradient-to-b border-l-gold bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-white mb-2">Current Focus</h3>
                  <p className="text-gray-300">
                    SEO Optimization, Data Analytics & Business Intelligence, E-commerce Growth
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <Card className="hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-gold/30">
              <CardHeader>
                <div className="flex flex-col gap-4">
                  <div>
                    <CardTitle className="text-white text-lg sm:text-xl">Data Analytics Intern</CardTitle>
                    <CardDescription className="text-base sm:text-lg text-gray-300">Elevvo Pathways</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-gold/10 text-gold border-gold/20 w-fit text-xs sm:text-sm">
                    Recent Completion
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Completed end-to-end analytics projects across Excel, Python (Pandas, Matplotlib, Seaborn), SQL,
                      and Power BI
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Built interactive sales dashboards, performed customer segmentation (RFM), and time-series
                      forecasting
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Executed web scraping projects using BeautifulSoup & Selenium to analyze job market trends
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Conducted full-cycle analysis on Brazilian E-Commerce Olist dataset, delivering executive-level
                      insights
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Designed Power BI retail dashboard with KPIs, slicers, and regional performance insights
                    </span>
                  </li>
                </ul>

                <div className="mt-6 space-y-4">
                  <h4 className="text-white font-semibold text-sm sm:text-base">Project Portfolio:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/IMG-20250919-WA0006.jpg-wIJO2b7N7Wc336oZP2OrVNGNgXqVbr.jpeg"
                        alt="Excel Sales Data Analysis - Raw dataset with sales metrics and performance indicators"
                        className="w-full h-32 object-cover rounded-lg border border-gray-700"
                        loading="lazy"
                      />
                      <p className="text-xs text-gray-400">Excel Sales Data Analysis</p>
                    </div>

                    <div className="space-y-2">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/IMG-20250919-WA0007.jpg-t4Zt2Qv8oo3AOSqDpQtFxBS1Rg8paY.jpeg"
                        alt="Power BI Dashboard - Comprehensive retail analytics with sales metrics, geographic insights, and product performance"
                        className="w-full h-32 object-cover rounded-lg border border-gray-700"
                        loading="lazy"
                      />
                      <p className="text-xs text-gray-400">Power BI Retail Dashboard</p>
                    </div>

                    <div className="space-y-2">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/IMG-20250919-WA0004.jpg-CNqkaM4eCaWiW4icZYimuCJmzJYQ0b.jpeg"
                        alt="Python Data Analysis Code - Brazilian E-Commerce Olist dataset processing with pandas and visualization libraries"
                        className="w-full h-32 object-cover rounded-lg border border-gray-700"
                        loading="lazy"
                      />
                      <p className="text-xs text-gray-400">Python Data Processing</p>
                    </div>

                    <div className="space-y-2">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/IMG-20250919-WA0005.jpg-BQJFEiTdyBPzwXW4KHYUYM7NeCbv0E.jpeg"
                        alt="Power BI Superstore Dataset - Data modeling interface showing profit margins and sales metrics"
                        className="w-full h-32 object-cover rounded-lg border border-gray-700"
                        loading="lazy"
                      />
                      <p className="text-xs text-gray-400">Superstore Data Modeling</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 bg-transparent">
                    <a
                      href="https://github.com/SyedM7/Data-Analytics-Internship-Tasks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                      aria-label="Open Data Analytics Internship tasks repository on GitHub in a new tab"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Internship Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-gold/30">
              <CardHeader>
                <div className="flex flex-col gap-4">
                  <div>
                    <CardTitle className="text-white text-lg sm:text-xl">Founder</CardTitle>
                    <CardDescription className="text-base sm:text-lg text-gray-300">Graphitee Official</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-gold/10 text-gold border-gold/20 w-fit text-xs sm:text-sm">
                    Jul 2024 – Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 mb-6">
                  <MediaLoader
                    fallback={
                      mediaErrors.has("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20250715-WA0008~2-hepfKRHZdYAWxbiP1cIsVpZZu9yKup.mp4") && (
                        <div className="aspect-video w-full bg-gray-800 rounded-lg flex items-center justify-center">
                          <div className="text-gray-400 text-center">
                            <div className="text-sm">Video unavailable</div>
                            <div className="text-xs mt-1">Graphitee promotional content</div>
                          </div>
                        </div>
                      )
                    }
                  >
                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                      <video
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20250715-WA0008~2-hepfKRHZdYAWxbiP1cIsVpZZu9yKup.mp4"
                        className="w-full h-full object-cover"
                        controls
                        muted
                        preload="metadata"
                        onError={(e) => handleMediaError(e.target.src, "Video")}
                        onLoadStart={() => console.log("[v0] Video loading started:", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20250715-WA0008~2-hepfKRHZdYAWxbiP1cIsVpZZu9yKup.mp4")}
                        onCanPlay={() => console.log("[v0] Video can play:", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20250715-WA0008~2-hepfKRHZdYAWxbiP1cIsVpZZu9yKup.mp4")}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </MediaLoader>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {[
                      {
                        src: "/images/graphitee-lost-soul-back.jpeg",
                        alt: "Lost Souls t-shirt design with pink text on back",
                      },
                      {
                        src: "/images/graphitee-kill-vibe.jpeg",
                        alt: "Please Don't Kill My Vibe t-shirt design with red silhouette",
                      },
                      {
                        src: "/images/graphitee-lost-souls.jpeg",
                        alt: "Lost Souls t-shirt with galaxy design elements",
                      },
                      {
                        src: "/images/graphitee-promo.jpeg",
                        alt: "Graphitee Official promotional image with Order Now branding",
                      },
                    ].map((image, index) => (
                      <MediaLoader
                        key={index}
                        fallback={
                          mediaErrors.has(image.src) && (
                            <div className="w-full h-20 sm:h-24 bg-gray-800 rounded-lg flex items-center justify-center">
                              <div className="text-gray-400 text-xs text-center">Image unavailable</div>
                            </div>
                          )
                        }
                      >
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-20 sm:h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                          onError={(e) => handleMediaError(e.target.src, "Image")}
                          onLoad={() => console.log("[v0] Image loaded successfully:", image.src)}
                          loading="lazy"
                        />
                      </MediaLoader>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Built and managed a Shopify store, generating 50+ organic sales without paid ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Implemented SEO & social media strategies (Instagram, Facebook, TikTok) to drive consistent
                      traffic
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Designed custom graphics and managed the full product lifecycle from design to delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Strengthened brand visibility through organic marketing and customer engagement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-gold/30">
              <CardHeader>
                <div className="flex flex-col gap-4">
                  <div>
                    <CardTitle className="text-white text-lg sm:text-xl">SEO Trainee</CardTitle>
                    <CardDescription className="text-base sm:text-lg text-gray-300">Abbas.co</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-gold/10 text-gold border-gold/20 w-fit text-xs sm:text-sm">
                    Sep 2022 – Feb 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Conducted keyword research and optimized 20+ client websites, improving search visibility and SERP
                      rankings
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Enhanced click-through rates by refining metadata and landing page SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Collaborated with content teams to align SEO strategies with marketing goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Used Google Search Console & keyword planners to track SEO performance and adjust strategies
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-green-500/30 group">
              <MediaLoader
                fallback={
                  mediaErrors.has("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20250418-WA0005%282%29-eS5AQiNoVSk3BU8RGDI9AIUQqzsXx3.mp4") && (
                    <div className="aspect-video w-full bg-gray-800 rounded-t-lg flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="text-sm">Media unavailable</div>
                        <div className="text-xs mt-1">Smart Agriculture System</div>
                      </div>
                    </div>
                  )
                }
              >
                <div className="aspect-video w-full overflow-hidden rounded-t-lg relative">
                  <video
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20250418-WA0005%282%29-eS5AQiNoVSk3BU8RGDI9AIUQqzsXx3.mp4"
                    className="w-full h-full object-cover"
                    controls
                    muted
                    preload="metadata"
                    onError={(e) => {
                      console.log("[v0] Video failed to load:", e.target.src)
                      handleMediaError(e.target.src, "Video")
                      e.target.style.display = "none"
                      e.target.nextElementSibling.style.display = "block"
                    }}
                    onLoadStart={() => console.log("[v0] Video loading started:", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20250418-WA0005%282%29-eS5AQiNoVSk3BU8RGDI9AIUQqzsXx3.mp4")}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <img
                    src="/images/smart-agriculture.png"
                    alt="Smart Agriculture System with IoT monitoring, automated irrigation, and farm management"
                    className="w-full h-full object-cover"
                    style={{ display: "none" }}
                    onError={(e) => handleMediaError(e.target.src, "Image")}
                    onLoad={() => console.log("[v0] Fallback image loaded:", "/images/smart-agriculture.png")}
                  />
                </div>
              </MediaLoader>
              <CardHeader>
                <CardTitle className="text-white">Smart Agriculture System</CardTitle>
                <CardDescription className="text-gray-300">IoT & Data Visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  IoT-based monitoring of soil and water with automated irrigation & Grafana dashboards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    IoT
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Grafana & Influx DB
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Automation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500/30 group">
              <CardHeader>
                <CardTitle className="text-white">Brazilian E-Commerce Analysis</CardTitle>
                <CardDescription className="text-gray-300">Data Analytics & Business Intelligence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Full-cycle analysis of Brazilian E-Commerce Olist dataset, delivering executive-level insights on
                  customer behavior, sales trends, and business performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Pandas
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Data Analysis
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Business Intelligence
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Executive Reporting
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500/30 group">
              <MediaLoader
                fallback={
                  mediaErrors.has("/images/seo-performance.png") && (
                    <div className="aspect-video w-full bg-gray-800 rounded-t-lg flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="text-sm">Image unavailable</div>
                        <div className="text-xs mt-1">SEO Performance Dashboard</div>
                      </div>
                    </div>
                  )
                }
              >
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src="/images/seo-performance.png"
                    alt="Google Search Console performance dashboard showing 1.54K clicks, 63.8K impressions, and growth trends"
                    className="w-full h-full object-cover"
                    onError={(e) => handleMediaError(e.target.src, "Image")}
                    onLoad={() => console.log("[v0] SEO performance image loaded successfully")}
                    loading="lazy"
                  />
                </div>
              </MediaLoader>
              <CardHeader>
                <CardTitle className="text-white">E-commerce Website SEO</CardTitle>
                <CardDescription className="text-gray-300">SEO Optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Improved site structure and increased organic traffic through comprehensive SEO strategies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    SEO
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Analytics
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Traffic Growth
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500/30 group">
              <CardHeader>
                <CardTitle className="text-white text-lg">Academic Projects</CardTitle>
                <CardDescription className="text-gray-300">Programming & Database</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Wordly Game, PSL Drafting, Car Showroom Management - demonstrating programming and problem-solving
                  skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Programming
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Database
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Problem Solving
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Skills & Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">SEO & Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Google Analytics
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Search Console
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    SEMrush
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Moz
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Shopify
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    WordPress
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Pandas
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Matplotlib
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Seaborn
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Java
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    C++
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">Data & Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Power BI
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Tableau
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Excel
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    SQL
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Data Cleaning
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Customer Segmentation
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Time-Series Forecasting
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">Web Scraping & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    BeautifulSoup
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Selenium
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Data Extraction
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Market Analysis
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">Business Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    KPI Dashboards
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Executive Reporting
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Data Insights
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Business Analytics
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    RFM Analysis
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">Operating Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Windows Installation
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Linux Administration
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    macOS Support
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">Network Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    LAN Setup
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    WiFi Configuration
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Network Troubleshooting
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">Software Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    MS Office Suite
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Security Tools
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Endpoint Protection
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Driver Installation
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    System Support Software
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">Hardware Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Hardware Diagnostics
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Component Installation
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    System Maintenance
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Performance Optimization
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">Troubleshooting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    System Diagnostics
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Error Resolution
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Performance Issues
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Configuration Problems
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Problem-Solving
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Teamwork
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Time Management
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="mt-8 sm:mt-12">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gold bg-clip-text text-transparent mb-6 text-center">
              Certifications
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-gold bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-white mb-2">
                    Microsoft Certified: Power BI Data Analyst Associate
                  </h4>
                  <p className="text-gray-300">Expected September 2025</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gold bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-white mb-2">Deloitte Data Analytics Simulation</h4>
                  <p className="text-gray-300">Built Tableau dashboard & analyzed forensic datasets</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-navy via-blue-900 to-navy text-white relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gold bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>

          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto px-4">
            Ready to boost your website's organic traffic and build a strong online presence? Let's discuss how I can
            help grow your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold" />
              <span className="break-all sm:break-normal">ibadtoqir@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold" />
              <span>+92 3258971498</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold" />
              <span>Karachi, Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-gold" />
              <a href="https://github.com/ibadullah" className="hover:text-gold">
                ibadullah
              </a>
            </div>
          </div>

          <Button className="w-full sm:w-auto bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-navy font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base">&copy; 2025 Ibad Ullah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
