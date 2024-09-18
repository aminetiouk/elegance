import React, { useState } from 'react';
import './dashbord.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlusCircle, faUpload } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Black Opium', category: 'Fragrance', price: 120, image: '' },
        { id: 2, name: 'Bonding Oil', category: 'Hair', price: 45, image: '' },
        // Add more sample products here
    ]);

    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        price: '',
        image: ''
    });

    const handleInputChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProduct({
                    ...newProduct,
                    image: reader.result // Save the image URL
                });
            };
            reader.readAsDataURL(file); // Read the image file as a data URL
        }
    };

    const addProduct = () => {
        setProducts([
            ...products,
            newProduct
        ]);
        setNewProduct({
            name: '',
            category: '',
            price: '',
            image: ''
        });
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const editProduct = (id) => {
        const updatedProducts = products.map((product) =>
            product.id === id ? { ...product, ...newProduct } : product
        );
        setProducts(updatedProducts);
    };

    return (
        <div className='dashboard'>
            <h1>Product Dashboard</h1>

            <div className='add-product'>
                <h2>Add New Product</h2>
                <input
                    type='text'
                    name='name'
                    placeholder='Product Name'
                    value={newProduct.name}
                    onChange={handleInputChange}
                />
                <input
                    type='text'
                    name='category'
                    placeholder='Category'
                    value={newProduct.category}
                    onChange={handleInputChange}
                />
                <input
                    type='number'
                    name='price'
                    placeholder='Price'
                    value={newProduct.price}
                    onChange={handleInputChange}
                />
                <input
                    type='file'
                    accept='image/*'
                    onChange={handleFileChange}
                    id='file-input'
                    style={{ display: 'none' }}
                />
                <label htmlFor='file-input'>
                    <FontAwesomeIcon icon={faUpload} /> Upload Image
                </label>
                <button onClick={addProduct}>
                    <FontAwesomeIcon icon={faPlusCircle} /> Add Product
                </button>
            </div>

            <table className='product-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>${product.price}</td>
                            <td>
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <span>No Image</span>
                                )}
                            </td>
                            <td>
                                <button onClick={() => editProduct(product.id)}>
                                    <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                                <button onClick={() => deleteProduct(product.id)}>
                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
