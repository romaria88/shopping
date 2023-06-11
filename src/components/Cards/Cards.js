import styles from './Cards.module.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Cards () {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let compon = true;

    useEffect(() => {
        const getCards = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products`);
            if(compon){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);  
            }
            return () => {
                compon = false;
            }
        }
        getCards();
    }, []);
    const Loading = () => {
        return(
            <>
            <div className={styles.loading}>Loading... </div>  
            </>
        )
    }
   
    const filterCard = (cat) => {
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }
    const ShowCards = () => {
        return (
            <>
                <div className={styles.showCards}>
                    <div className={styles.products}>   
                        <div className={styles.productsButton1}><h2>All Products</h2></div> 
	                    <div className={styles.productsButton}>
                            <div className={styles.BtnRight}>
                                <button className={styles.productsBtn} onclick={() => setFilter(data)}>All</button>
                                <button className={styles.productsBtn} onclick={() => filterCard("women's clothing")}>Women’s clothings</button>
                                <button className={styles.productsBtn} onclick={() => filterCard("men's clothing")}>Men’s clothings</button>
                                <button className={styles.productsBtn} onclick={() => filterCard("jewelry")}>Jewelry</button>
                                <button className={styles.productsBtn} onclick={() => filterCard("electronics")}>Electronic</button>
                            </div>
                            <div  className={styles.BtnLeft}>
                                <button className={styles.productsLeftBtn}>Filter</button>
                            </div>
                        </div>
                    </div> 
                    <div className={styles.productsMain}>
                {filter.map((card) => {
                    return (   
                        <Link to={`/cards/${card.id}`} className={styles.card1}>
                            <img className={styles.image} src={card.image} alt={card.title} onClick={() => card.id}></img>
                            <div className={styles.cardInfo}>
                                <h4>{card.title.substring(0, 12)}</h4>
                                <div className={styles.cardP}>
                                    <p>Cost:</p>
                                    <p>{card.price}$</p>
                                </div>
                            </div>
                        </Link>    
                    )
                })} 
                    </div>
                </div>     
            </>
        );
    };
        return( 
            <div className={styles.show}>
                {loading ? <Loading /> : <ShowCards />}
            </div>            
    );
}
export default Cards;




/*
<div className={styles.products}>
	<h2>All Products</h2> 
	<div className={styles.productsButton}>
<div className={styles.BtnRight}>
<button className={styles.productsBtn}>All</button>
<button className={styles.productsBtn} >Women’s clothings</button>
<button className={styles.productsBtn}> Men’s clothings </button>
<button className={styles.productsBtn} > Jewelry </button>
<button className={styles.productsBtn} > Jewelry </button>
</div>
<div  className={styles.BtnLeft}>
<button className={styles.productsLeftBtn}>Filter</button>
</div>
</div>
<div className={styles.productsMain}>
	<div className={styles.productsCard}>
		<img src=”/img/                 ”></img>
<h4></h4>
		<div className={styles.nameCard}>
			<p></p>
			<p></p>
</div>
</div>
</div>
</div>


*/