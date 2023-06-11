import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card() {
const [card, setCard] = useState([]);
const [loading, setLoading] = useState(false);

const { id } = useParams();

  useEffect(() => {
    const showCard = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setCard(await response.json());
        setLoading(false);
    }
    showCard();
  }, [id]);
  const Loading = () => {
    return(
        <>
            Loading.....
        </>
    )
  }
const ShowCard = () =>{
    return (
        <>
          <section className={styles.singleMovie}>
            <img src={card.image} alt={card.title} />
            <div className={styles.single}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <h4>Cost: {card.price} $</h4>
              <Link to='/' className={styles.btn}>
                 Go to BACK
              </Link>
            </div>
          </section>
        </>
    )
}
  return (
    <div>
        {loading ? <Loading /> : <ShowCard />}
    </div>
  )
}