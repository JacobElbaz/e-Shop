import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



function ProductEdit() {
  const [details, setDetails] = useState({
    user: '',
    name: '',
    image: '',
    category: '',
    genre: '',
    description: '',
    price: '',
    countInStock: '',
    releaseDate: new Date().toISOString().split('T')[0],
  });

  const categoryOptions = [
    { title: '', value: '' },
    { title: 'Sony', value: 'sony' },
    { title: 'Nintendo', value: 'nintendo' },
    { title: 'Xbox', value: 'xbox' },
    { title: 'Others', value: 'others' },
  ];

  const genreOptions = [
    { title: '', value: '' },
    { title: 'PS4 games', value: 'ps4 games' },
    { title: 'PS5 games', value: 'ps5 games' },
    { title: 'Switch games', value: 'switch games' },
    { title: 'Xbox games', value: 'xbox games' },
    { title: 'Others', value: 'others' },
  ];
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userError = document.querySelector('.user.error');
    const nameError = document.querySelector('.name.error');
    //const imageError = document.querySelector(".image.error");
    const categoryError = document.querySelector('.category.error');
    const genreError = document.querySelector('.genre.error');
    const descriptionError = document.querySelector('.description.error');
    const priceError = document.querySelector('.price.error');
    const countInStockError = document.querySelector('.countInStock.error');

    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}api/product/`,
      data: details,
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          userError.innerHTML = res.data.errors.user;
          nameError.innerHTML = res.data.errors.name;
          //imageError.innerHTML = res.data.errors.image;
          categoryError.innerHTML = res.data.errors.category;
          genreError.innerHTML = res.data.errors.genre;
          descriptionError.innerHTML = res.data.errors.description;
          priceError.innerHTML = res.data.errors.price;
          countInStockError.innerHTML = res.data.errors.countInStock;
        } else {
          navigate('/admin/productList');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Link to='/admin/productList' className='btn btn-light my-3'>
          Go back
      </Link>
      <div className="Signup">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Edit Product</h2>
          <div className="form-group">
            <label htmlFor="user">User:</label>
            <input
              type="text"
              name="user"
              id="user"
              onChange={(e) =>
                setDetails({ ...details, user: e.target.value })
              }
              value={details.user}
            />
            <div className="user error"></div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) =>
                setDetails({ ...details, name: e.target.value })
              }
              value={details.name}
            />
            <div className="name error"></div>
            </div>
            

            <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="category"
              name="category"
              id="category"
              onChange={(e) =>
                setDetails({ ...details, category: e.target.value })
              }
              value={details.category}
            />
            <div className="category error"></div>
            </div>
            
            <div className="form-group">
            <label htmlFor="genre">Genre:</label>
            <input
              type="genre"
              name="genre"
              id="genre"
              onChange={(e) =>
                setDetails({ ...details, genre: e.target.value })
              }
              value={details.genre}
            />
            <div className="genre error"></div>
            </div>
          
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="description"
              name="description"
              id="description"
              onChange={(e) =>
                setDetails({ ...details, description: e.target.value })
              }
              value={details.description}
            />
            <div className="description error"></div>
            </div>

            <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="price"
              name="price"
              id="price"
              onChange={(e) =>
                setDetails({ ...details, price: e.target.value })
              }
              value={details.price}
            />
            <div className="price error"></div>
            </div>

            <div className="form-group">
            <label htmlFor="countInStock">Count In Stock:</label>
            <input
              type="countInStock"
              name="countInStock"
              id="countInStock"
              onChange={(e) =>
                setDetails({ ...details, countInStock: e.target.value })
              }
              value={details.countInStock}
            />
            <div className="countInStock error"></div>
            </div>
          
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>

     
    </>

  )
}

export default ProductEdit