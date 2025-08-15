"use client"
import React, { useState, useEffect, useRef } from "react"
import { Search, CheckCircle, XCircle } from "lucide-react"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"

// ===== Local UI Components =====
function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`}
    >
      {children}
    </button>
  )
}

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`}
    />
  )
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border shadow-sm ${className}`}>
      {children}
    </div>
  )
}

function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

// Counter animation hook
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  return { count, setIsVisible }
}

// Stats counter component
function StatsCounter({ value, label, suffix = "+" }) {
  const { count, setIsVisible } = useCounter(value)
  const ref = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [setIsVisible])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-bold font-mono bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base mt-2 font-sans bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
        {label}
      </div>
    </div>
  )
}

// Certificate search result component
function SearchResult({ results }) {
    if (!results || results.length === 0) {
      return (
        <Card className="bg-black border border-gray-800 mt-6">
          <CardContent className="p-6 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500 font-semibold">No record found</span>
          </CardContent>
        </Card>
      )
    }
  
    return (
      <div className="mt-6 space-y-4">
        {results.map((result) => (
          <Card key={result.ID} className="bg-black border border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300 font-semibold">Certificate Verified</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Name:</span>
                  <span className="ml-2 text-white font-medium">{result.Name}</span>
                </div>
                <div>
                  <span className="text-gray-400">College:</span>
                  <span className="ml-2 text-white font-medium">{result.College}</span>
                </div>
                <div>
                  <span className="text-gray-400">Duration:</span>
                  <span className="ml-2 text-white font-medium">{result.Duration}</span>
                </div>
                <div>
                  <span className="text-gray-400">Field:</span>
                  <span className="ml-2 text-white font-medium">{result.Domain}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
}

export default function CertificateVerification() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [graduatesData, setGraduatesData] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredTableData, setFilteredTableData] = useState([])

  const placeholders = [
    "AVHVU0006",
    "Nitte Meenakshi Institute of Technology, Bengaluru",
    "Web Development",
    "6 Months",
    "Krisha Ranka",
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/interns")
        const data = await res.json()
        const internData = data.data.reverse() || []
        setGraduatesData(internData)
        setFilteredTableData(internData) // Initialize table with full data
      } catch (error) {
        console.error("Error fetching interns:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      // If search is empty, reset to show all data
      setSearchResult(null)
      setHasSearched(false)
      setFilteredTableData(graduatesData)
      return
    }
  
    await new Promise((resolve) => setTimeout(resolve, 800))
  
    const lowerQuery = searchQuery.toLowerCase()
  
    const foundResults = graduatesData.filter(
      (grad) =>
        grad.ID.toLowerCase().includes(lowerQuery) ||
        grad.Name.toLowerCase().includes(lowerQuery) ||
        grad.College.toLowerCase().includes(lowerQuery) ||
        grad.Duration.toLowerCase().includes(lowerQuery) ||
        grad.Domain.toLowerCase().includes(lowerQuery)
    )
  
    setSearchResult(foundResults)
    setHasSearched(true)
    setFilteredTableData(foundResults) // Update table to show only matching results
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Stats + Search Combined Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-8">
            <StatsCounter value={500} label="Students Trained" />
            <StatsCounter value={25} label="Colleges Connected" />
            <StatsCounter value={10} label="Internship Fields" />
          </div>

          {/* Search Box */}
          <div className="text-center">
            <h2 className="sm:mb-6 text-xl text-center sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent ">
              Verify Certificate
            </h2>

            <div className="flex gap-4 justify-center mt-8">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={(e) => setSearchQuery(e.target.value)}
                onSubmit={handleSearch}
              />
            </div>
          </div>

          {hasSearched && <SearchResult results={searchResult} />}
        </div>
      </section>

      {/* Graduates List */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black rounded-lg border border-gray-800 overflow-hidden">
            <div className="h-[50vh] overflow-y-auto overflow-x-auto">
              {loading ? (
                <div className="p-6 text-center text-gray-400">Loading interns...</div>
              ) : (
                <table className="w-full min-w-max">
                  <thead className="sticky top-0 bg-black z-10">
                    <tr>
                      <th className="text-left py-4 px-4 font-semibold text-gray-300 whitespace-nowrap">Certificate ID</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-300 whitespace-nowrap">Name</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-300 whitespace-nowrap">Domain</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-300 whitespace-nowrap">College</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-300 whitespace-nowrap">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTableData.map((graduate) => (
                      <tr
                        key={graduate.ID}
                        className="border-t border-gray-800 hover:bg-gray-800 transition-colors duration-200"
                      >
                        <td className="py-4 px-4 font-mono text-gray-300 whitespace-nowrap">{graduate.ID}</td>
                        <td className="py-4 px-4 text-white whitespace-nowrap">{graduate.Name}</td>
                        <td className="py-4 px-4 text-gray-400 whitespace-nowrap">{graduate.Domain}</td>
                        <td className="py-4 px-4 text-gray-400 whitespace-nowrap">{graduate.College}</td>
                        <td className="py-4 px-4 text-gray-400 whitespace-nowrap">{graduate.Duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}