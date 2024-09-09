
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext'; 


function Home() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className={isDarkMode ? 'dark' : 'light'}>
            {/* Navbar */}
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">JST ONLINE STORE</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/products" className="mr-5 hover:text-gray-900"> See Products</Link>
                        <Link to="/Register" className="mr-5 hover:text-gray-900">Register!</Link>
                        <Link to="/third" className="mr-5 hover:text-gray-900">Third Link</Link>
                        <Link to="/products" className="mr-5 hover:text-gray-900">Fourth Link</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        CART
                    </button>

                    {/* Dark Mode Toggle */}
                    <button
                        className="ml-4 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded"
                        onClick={toggleTheme}
                    >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="bg-gray-100 min-h-screen flex flex-col items-center">
                <main className="flex-grow container mx-auto p-4">
                    <section className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Welcome to Our Store</h2>
                        <p className="text-lg mb-8">Discover the best products at amazing prices.</p>
                        <Link to="/products" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Shop Now</Link>
                    </section>
                </main>
                <footer className="bg-gray-800 text-white w-full p-4 text-center">
                    <p>&copy; 2024 My Online Store. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default Home;



