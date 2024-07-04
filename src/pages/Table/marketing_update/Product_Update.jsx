import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';
import { useParams, useNavigate } from 'react-router-dom';

function Product_Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [record, setRecord] = useState({
        marketingActivity: '',
        proposedDate: '',
        proposedAmount: '',
        disursableAmount: '',
        engineerName: '',
        remarks: ''
    });

    useEffect(() => {
        axios
            .get(`http://localhost:3002/product_detials/${id}`)
            .then((response) => {
                setRecord(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = Object.keys(record).filter((key) => !record[key]);
        if (errors.length > 0) {
            console.log('Please fill in all fields.');
        } else {
            axios
                .put(`http://localhost:3002/product_detials/${id}`, record)
                .then((response) => {
                    console.log('Response from server:', response.data);
                    navigate('/product/list');
                })
                .catch((error) => {
                    console.error('Error updating product:', error);
                });
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setRecord({ ...record, [id]: value });
    };

    return (
        <div className="form_container">
            <div className="table-border">
<Card className='product-table'>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Marketing_Activity" value="Marketing Activity" />
                            </div>
                            <TextInput
                                id="marketingActivity"
                                type="text"
                                placeholder="Marketing Activity"
                                value={record.marketingActivity}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Proposed_Date">Proposed Date</Label>
                            </div>
                            <TextInput
                                type="date"
                                id="proposedDate"
                                className="w-full form-control rounded"
                                required
                                min={new Date().toISOString().slice(0, 10)}
                                value={record.proposedDate}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Proposed_Amount" value="Proposed Amount" />
                            </div>
                            <TextInput
                                id="proposedAmount"
                                type="text"
                                placeholder="Proposed Amount"
                                value={record.proposedAmount}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Disursable_Amount" value="Disursable Amount" />
                            </div>
                            <TextInput
                                id="disursableAmount"
                                type="text"
                                placeholder="Disursable Amount"
                                value={record.disursableAmount}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Engineer_Name" value="Engineer Name" />
                            </div>
                            <TextInput
                                id="engineerName"
                                type="text"
                                placeholder="Engineer Name"
                                value={record.engineerName}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="Remarks" value="Your Remarks" />
                            </div>
                            <Textarea
                                className="textarea"
                                id="remarks"
                                placeholder="Leave a comment..."
                                value={record.remarks}
                                onChange={handleChange}
                                rows={4}
                            />
                        </div>
    
                        <Button color="dark" type="submit">
                            Submit
                        </Button>
                    </form>
</Card>
            </div>
        </div>
    );
}

export default Product_Update;
