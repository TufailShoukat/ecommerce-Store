
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products', { timeout: 5000 });
                setProducts(response.data.products);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p className="text-center py-4">Loading...</p>;
    if (error) return <p className="text-center py-4">{error}</p>;

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <header className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">My Online Store</h1>
                </div>
            </header>
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map(product => (
                        <div 
                            key={product.id} 
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg border-2 border-gray-300 hover:border-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col"
                            style={{ background: 'linear-gradient(135deg, #f9fafb, #e5e7eb)' }}
                        >
                            <img 
                                src={product.thumbnail} 
                                alt={product.title} 
                                className="w-full h-40 object-cover mb-4 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110" 
                            />
                            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-700 mb-2 text-sm line-clamp-2">{product.description}</p>
                            <p className="text-lg font-bold mb-4">${product.price}</p>
                            <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Products;




