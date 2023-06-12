import React from 'react'
import { useParams } from 'react-router-dom'
import Books from '../books';
import { Link } from "react-router-dom";

const CardInfo = () => {
    let id=useParams().bookId;
    let book=Books.find(book=>book.id===parseInt(id));
  return (
    <div className='book__container container-fluid my-5 py-5'>
            <div className="col-12" id={book.id}>
         <h1 className='mb-5 mt-3 fw-bold text-center'>{book.title}</h1>
         <div className="book__container d-flex justify-content-evenly flex-wrap-reverse">
         <div className='book__info w-50 mt-1 ms-3'>
         <p className='text__single text-black-50'><b className='text-black'>Auther :</b> {book.author}</p>
         <p className='text__single text-black-50'><b className='text-black'>Language :</b> {book.language}</p>
         <p className='text__single text-black-50'><b className='text-black'>Country :</b> {book.country}</p>
         <p className='text__single text-black-50'><b className='text-black'>Pages :</b> {book.pages}</p>
         <p className='text__single text-black-50'><b className='text-black'>Year :</b> {book.year}</p>
         <p className='text__single text-black-50'><b className='text-black'>Description :</b> {book.description}</p>
         <div className="buttons__container d-flex gap-2 justify-content-center mt-5 flex-wrap">
         <Link to="/" style={{textDecoration:'none'}}>
         <button class="button" id={book.id}><span>Return </span></button>
      </Link>
      <Link to={book.link} style={{textDecoration:'none'}}>
         <button class="button" style={{width:"225px"}} id={book.id}><span >View on Wikipedia </span></button>
      </Link>
         </div>

         </div>
         <div className="single__img__container mb-2">
         <img src={book.imageLink} alt="ImageNotFound" />
         </div>
         </div>
         </div>
    </div>
  )
}

export default CardInfo
