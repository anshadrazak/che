import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Solar Energy Dashboard</h1>
        <p>Harnessing Solar Energy for Sustainable Development</p>
      </header>
      <main className="main-content">
        <section className="info-section">
          <h2>Benefits of Solar Energy</h2>
          <ul>
            <li>Reduces electricity bills</li>
            <li>Decreases carbon footprint</li>
            <li>Increases energy independence</li>
            <li>Low maintenance costs</li>
            <li>Creates job opportunities</li>
          </ul>
        </section>
        <section className="usage-section">
          <h2>Current Solar Energy Usage</h2>
          <div className="usage-info">
            <div className="usage-item">
              <h3>Energy Produced Today:</h3>
              <p>50 kWh</p>
            </div>
            <div className="usage-item">
              <h3>CO2 Emissions Saved:</h3>
              <p>200 kg</p>
            </div>
            <div className="usage-item">
              <h3>Homes Powered:</h3>
              <p>15 homes</p>
            </div>
          </div>
        </section>
        <img className='graph' src='https://theroundup.org/wp-content/uploads/2022/02/solar-energy-capacity-by-country.png'></img>
      </main>
      <footer className="footer">
        <p>Join us in promoting sustainable energy solutions!</p>
      </footer>
      <h1>Why Solar Energy is Key to Sustainable Development</h1>
      <ul type="circle">
      <li></li>Environmental Benefits:
      <ul type="circle">
        Reduce greenhouse gas emissions, mitigating climate change.<br></br>
        Lowers dependence on fossil fuels.<br></br>
        Protects ecosystem by reducing pollution. 
      </ul>
      </ul>
      <ul type="circle">
        Economic Benefits:
        <ul>
            Reduce energy costs over time.<br></br>
            Create jobs in installation, maintaince, and innovation.<br></br>
            Promote energy independence, especially for rural areas.

        </ul>
      </ul>
      <ul>
        Social Benefits:
        <ul>
            Bring electricity to off-grid communities, improving quality of life.<br></br>
            Promotes acess to clean energy, especially in developing nations.
        </ul>
      </ul>
      <section className="usage-section">
          <h2>For More Information Click Here:</h2>
          <div className="usage-info">
          <a href='/what'>
            <div className="usage-item">
              <h3>What is Solar Energy:</h3>
              
            </div></a>
            <a href='/innovation'>
            <div className="usage-item">
              <h3>Solar Energy Innovation:</h3>
              
            </div></a>
            <a href='/future'>
            <div className="usage-item">
              <h3>The Future Benefits of Solar Energy: Powering a Sustainable Tomorrow</h3>
              
            </div></a>
          </div>
        </section>

    </div>
  );
};

export default Content;
