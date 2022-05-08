import React, { useState, useContext } from 'react';
import { UidContext } from '../Components/AppContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



function ProductEdit() {
  const uid = useContext(UidContext);
  const [details, setDetails] = useState({
    user: uid,
    name: '',
    image: null,
    category: '',
    genre: '',
    description: '',
    price: '',
    countInStock: '',
    releaseDate: new Date().toISOString().split('T')[0],
  });

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
    let imageUrl = "";

    const formData = new FormData();
    formData.append("file", details.image);
    formData.append("upload_preset", "cloudinary");
    const dataRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dgri8qgkg/image/upload",
      formData
    );
    imageUrl = dataRes.data.url;
    setDetails({ ...details, image: imageUrl });
    console.log(details);
    
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
      <div className="Signup">
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <h2>Edit Product</h2>

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
              <label htmlFor="category">Image:</label>
              <input
                type="file"
                name="image"
                id="validationFormik107"
                accept='image/*'
                className='position position-relative mt-2'
                onChange={(e) => { setDetails({ ...details, image: e.target.files[0] }) }}
              />
              <div className="category error"></div>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select className="form-select" onChange={(e) => { setDetails({ ...details, category: e.target.value }) }}>
                <option value="PS4">PS4</option>
                <option value="PS5">PS5</option>
                <option value="XBOX">XBOX</option>
                <option value="Switch">Switch</option>
              </select>
              <div className="category error"></div>
            </div>

            <div className="form-group">
              <label htmlFor="genre">Genre:</label>
              <select className="form-select" onChange={(e) => { setDetails({ ...details, genre: e.target.value }) }}>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Fighting">Fighting</option>
                <option value="Racing">Racing</option>
                <option value="Role">Role</option>
                <option value="Shooter">Shooter</option>
                <option value="Sport">Sport</option>
                <option value="Strategy">Strategy</option>
                <option value="Other">Other</option>
              </select>
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