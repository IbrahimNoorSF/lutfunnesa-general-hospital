import React from 'react';

const Shop = () => {
    return (
        <div className="mt-5 mb-5 text-center">
            <div className="mb-3">
                <small><i className="fas fa-shopping-cart"></i> Our Shop</small>
                <h1>Shop</h1>
                <p>Buy our trusted products according to your<br /> preference and medical recommendations.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
                <div className="col">
                    <div className="card">
                        <img src="https://clinika.modeltheme.com/wp-content/uploads/2020/11/Clinika-Gel-4.jpg" className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Advanced Purify Gel</h5>
                            <p className="card-text">$89.00</p>
                            <small>
                                <i class="fas fa-star"></i> 4.3
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://clinika.modeltheme.com/wp-content/uploads/2020/11/Clinika-Thermo_IR3.jpg" className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">AERODiagnostic Clinical</h5>
                            <p className="card-text">$321.00</p>
                            <small>
                                <i class="fas fa-star"></i> 5
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://clinika.modeltheme.com/wp-content/uploads/2020/11/Clinika-gel-5.jpg" className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Aloe Vera Sanitizer</h5>
                            <p className="card-text">$34.00</p>
                            <small>
                                <i class="fas fa-star"></i> 4.5
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://clinika.modeltheme.com/wp-content/uploads/2020/11/mask-1.jpg" className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Anti-Dust Mask</h5>
                            <p className="card-text">$35.00</p>
                            <small>
                                <i class="fas fa-star"></i> 4
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://clinika.modeltheme.com/wp-content/uploads/2020/11/mask-8.jpg" className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Anti-Dust Mask (Black)</h5>
                            <p className="card-text">$35.00</p>
                            <small>
                                <i class="fas fa-star"></i> 4.5
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://clinika.modeltheme.com/wp-content/uploads/2020/11/Clinika-Wipes1.jpg" className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">BabyAloe VeraSafe</h5>
                            <p className="card-text">$25.00</p>
                            <small>
                                <i class="fas fa-star"></i> 5
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;