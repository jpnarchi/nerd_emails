import React, { useState } from 'react';

const products = [
  // Hombre
  { 
    id: 1, 
    name: 'Chaqueta Urbana Negra', 
    category: 'man', 
    price: 129.99, 
    image: 'https://img.freepik.com/foto-gratis/chaqueta-cuero-negra-hombre-aislada_125540-1090.jpg' 
  },
  { 
    id: 2, 
    name: 'Sudadera Oversize Gris', 
    category: 'man', 
    price: 79.99, 
    image: 'https://img.freepik.com/foto-gratis/hombre-guapo-sudadera-gris-clara-burlan_158595-5324.jpg' 
  },
  { 
    id: 3, 
    name: 'Jeans Slim Fit', 
    category: 'man', 
    price: 89.99, 
    image: 'https://img.freepik.com/foto-gratis/pantalones-mezclilla-hombre_1203-8546.jpg' 
  },
  
  // Mujer
  { 
    id: 4, 
    name: 'Blazer Urbano Blanco', 
    category: 'woman', 
    price: 149.99, 
    image: 'https://img.freepik.com/foto-gratis/mujer-chaqueta-blanca_1303-10169.jpg' 
  },
  { 
    id: 5, 
    name: 'Vestido Minimalista Negro', 
    category: 'woman', 
    price: 99.99, 
    image: 'https://img.freepik.com/foto-gratis/mujer-vestido-negro_1303-10171.jpg' 
  },
  { 
    id: 6, 
    name: 'Top Crop Deportivo', 
    category: 'woman', 
    price: 59.99, 
    image: 'https://img.freepik.com/foto-gratis/mujer-top-crop-negro_1303-10168.jpg' 
  },
  
  // Accesorios
  { 
    id: 7, 
    name: 'Gafas de Sol Urbanas', 
    category: 'accessories', 
    price: 79.99, 
    image: 'https://img.freepik.com/foto-gratis/gafas-sol-negras_1203-3021.jpg' 
  },
  { 
    id: 8, 
    name: 'Mochila Minimalista', 
    category: 'accessories', 
    price: 89.99, 
    image: 'https://img.freepik.com/foto-gratis/mochila-negra_1203-3022.jpg' 
  }
];

const ProductGrid = ({ initialCategory = 'all' }) => {
  const [filter, setFilter] = useState(initialCategory);

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center mb-6 space-x-4">
        <button 
          onClick={() => setFilter('all')} 
          className={`px-4 py-2 ${filter === 'all' ? 'bg-black text-white' : 'bg-gray-200'}`}
        >
          Todos
        </button>
        <button 
          onClick={() => setFilter('man')} 
          className={`px-4 py-2 ${filter === 'man' ? 'bg-black text-white' : 'bg-gray-200'}`}
        >
          Hombre
        </button>
        <button 
          onClick={() => setFilter('woman')} 
          className={`px-4 py-2 ${filter === 'woman' ? 'bg-black text-white' : 'bg-gray-200'}`}
        >
          Mujer
        </button>
        <button 
          onClick={() => setFilter('accessories')} 
          className={`px-4 py-2 ${filter === 'accessories' ? 'bg-black text-white' : 'bg-gray-200'}`}
        >
          Accesorios
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 text-center group">
            <div className="overflow-hidden mb-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
              Añadir al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;