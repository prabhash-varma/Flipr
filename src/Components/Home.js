import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="vh-100" style={{ backgroundImage: 'url("https://www.quantumamc.com/assets/images/Quantum%20Nifty%20ETF%20Before.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6" style={{ marginTop: '20%', marginLeft: '10%' }}>
                            <h1>
                                Welcome to NSSR!!!
                            </h1>
                            <h3>
                                Here you can view stocks of companies!
                            </h3>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            {/* <img src='https://images.moneycontrol.com/static-mcnews/2022/10/Feat-2-770x431.jpg?impolicy=website&width=1600&height=900' style={{ height: '500px', width: '700px' }} alt='' /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
