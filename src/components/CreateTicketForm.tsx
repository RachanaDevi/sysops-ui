import { useEffect, useState } from "react";
import { getCategories } from "../services/productApi";
import { all } from "axios";

function CreateTicketForm() {

    const [productTypes, setProductTypes] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedProductType, setSelectedProductType] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        (async () => {
            const categories = await getCategories();
            setAllCategories(allCategories);
        })()
    }, []);

    useEffect(() => {
        // fetch products based on the selected product type and set as options for the second dropdown
        if (selectedProductType) {
            fetch(`/products/${selectedProductType}`)
                .then(response => response.json())
                .then(data => setProducts(data));
        } else {
            setProducts([]);
        }
    }, [selectedProductType]);

    const handleProductTypeChange = (event: any) => {
        setSelectedProductType(event.target.value);
        setSelectedProduct('');
    };

    const handleProductChange = (event: any) => {
        setSelectedProduct(event.target.value);
    };


    const endpoint = '/createTicket';
    const [formData, setFormData] = useState({});

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    return (
        <>
            <div className="container">
                <h1>Create Ticket Form</h1>
                <form method="POST" action={endpoint} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Concern</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" onChange={handleChange} placeholder="name@example.com" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" onChange={handleChange} placeholder="name@example.com" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Time</label>
                        <input type="time" className="form-control" id="exampleFormControlInput1" onChange={handleChange} placeholder="name@example.com" />
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Product Type
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Product Name
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateTicketForm;