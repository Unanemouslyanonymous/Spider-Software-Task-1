import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import '../styles/Filters.css';

const Filters = ({ onFilter }) => {
    const [cuisine, setCuisine] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');

    const handleFilter = (e) => {
        e.preventDefault();
        onFilter({ cuisine, preparationTime, dietaryRestrictions });
    };

    return (
        <div className="filters">
            <h2>Filter Recipes</h2>
            <Form onSubmit={handleFilter}>
                <Row>
                    <Col>
                        <Form.Control 
                            placeholder="Cuisine" 
                            value={cuisine}
                            onChange={(e) => setCuisine(e.target.value)} 
                        />
                    </Col>
                    <Col>
                        <Form.Control 
                            placeholder="Preparation Time (min)" 
                            type="number"
                            value={preparationTime}
                            onChange={(e) => setPreparationTime(e.target.value)} 
                        />
                    </Col>
                    <Col>
                        <Form.Control 
                            placeholder="Dietary Restrictions" 
                            value={dietaryRestrictions}
                            onChange={(e) => setDietaryRestrictions(e.target.value)} 
                        />
                    </Col>
                </Row>
                <Button variant="primary" type="submit" className="mt-3">Apply Filters</Button>
            </Form>
        </div>
    );
};

export default Filters;
