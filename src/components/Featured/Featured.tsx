import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

interface FeaturedProps {
  addToCart: (product: Product) => void;
}

const Featured: React.FC<FeaturedProps> = ({ addToCart }) => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Buzo Oversized',
      category: 'Buzos',
      price: 129.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 2,
      name: 'Remera Estampada',
      category: 'Remeras',
      price: 49.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 3,
      name: 'Gorra Snapback',
      category: 'Accesorios',
      price: 34.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 4,
      name: 'Buzo con Capucha',
      category: 'Buzos',
      price: 139.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80',
    },
  ]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    // Aquí podrías agregar una notificación o feedback visual
  };
  return (
    <section id="featured" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Productos Destacados
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Descubre nuestras piezas más populares de la temporada
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center lg:w-full lg:h-full"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-lg font-medium text-pink-600">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={`${
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                        } h-5 w-5 flex-shrink-0`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {product.rating}/5
                  </p>
                </div>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full flex items-center justify-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
                >
                  <ShoppingBagIcon className="h-5 w-5 mr-2" />
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-200"
          >
            Ver tienda completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default Featured;
