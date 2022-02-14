import React, { useContext }from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  const remaining = (e) => {
    if(e.length >= 2){
      return `${e.length} livros`;
    } else if(e.length === 1) {
      return `um livro`;
    } else {
      return `nenhum livro`
    }
  }
  return (
    <div className="navbar">
      <h1>Faria Reading List</h1>
      <p>Atualmente você possui {remaining(books)} para ler...</p>
    </div>
   );
}
 
export default Navbar;

