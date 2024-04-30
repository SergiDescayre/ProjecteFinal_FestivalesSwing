// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Borrar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="flex justify-between items-center">
//         <h1 className="text-white text-2xl">Mi Sitio</h1>
//         <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? 'Cerrar' : 'Menú'}
//         </button>
//       </div>

//       {/* Menú desplegable */}
//       <div className={`md:hidden ${menuOpen ? "block" : "hidden"} h-[50%] bg-gray-700 py-4 px-2 absolute w-full left-0 bottom-0 transition-transform duration-1000 ease-in-out transform ${menuOpen ? "translate-y-0" : "translate-y-full"}`}>
//         <ul className="flex flex-col items-center">
//           <li>
//             <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-white py-2">
//               Inicio
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" onClick={() => setMenuOpen(false)} className="text-white py-2">
//               Acerca de
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="text-white py-2">
//               Contacto
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Borrar;
