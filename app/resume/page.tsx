"use client"

import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Resume() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header with navigation */}
      <div className="bg-gray-100 px-6 py-4 print:hidden">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <Button onClick={() => window.print()} className="bg-gold hover:bg-yellow-600 text-black">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 print:py-0">
        <div className="mb-8 print:mb-6">
          <h1 className="text-4xl font-bold mb-2">Ibad Ullah</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-black">
            <span>Karachi, Pakistan</span>
            <span>+92 3258971498</span>
            <span>ibadtoqir@gmail.com</span>
            <a
              href="https://ibadullah-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              ibadullah-portfolio.vercel.app
            </a>
            <a
              href="https://github.com/ibadtoqir"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              github.com/ibadtoqir
            </a>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>

          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Data Analytics Intern</h3>
                  <p className="text-gray-700">Elevvo Pathways</p>
                </div>
                <span className="text-sm text-gray-600">2025</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
                <li>Built interactive dashboards using Power BI, Excel, Python (Pandas, Matplotlib, Seaborn)</li>
                <li>Performed customer segmentation (RFM analysis) and time-series forecasting</li>
                <li>Web scraping with BeautifulSoup & Selenium for job market analysis</li>
                <li>Full-cycle analysis on Brazilian E-Commerce dataset</li>
              </ul>
              <a
                href="https://github.com/SyedM7/Data-Analytics-Internship-Tasks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:underline mt-2 text-sm print:text-black"
              >
                <Github className="w-4 h-4" />
                github.com/SyedM7/Data-Analytics-Internship-Tasks
              </a>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold">Founder</h3>
                  <p className="text-gray-700">Graphitee Official</p>
                </div>
                <span className="text-sm text-gray-600">Jul 2024 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
                <li>Built Shopify store with 50+ organic sales without paid ads</li>
                <li>Implemented SEO and social media strategies across Instagram, Facebook, TikTok</li>
                <li>Designed custom graphics and managed product lifecycle</li>
              </ul>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold">SEO Trainee</h3>
                  <p className="text-gray-700">Abbas.co</p>
                </div>
                <span className="text-sm text-gray-600">Sep 2022 – Feb 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
                <li>Optimized 20+ websites for search visibility and SERP rankings</li>
                <li>Enhanced click-through rates through metadata and landing page SEO</li>
                <li>Used Google Search Console and keyword planners for performance tracking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-700">Salim Habib University</p>
            </div>
            <span className="text-sm text-gray-600">Nov 2021 – Jun 2025</span>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Data Analytics</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Pandas</Badge>
                <Badge variant="secondary">Matplotlib</Badge>
                <Badge variant="secondary">Seaborn</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">Power BI</Badge>
                <Badge variant="secondary">Tableau</Badge>
                <Badge variant="secondary">Excel</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Web & SEO</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Google Analytics</Badge>
                <Badge variant="secondary">Search Console</Badge>
                <Badge variant="secondary">SEMrush</Badge>
                <Badge variant="secondary">Shopify</Badge>
                <Badge variant="secondary">WordPress</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Programming</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">C++</Badge>
                <Badge variant="secondary">BeautifulSoup</Badge>
                <Badge variant="secondary">Selenium</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Brazilian E-Commerce Analysis</h3>
              <p className="text-gray-700 text-sm">
                Python, Pandas, SQL - Customer segmentation and predictive modeling on Olist dataset
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Interactive Retail Dashboard</h3>
              <p className="text-gray-700 text-sm">Power BI, SQL - KPI dashboard with regional performance insights</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Job Market Analysis</h3>
              <p className="text-gray-700 text-sm">
                BeautifulSoup, Selenium - Automated web scraping for in-demand skills analysis
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Smart Agriculture System</h3>
              <p className="text-gray-700 text-sm">
                IoT, Grafana, InfluxDB - Automated irrigation with real-time monitoring
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>

          <div className="space-y-2">
            <div>
              <h3 className="font-semibold">Elevvo Pathways Data Analytics Program</h3>
              <p className="text-gray-700 text-sm">2024</p>
            </div>

            <div>
              <h3 className="font-semibold">Deloitte Data Analytics Simulation (Forage)</h3>
              <p className="text-gray-700 text-sm">Tableau dashboard & forensic analysis</p>
            </div>

            <div>
              <h3 className="font-semibold">Verizon Cloud Platform Simulation (Forage)</h3>
              <p className="text-gray-700 text-sm">Python VPN testing & security recommendations</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
