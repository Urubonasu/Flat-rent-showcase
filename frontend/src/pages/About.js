import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <div className='intro'>
        <h1>APIE MUS</h1>
        <p>Sveiki atvykę į mūsų svetainę! Esame komanda, kuri jau daugiau nei 10 metų dirbame nekilnojamojo turto nuomos srityje.Mūsų misija yra teikti aukšto lygio nekilnojamojo turto nuomos paslaugas, atsižvelgiant į kliento pageidavimus.</p>
        <p>Nesvarbu, ar ieškote jaukaus buto, prabangaus penthause'o ar patrauklios komercinės patalpos, mes esame čia, kad jums padėtume.</p>
        <img className='gen' src="7.jpg" alt="img" />
        <h2>Įmonės istorija</h2>
        <p className='history'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptatum numquam quae deleniti in id fugit corporis itaque, exercitationem atque et eius molestiae illum cupiditate hic autem eveniet, vitae laborum facere? Laudantium optio ullam aspernatur esse eligendi minus illo architecto? Dolorem rerum nobis ratione autem eaque, reprehenderit officiis, rem ex incidunt porro sunt officia quod voluptatem maiores at sequi provident sint? Incidunt laboriosam sequi assumenda tempora. Animi sequi magni perferendis, veritatis ipsam illum voluptatum dolorum perspiciatis consequatur nihil expedita aliquid veniam debitis velit aperiam magnam obcaecati a, quia excepturi quis et repellat! Consequatur exercitationem ipsa ea placeat? Veritatis, impedit consequuntur provident sint? Incidunt laboriosam sequi assumenda tempora. Animi sequi magni perferendis, veritatis ipsam illum voluptatum dolorum perspiciatis consequatur nihil expedita aliquid veniam debitis velit aperiam magnam obcaecati a, quia excepturi quis et repellat! Consequatur exercitationem ipsa ea placeat? Veritatis, impedit consequuntur?</p>
      </div>
      <h2 className='team'>MŪSŲ ŠAUNIOJI KOMANDA</h2>
      <div className="container">
        <div className="card">
          <img src="/1.jpg" alt="Broker" />
          <div className="info">
            <p className="name">Greta Gretute</p>
            <p><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg> greta@gmail.com</p>
            <p className="contact">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Tel: 860558522
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/4.jpg" alt="Broker" />
          <div className="info">
            <p className="name">Jonas Jonaitis</p>
            <p><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg> jonas@gmail.com</p>
            <p className="contact">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Tel: 860558522
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/2.jpg" alt="Broker" />
          <div className="info">
            <p className="name">Jurga Jurgita</p>
            <p><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg> jurga@gmail.com</p>
            <p className="contact">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Tel: 860558522
            </p>
          </div>
        </div>
      </div>
      <h2 className='team'>KLIENTŲ ATSILIEPIMAI</h2>
      <div className="atsiliepimai">
        <div className="card">
          
          <img src="12.jpg" alt="" />
          <p className='myname'>Jonas</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quam facere consequatur, recusandae delectus doloribus quisquam. Facilis hic quis aspernatur.</p>
        </div>
        <div className="card">
        
          <img src="8.jpg" alt="" />
          <p className='myname'>Joana</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quam facere consequatur, recusandae delectus doloribus quisquam. Facilis hic quis aspernatur.</p>
        </div>
        <div className="card">
         
          <img src="11.jpg" alt="" />
          <p className='myname'>Vytas</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quam facere consequatur, recusandae delectus doloribus quisquam. Facilis hic quis aspernatur.</p>
        </div>
        <div className="card">
          
          <img src="9.jpg" alt="" />
          <p className='myname'>Dalia</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quam facere consequatur, recusandae delectus doloribus quisquam. Facilis hic quis aspernatur.</p>
        </div>
      </div>
     
    </div>
  );
}

export default About;
