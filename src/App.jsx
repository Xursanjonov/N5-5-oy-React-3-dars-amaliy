import Header from "./components/layout/header/Header"
import Footer from "./components/layout/footer/Footer"
import Hero from "./components/hero/Hero"
import { Fragment } from "react"

function App() {

  return (
    <Fragment>
      <Header />
      <main> <Hero /> </main>
      <Footer />
    </Fragment>
  )
}

export default App
