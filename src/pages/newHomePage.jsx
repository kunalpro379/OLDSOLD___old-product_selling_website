// import React, { useState } from 'react';
// import { HomeIcon, UserIcon, BellIcon } from '@heroicons/react/24/solid';
// import { ShoppingCartIcon, ChatBubbleLeftIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';
// import productsData from '../data/RecommendedProducts.json';
// import logo from '../assets/Images/logo/logo.png';
// const HomePage = () => {
//   const { recommended_products } = productsData;
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleProductClick = (product) => {
//     console.log('Product clicked:', product);
//   };

//   const items = Array.from({ length: 12 }, (_, index) => `Item ${index + 1}`);

//   return (
//     <div className="relative h-screen overflow-hidden bg-gradient-to-br from-[#000000] via-[#001834] to-[#008b6d]">
//       <header className="w-full h-37 bg-gradient-to-r from-black via-[#001834] to-[#00a2b4] border-b border-gray-800 shadow-lg">
//         <div className="container mx-auto px-6">
//           <div className="flex items-center justify-between h-20">
//             {/*  Logo and Search */}
//             <div className="flex items-center space-x-8">
//               {/* Logo Group */}
//               <div className="flex items-center space-x-4">
//                 <img 
//                   src={logo} 
//                   alt="Loopify" 
//                   className="h-16 w-auto object-contain my-4 hover:opacity-90 transition-opacity duration-300" 
//                 />
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300"></div>
//               </div>
              
//               {/* Search Bar */}
//               <div className="hidden sm:flex items-center bg-white/10 rounded-lg px-4 py-2 mx-1 space-x-2 border border-white/20">
//                 <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="bg-transparent border-none outline-none text-white placeholder-white/60 w-64"
//                 />
//               </div>
//             </div>

//             {/* */}
//             <div className="hidden lg:flex flex-1 justify-center items-center">
//               <nav className="flex items-center space-x-8">
//                 {['        ', '     ', '      ', '      ', '     '].map((item, i) => (
//                   <button
//                     key={i}
//                     className="px-6 py-2 text-white/90 hover:text-white rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-0.5"
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             {/* User Profile  */}
//             <div className="flex items-center space-x-6">
//               <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
//                 <BellIcon className="h-6 w-6 text-white" />
//               </button>
//               <div className="relative group">
//                 <button className="flex items-center space-x-3 p-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
//                   <UserIcon className="h-6 w-6 text-white" />
//                   <span className="hidden md:block text-white font-medium">Profile</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="flex flex-1 h-[calc(100vh-5rem)] overflow-hidden">
//         {/* Sidebar */}
//         <aside className="hidden md:block w-20 border-r border-white/10 bg-black/20">
//           <div className="py-8 px-2">
//             <nav className="space-y-6">
//               {[HomeIcon, RocketLaunchIcon, ShoppingCartIcon, ChatBubbleLeftIcon, BellIcon, UserIcon].map((Icon, i) => (
//                 <button
//                   key={i}
//                   className="w-full p-3 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300"
//                 >
//                   <Icon className="h-6 w-6 text-white" />
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6 overflow-y-auto">
//           {/* Featured Section */}
//           <div className="grid md:grid-cols-2 gap-6 mb-8">
//             <div className="h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300"></div>
//             <div className="h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"></div>
//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {recommended_products.map((product, index) => (
//               <div
//                 key={product.id}
//                 className="group relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-105 border border-white/10"
//                 onClick={() => handleProductClick(product)}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <div className="p-6">
//                   <div className="relative mb-6 overflow-hidden rounded-xl">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className={`w-full h-48 object-cover transition-transform duration-500 ${
//                         hoveredIndex === index ? 'scale-110' : 'scale-100'
//                       }`}
//                     />
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
//                   <p className="text-lg text-white/80 mb-3">${product.price}</p>
//                   <p className="text-sm text-white/60">
//                     Uploaded on: {new Date(product.upload_date).toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/*  Content */}
//           <div className="mt-8 space-y-6">
//             <div className="h-40 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl shadow-lg hover:shadow-gray-700/30 transition-all duration-300"></div>
//             <div className="h-40 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl shadow-lg hover:shadow-gray-700/30 transition-all duration-300"></div>
//           </div>
//         </main>
//       </div>

//       {/* AI Assistant */}
//       <div className="fixed bottom-8 right-8 z-50">
//         <button className="group relative">
//           <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-xl hover:shadow-cyan-500/50 transition-all duration-500 flex items-center justify-center cursor-pointer transform group-hover:scale-110">
//             <svg 
//               className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-125" 
//               fill="currentColor" 
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
//               <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
//             </svg>
//           </div>
//           <div className="absolute inset-0">
//             <div className="absolute inset-0 animate-ping bg-cyan-400 opacity-20 rounded-full"></div>
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;