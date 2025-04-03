import React, { useState } from 'react';
import capitalizeFirstLetter from '../../utils/capitalizeLetters';
import { toast, ToastContainer } from 'react-toastify';
import { createProduct } from '../../api/productApi';
import Footer from '../sharedComponents/Footer';
import Header from '../sharedComponents/Header';

const ProductCreatePage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim values to remove leading & trailing spaces
    const trimmedData = {
      name: capitalizeFirstLetter(name.trim()),
      description: capitalizeFirstLetter(description.trim()),
      price: capitalizeFirstLetter(price.trim()),
    };

    // Check if any field is empty
    if (!trimmedData.name || !trimmedData.price) {
      toast.error('All fields are required!');
      return;
    }

    // Prepare FormData for file upload
    const formData = new FormData();
    formData.append('name', trimmedData.name);
    formData.append('description', trimmedData.description);
    formData.append('price', trimmedData.price);
    if (selectedImage) {
      formData.append('image', selectedImage); // Append image to FormData
    }

    try {
      const data = await createProduct(formData);
      if (data && data.message) {
        toast.success(data.message);
      } else {
        toast.success('Created a product successfully!');
      }
    } catch (error) {
      if (error.message) {
        toast.error('Could not create a product! Please try again.');
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <Header />
      <div className='container'>
        <div className='card shadow-lg'>
          <h1 className='card-title text-center mt-3'>Create Product</h1>
          <div className='card-body'>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
              <div>
                <label className='form-label'>Name:</label>
                <input
                  type='text'
                  className='form-control mb-2'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className='form-label'>Description:</label>
                <textarea
                  className='form-control mb-2'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Price:</label>
                <input
                  type='number'
                  className='form-control'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div class='mb-3'>
                <label for='formFile' className='form-label'>
                  Image:
                </label>
                <input
                  className='form-control'
                  type='file'
                  id='formFile'
                  accept='image/*'
                  onChange={handleFileChange}
                />
              </div>
              <button type='submit' className='btn btn-primary mt-4'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCreatePage;
