import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import Footer from './Footer';

function Body() {
    return (
        <div>
          <Navbar/>
            <header>
                <div className="left">
                    <h1>Let's Buy Some <span>AsmrGraph</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, eaque harum. Nobis ipsam magni labore?
                    </p>
                    <a href="#">
                        <i className='bx bx-basket'></i>
                        <span>Buy Now</span>
                    </a>
                </div>
                {/* <img src="assets/header.png" alt="Header" /> */}
                <div>
                    <Card/>
                </div>
            </header>

            <h2 className="separator">
                Sell Your NFTs
            </h2>

            <div className="sell-nft">
                <div className="item">
                    <div className="header">
                        <i className='bx bx-wallet-alt'></i>
                        <h5>Connect Wallet</h5>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste modi ab sunt dolores ex dolor, suscipit
                        fuga sed earum.</p>
                </div>
                <div className="item">
                    <div className="header">
                        <i className='bx bx-cart-alt'></i>
                        <h5>NFT Marketplace</h5>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste modi ab sunt dolores ex dolor, suscipit
                        fuga sed earum.</p>
                </div>
                <div className="item">
                    <div className="header">
                        <i className='bx bx-grid-alt'></i>
                        <h5>Launch DApps</h5>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste modi ab sunt dolores ex dolor, suscipit
                        fuga sed earum.</p>
                </div>
            </div>

            <h2 className="separator">
                Super Hot NFTs
            </h2>

            <div className="nft-shop">
                <div className="category">
                    <a href="#">AsmrGraph</a>
                    <a href="#">Abstract</a>
                    <a href="#">Monkey</a>
                    <a href="#">Cars</a>
                    <a href="#">Trending</a>
                </div>

                <div className="nft-list">
                    <div className="item">
                        <img src="assets/item-1.png" alt="Item 1" />
                        <div className="info">
                            <div>
                                <h5>CryptoArt</h5>
                                <div className="btc">
                                    <i className='bx bxl-bitcoin'></i>
                                    <p>0.29 BTC</p>
                                </div>
                            </div>
                            <p>5 of 33</p>
                        </div>
                        <div className="bid">
                            <p>2h 28m 1s</p>
                            <a href="#">Place a Bid</a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/item-2.png" alt="Item 2" />
                        <div className="info">
                            <div>
                                <h5>Abs-Art</h5>
                                <div className="btc">
                                    <i className='bx bxl-bitcoin'></i>
                                    <p>0.21 BTC</p>
                                </div>
                            </div>
                            <p>7 of 12</p>
                        </div>
                        <div className="bid">
                            <p>1h 28m 1s</p>
                            <a href="#">Place a Bid</a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/item-3.png" alt="Item 3" />
                        <div className="info">
                            <div>
                                <h5>TestArt</h5>
                                <div className="btc">
                                    <i className='bx bxl-bitcoin'></i>
                                    <p>0.21 BTC</p>
                                </div>
                            </div>
                            <p>9 of 23</p>
                        </div>
                        <div className="bid">
                            <p>4h 21m 1s</p>
                            <a href="#">Place a Bid</a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/item-4.png" alt="Item 4" />
                        <div className="info">
                            <div>
                                <h5>Art-4</h5>
                                <div className="btc">
                                    <i className='bx bxl-bitcoin'></i>
                                    <p>0.45 BTC</p>
                                </div>
                            </div>
                            <p>1 of 33</p>
                        </div>
                        <div className="bid">
                            <p>0h 28m 1s</p>
                            <a href="#">Place a Bid</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="view-more">
                <button>View More</button>
            </div>

            <h2 className="separator">
                Best Sellers
            </h2>

            <div className="sellers">
                <div className="item">
                    <img src="assets/profile-1.png" alt="Profile 1" />
                    <div className="info">
                        <h4>Jhone D</h4>
                        <p>15.2K</p>
                    </div>
                </div>
                <div className="item">
                    <img src="assets/profile-2.png" alt="Profile 2" />
                    <div className="info">
                        <h4>Gregory B</h4>
                        <p>12.7K</p>
                    </div>
                </div>
                <div className="item">
                    <img src="assets/profile-3.png" alt="Profile 3" />
                    <div className="info">
                        <h4>Stephen E</h4>
                        <p>7.9K</p>
                    </div>
                </div>
                <div className="item">
                    <img src="assets/profile-4.png" alt="Profile 4" />
                    <div className="info">
                        <h4>Russell M</h4>
                        <p>4.2K</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Body;

