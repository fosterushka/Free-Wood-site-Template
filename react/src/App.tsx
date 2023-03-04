import { useState } from 'react'
import './App.css'
import ProductCard from './components/Product-Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [count, setCount] = useState(0)

    return (<>
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <div className="container">
                <p className="navbar-brand mb-0">Доставка дров в *Город*</p>
                <a href="tel:71111111111">
                    <button type="button" className="btn btn-light">Сделать Заказ</button>
                </a>
            </div>
        </nav>
        <section className="section-one">
            <div className="container d-flex justify-content-center flex-column">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-white">
                        <h1>ПРОДАЖА ДРОВ С ДОСТАВКОЙ</h1>
                        <h2>В ГОРОДЕ *Город*</h2>
                        <a href="#section3">
                            <button type="button" className="btn btn-light btn-lg">НАШ АССОРТИМЕНТ</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section id="section2">
            <div className="container d-flex justify-content-between align-items-center mb-4 mt-4">
                <div className="d-flex flex-column align-items-center text-dark justify-content-center">
                    <div className="section-two-item-img d-flex align-items-center justify-content-center">
                        <img src="assets/img/w1.png" alt="" />
                    </div>
                    <div className="text-dark mt-2">Качество древесины,<br/> и честный объем</div>
                </div>
                <div className="d-flex flex-column align-items-center text-dark">
                    <div className="section-two-item-img d-flex align-items-center justify-content-center">
                        <img
                        src="assets/img/w2.png" alt=""/>
                        </div>
                    <div className="text-dark mt-2">Бесплатная доставка</div>
                </div>
                <div className="d-flex flex-column align-items-center text-dark">
                    <div className="section-two-item-img d-flex align-items-center justify-content-center">
                        <img src="assets/img/w3.png" alt="" />
                    </div>
                    <div className="text-dark mt-2">Доступные цены</div>
                </div>
            </div>
            <div className="container">
                <hr></hr>
            </div>
        </section>
        <section id="section3">
            <div className="container">
                <h2 className="text-center mt-4 mb-2">НАШ АССОРТИМЕНТ</h2>
                <div className="d-flex justify-content-between" id="itemswood">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
            <div className="container"></div>
        </section>
        <footer className="container">
            {/* //TODO: add link */}
            <a href="" className="text-dark m-1" target="_blank">
                Разработал Aydiev Mansur &copy;
                <span>2019 - <script>document.write(new Date().getFullYear())</script></span>
            </a>
        </footer>
    </>)
}

export default App
