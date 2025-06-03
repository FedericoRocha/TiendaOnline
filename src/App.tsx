import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Featured from './components/Featured/Featured';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  // Estado solo para controlar la visibilidad del carrito
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Mock de 2 productos en el carrito para la demo
  const cartItemCount = 2;

  // Función mock para añadir al carrito
  const addToCart = () => {
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <Hero />
        <Featured addToCart={addToCart} />
        <About />
      </main>
      
      <Footer />
      
      {/* Modal de carrito de ejemplo */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              onClick={() => setIsCartOpen(false)}
            ></div>
            
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle">&#8203;</span>
            
            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Carrito de compras</h3>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">
                        Esta es una demostración del carrito. En una implementación real, aquí verías los productos seleccionados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsCartOpen(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
