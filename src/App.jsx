import Header from "./components/layout/header/Header"
import Footer from "./components/layout/footer/Footer"
import Hero from "./components/hero/Hero"
import React, { Fragment } from "react"

function App() {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <Fragment>
      <Header setOpenModal={setOpenModal} />
      <main className="">
        <Hero openModal={openModal} setOpenModal={setOpenModal} />
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
