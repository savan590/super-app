import React, { useState } from 'react';

const Cards = ({ data, label, setCategories, categories }) => {
    let isSelected = false;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i] === data.label) {
            isSelected = true;
            break;
        }
    }
    const [selected, setSelected] = useState(isSelected);
   

    if (isSelected !== selected) {
        setSelected(isSelected);
    }

    const toggleSelected = () => {
        let newCategories = [];
        if (isSelected) {
            for (let i = 0; i < categories.length; i++) {
                if (categories[i] !== data.label) {
                    newCategories.push(categories[i]);
                }
            }
        }
        else {
            for (let i = 0; i < categories.length; i++) {
                newCategories.push(categories[i]);
            }
            newCategories.push(data.label);
        }

        setCategories(newCategories);
        setSelected(!selected);
        
    };


    const cardStyle = {
        background: data.color,
        color: 'white',
        paddingBottom: '25px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '12px',
        border: `4px solid ${selected ? 'green' : 'white'}`,
        width: '150px',
        height: '120px',
        cursor: 'pointer',
    };

    const labelStyle = {
        marginBottom: '10px',
        marginTop: '12px',
        fontSize: '20px',
        fontFamily: 'Roboto',
        fontWeight: '600',
    };

    return (
        <div style={cardStyle} onClick={toggleSelected} key={label}>
            <p style={labelStyle}>{data.label}</p>
            <div>{data.image}</div>
        </div>
    );
};

export default Cards;

//className={`block ${selected ? 'selected' : ''}`}
// const isSelected = categories.includes(data.label);
// useEffect(() => {
//     setSelected(isSelected);
// }, [isSelected]);
// const newCategories = isSelected
//     ? categories.filter(i => i !== data.label)
//     : [...categories, data.label];