import React from 'react';
import styles from'../styling/category.module.css';
import super1 from '../images/Super.jpg';
import error from '../images/error.png';
import cross from '../images/X.png';
import { useState,useEffect } from 'react';
import Cards from './card.jsx';
import { data } from '../dataset/data';

// import { useNavigate } from 'react-router-dom'

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        // Check the length of categories whenever it changes
        if (categories.length < 3) {
          setHasError(true);
        } else {
          setHasError(false);
        }
      }, [categories]);
    // const navigate = useNavigate()
    const handleSignUp = () => {
        window.localStorage.setItem("cards", JSON.stringify([...categories]));
        // navigate("/prebrowse");
        
    }

    const handleClick = (clickedlabel) => {
        const updatedCategories = categories.filter((category) => category !== clickedlabel);
        setCategories(updatedCategories);
        
    }; 
    
    
    return (
        <div className={styles.main} >
            <div className={styles.left} >
                <img className={styles.superimg1}  src={super1} alt='' />
                <h1 className={styles.text} >Choose your <br></br>entertainment <br></br>category</h1>
                <div className={styles.btncategory}>
                    {categories.map((category) => (
                        <button key={category} id={styles.catbtn} onClick={() => handleClick(category)}>
                            {category}
                            <img src={cross} className={styles.cross} alt=''/>
                        </button>
                    ))}
                </div>
                {hasError ? <div className={styles.errormsg} ><img src={error} alt='' /><span id={styles.errortext}>Minimum 3 category required</span></div> : ""}
            </div>
            <div className={styles.right}>
                {data.map((data, label) =>
                    <Cards data={data} key={label} categories={categories} setCategories={setCategories} />
                )}
            </div>
            <button id={styles.btn} onClick={handleSignUp}>Next Page</button>
        </div>
    );
};

export default Category;

/* {dataset.map((dataset, id) => (
    // <img src={imageSrc} alt='' />
    <div className="card-grid"></div>
    <span id='labels'>{dataset.label}</span>
       <img className='movies' key={id} src={dataset.image} alt='' />
    </div>))}; */