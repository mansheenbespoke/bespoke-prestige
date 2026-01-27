import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "@/components/navbar"
import { HomePage } from "@/components/home-page"
import PrivacyPolicy from "@/components/privacy-policy"
import { Footer } from "@/components/footer"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <main className="min-h-screen bg-background">
            <Navbar />
            <HomePage />
            <Footer />
          </main>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
