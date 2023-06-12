import React, { useState } from 'react'
import Books from '../books'
import { Link } from "react-router-dom";

const Card = () => {
    let [filteredBooks,setFilteredBooks]=useState(Books);
    function search(e){
        let value = e.target.value.toLowerCase().replace(/\s/g, '');
        
        setFilteredBooks(Books.filter(
        (book)=>
    book.title.toLowerCase().replace(/\s/g, '').includes(value) ||
    book.author.toLowerCase().replace(/\s/g, '').includes(value) ||
    book.language.toLowerCase().replace(/\s/g, '').includes(value) ||
    book.year.toString().replace(/\s/g, '').includes(value) ||
    book.pages.toString().replace(/\s/g, '').includes(value)
        )
        );
    }
    let result=""
    if (filteredBooks.length===0){
        result=<h1 className='text-center pb-5'>No Books Found</h1>
    }else{
        result=filteredBooks.map((book,index)=>{
            console.log(filteredBooks.length);
    
        
            if(filteredBooks.length===index+1 && index%2===0){
                return(
                    <>
                    <div className="card col-10 col-sm-10 col-md-5 bg-light" id={index}>
                 <h3 className='mb-5 mt-3 fw-bold text-center'>{book.title}</h3>
                 <div className="book__container d-flex justify-content-between flex-wrap-reverse">
                 <div className='book__info w-50 mt-1'>
                 <p className='text text-black-50'><b className='text-black'>Auther :</b> {book.author}</p>
                 <p className='text text-black-50'><b className='text-black'>Language :</b> {book.language}</p>
                 <p className='text text-black-50'><b className='text-black'>Country :</b> {book.country}</p>
                 <p className='text text-black-50'><b className='text-black'>Pages :</b> {book.pages}</p>
                 <p className='text text-black-50'><b className='text-black'>Year :</b> {book.year}</p>
                 <Link to={`/${book.id}`} style={{textDecoration:'none'}}>
                 <button class="button" id={book.id}><span>See more </span></button>
              </Link>
                 </div>
                 <div className="img__container mb-2">
                 <img src={book.imageLink} alt="ImageNotFound" />
                 </div>
                 </div>
                 </div>
        
                    <div className="col-10 col-sm-10 col-md-5 "></div>
                    </>
                )
            }else{
        
                return (
                    <div className="card col-10 col-sm-10 col-md-5 bg-light" id={index}>
                 <h3 className='mb-5 mt-3 fw-bold text-center'>{book.title}</h3>
                 <div className="book__container d-flex justify-content-between flex-wrap-reverse">
                 <div className='book__info w-50 mt-1'>
                 <p className='text text-black-50'><b className='text-black'>Auther :</b> {book.author}</p>
                 <p className='text text-black-50'><b className='text-black'>Language :</b> {book.language}</p>
                 <p className='text text-black-50'><b className='text-black'>Country :</b> {book.country}</p>
                 <p className='text text-black-50'><b className='text-black'>Pages :</b> {book.pages}</p>
                 <p className='text text-black-50'><b className='text-black'>Year :</b> {book.year}</p>
                 <Link to={`/${book.id}`} style={{textDecoration:'none'}}>
                 <button class="button" id={book.id}><span>See more </span></button>
              </Link>
                 </div>
                 <div className="img__container mb-2">
                 <img src={book.imageLink} alt="ImageNotFound" />
                 </div>
                 </div>
                 </div>
                )
        
        
            }
        }
    
    
    
    
        )
    }

  return (
    <>



    <h1 className='text-center'><b>SIMPLYREAD</b></h1>
    <div className='input__box w-100' id='input-search'><input type="text" placeholder='search' onChange={(event) =>search(event)}/></div>
    
    
     
    {result}

    
    </>
  )
}

export default Card
