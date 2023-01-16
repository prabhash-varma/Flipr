import React, { useEffect, useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Navbar from './Navbar';



export default function Bse() {

    const [data, setData] = useState({})


    useEffect(() => {
        fetch('http://localhost:9999/stocks/BSE', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(result => {
                if (result.msg === 'err') {
                    alert('Not Found')
                }
                else {
                    setData(result)
                }
            })
    }, [])
    return (
        <>
            <Navbar />
            <section>
                <div className="container">
                    <div className="row" style={{ marginTop: '5%' }}>
                        <div className="col-xs-6 col-sm-6 col-md-6" style={{ height: 'fit-content' }}>
                            <h1 style={{ fontSize: '80px', marginBottom: '20px' }}>BSE</h1>
                            <h1 style={{ color: 'green' }}>{data.volume}<i className="fa-solid fa-up" /></h1>
                            <p>As on 12 Feb,2023 </p>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <div>
                                <h6>Day range</h6>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "50%" }}>
                                    <h6>{data.low}</h6>
                                    <h6>{data.high}</h6>
                                </div>
                                <div style={{ display: "flex" }}><b style={{ color: 'red' }}>L</b><div style={{ height: "0px", border: "1px solid", width: "50%" }}></div><b style={{ color: 'green' }}>H</b></div>
                            </div>
                            <div style={{ marginTop: "5%" }}>
                                <h6>52 weeks range</h6>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "50%" }}>
                                    <h6>{data.low}</h6>
                                    <h6>{data.high}</h6>
                                </div>
                                <div style={{ display: "flex" }}><b style={{ color: 'red' }}>L</b><div style={{ height: "0px", border: "1px solid", width: "50%" }}></div><b style={{ color: 'green' }}>H</b></div>
                            </div>
                            <div style={{ marginTop: "5%" }}>
                                <h6 style={{ margin: "0" }}>returns</h6>
                                <DropdownButton
                                    as={ButtonGroup}
                                    key={`down`}
                                    id={`dropdown-button-drop-down`}
                                    drop={`down`}
                                    variant="secondary"
                                    title={`YTD`}
                                    style={{ marginBottom: "1%" }}>

                                </DropdownButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container' style={{ marginTop: "3%" }}>
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly', border: "1px solid", marginTop: "1%", borderLeft: "none", borderRight: "none" }}>
                        <div className="box1" style={{ height: 'fit-content', padding: "1%", width: '10%', textAlign: "center" }}>
                            <h6 style={{ border: "none" }}>OVERVIEW</h6>
                        </div>
                        <div className="box1" style={{ height: 'fit-content', padding: "1%", width: '10%', textAlign: "center" }}>
                            <h6 style={{ border: "none" }}>CHART</h6>
                        </div>
                        <div className="box1" style={{ height: 'fit-content', padding: "1%", width: '10%', textAlign: "center" }}>
                            <h6 style={{ border: "none" }}>TECHNICALS</h6>
                        </div>
                        <div className="box1" style={{ height: 'fit-content', padding: "1%", width: '10%', textAlign: "center" }}>
                            <h6 style={{ border: "none" }}>NEWS</h6>
                        </div>
                        <div className="box1" style={{ height: 'fit-content', padding: "1%", width: '10%', textAlign: "center" }}>
                            <h6 style={{ border: "none" }}>CONTIBUTIONS</h6>
                        </div>
                        <div className="box1" style={{ height: 'fit-content', padding: "1%", width: '10%', textAlign: "center" }}>
                            <h6 style={{ border: "none" }}>COMPONENTS</h6>
                        </div>
                        <div className="box1" style={{ height: 'fit-content', padding: "1%", width: '10%', textAlign: "center" }}>
                            <h6 style={{ border: "none" }}>FORUM</h6>
                        </div>
                    </div>
                </div>


                <div className='container'>
                    <div className='row' style={{ marginTop: "2%" }}>
                        <div className='col-xs-6 col-sm-6 col-md-6' >
                            <div style={{ display: "flex", justifyContent: "space-between", width: "77%" }}>
                                <h6 style={{ marginTop: "2%" }}>Open</h6>
                                <h3>{data.open}</h3>
                            </div>
                            <div style={{ height: "0px", border: "1px dashed" }}></div>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "77%" }}>
                                <h6 style={{ marginTop: "2%" }}>Previous close</h6>
                                <h3>{data.close}</h3>
                            </div>
                            <div style={{ height: "0px", border: "1px dashed" }}></div>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "77%" }}>
                                <h6 style={{ marginTop: "2%" }}>Day high</h6>
                                <h3>{data.high}</h3>
                            </div>
                            <div style={{ height: "0px", border: "1px dashed" }}></div>
                        </div>

                        <div className='col-xs-6 col-sm-6 col-md-6' >
                            <div style={{ display: "flex", justifyContent: "space-between", width: "77%" }}>
                                <h6 style={{ marginTop: "2%" }}>Day low</h6>
                                <h3>{data.low}</h3>
                            </div>
                            <div style={{ height: "0px", border: "1px dashed" }}></div>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "77%" }}>
                                <h6 style={{ marginTop: "2%" }}>52 week high</h6>
                                <h3>{data.weekhigh}</h3>
                            </div>
                            <div style={{ height: "0px", border: "1px dashed" }}></div>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "77%" }}>
                                <h6 style={{ marginTop: "2%" }}>52 week low</h6>
                                <h3>{data.weeklow}</h3>
                            </div>
                            <div style={{ height: "0px", border: "1px dashed" }}></div>
                        </div>

                    </div>

                    <div>

                    </div>
                </div>



            </section>
        </>
    )
}
