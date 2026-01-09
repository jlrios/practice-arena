import { 
  Header, 
  Hero, 
  Features, 
  MoreInformation,
  Testimonials,
  Form,
  Footer
} from "./components"

function App() {
  return (
    <main className="w-[375px] m-auto">
      <section className="bg-Navy-850 p-6 h-[420px] relative">
        <Header />
        <img className="relative z-10 mt-12" src="/images/illustration-intro.png" alt="Intro illustration." />
        <img className="absolute bottom-0 left-0" src="/images/bg-curvy-mobile.svg" alt="Curvy mobile." />
      </section>
      <section className="bg-Navy-900 p-6 pb-[300px]">
        <Hero />
        <Features />
        <MoreInformation />
        <Testimonials />
      </section>
      <section className='bg-Navy-950 relative'>
        <Form />
        <Footer />
      </section>
    </main>
  )
}

export default App

