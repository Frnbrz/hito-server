
import Logos from '@/components/atoms/logos'

function Dashboard() {



  return (
    <main>
      <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h3 className="text-2xl sm:text-4xl leading-none font-bold tracking-tight text-purple-200">Hito Cliente
        </h3>
        <h1 className="text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-purple-400">
          Front
          <span className="text-[#61dafb]"> React + Typescript</span>
        </h1>
        <p className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium mb-10 sm:mb-11 flex gap-2 align-middle">
          Backend con:
          <code className="font-mono text-[#DF234F] font-bold"> nestjs</code>
          <div className="top-12 right-12 opacity-10 lg:opacity-50">
            <Logos.Nest className="w-32 h-32" />
          </div>
        </p>
        <div className="absolute top-12 right-12 opacity-10 lg:opacity-50">
          <Logos.React className="w-96 h-96" />
        </div>
      </header>

      <section className="h-[calc(100vh-580px)]">
        <div className="bg-transparent text-center">
          <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-purple-200">
            El mejor Blog <br /><span className="text-primary">del mundo</span>
          </h1>



        </div>
      </section>

      <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
        <a href="https://github.com/frnbrz">
          Francisco Briz @ {new Date().getFullYear()}
        </a>
      </footer>


    </main >
  )
}
export default Dashboard
