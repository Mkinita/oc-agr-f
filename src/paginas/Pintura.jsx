import ListaEmbalaje from "../components/ListaEmbalaje"
import Footer from "../components/Footer"

const Pintura = () => {
  return (
    <>
        <div className="border-8 border-transparent">
            <ListaEmbalaje/>
            
        </div>

        <div className="bg-white border-8 border-transparent">
            {/* md:block md:w-1/1 */}
              <Footer/>
      </div>
    </>



  )
}

export default Pintura