import {useState} from 'react'
import './App.css'

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
                        <div className="section-two-item-img d-flex align-items-center justify-content-center"><img
                            src="assets/img/w1.png" alt=""></></div>
                        <div className="text-dark mt-2">Качество древесины,<br> и честный объем</></div>
                    </div>
                    <div className="d-flex flex-column align-items-center text-dark">
                        <div className="section-two-item-img d-flex align-items-center justify-content-center"><img
                            src="assets/img/w2.png" alt=""></></div>
                        <div className="text-dark mt-2">Бесплатная доставка</div>
                    </div>
                    <div className="d-flex flex-column align-items-center text-dark">
                        <div className="section-two-item-img d-flex align-items-center justify-content-center"><img
                            src="assets/img/w3.png" alt=""></></div>
                        <div className="text-dark mt-2">Доступные цены</div>
                    </div>
                </div>
                <div className="container">
                    <hr>
                    </>
                </div>
            </section>
            <section id="section3">
                <div className="container">
                    <h2 className="text-center mt-4 mb-2">НАШ АССОРТИМЕНТ</h2>
                    <div className="d-flex justify-content-between" id="itemswood">
                        <div className="card m-2">
                            <img className="card-img-top"
                                 src="https://www.nicepng.com/png/full/349-3492910_firewood-fire-logs.png"
                                 alt="Card image cap">
                                <div className="card-body">
                                    <p className="card-text">СМЕШАННАЯ ОСИНА,ЛИПА И ЕЛЬ</p>
                                    <p className="hotSale align-items-center d-flex justify-content-center">Акция</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">1,2куб Пикап - 2300 тыс.р</li>
                                        <li className="list-group-item">2,5куб Газель - 4000 тыс.р</li>
                                        <li className="list-group-item">5куб Газ Самосвал - 7500 тыс.р</li>
                                    </ul>
                                </div>
                                <div className="text-center mb-2">
                                    <a href="tel:71111111111">
                                        <button type="button" className="btn btn-dark">Сделать Заказ</button>
                                    </a>
                                </div>
                            </></div>
                        <div className="card m-2">
                            <img className="card-img-top"
                                 src="https://www.nicepng.com/png/full/349-3492910_firewood-fire-logs.png"
                                 alt="Card image cap">
                                <div className="card-body">
                                    <p className="card-text">СМЕШАННАЯ ОСИНА,ЛИПА И ЕЛЬ</p>
                                    <p className="hotSale align-items-center d-flex justify-content-center">Акция</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">1,2куб Пикап - 2300 тыс.р</li>
                                        <li className="list-group-item">2,5куб Газель - 4000 тыс.р</li>
                                        <li className="list-group-item">5куб Газ Самосвал - 7500 тыс.р</li>
                                    </ul>
                                </div>
                                <div className="text-center mb-2">
                                    <a href="tel:71111111111">
                                        <button type="button" className="btn btn-dark">Сделать Заказ</button>
                                    </a>
                                </div>
                            </></div>
                        <div className="card m-2">
                            <img className="card-img-top"
                                 src="https://www.nicepng.com/png/full/349-3492910_firewood-fire-logs.png"
                                 alt="Card image cap">
                                <div className="card-body">
                                    <p className="card-text">СМЕШАННАЯ ОСИНА,ЛИПА И ЕЛЬ</p>
                                    <p className="hotSale align-items-center d-flex justify-content-center">Акция</p>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">1,2куб Пикап - 2300 тыс.р</li>
                                        <li className="list-group-item">2,5куб Газель - 4000 тыс.р</li>
                                        <li className="list-group-item">5куб Газ Самосвал - 7500 тыс.р</li>
                                    </ul>
                                </div>
                                <div className="text-center mb-2">
                                    <a href="tel:71111111111">
                                        <button type="button" className="btn btn-dark">Сделать Заказ</button>
                                    </a>
                                </div>
                            </></div>
                    </div>
                </div>
                <div className="container">
                    <hr>
                    </>
                </div>
            </section>
            <footer className="container">
                <a href="https://vk.com/idevmans" className="text-dark m-1" target="_blank">
                    Разработал Aydiev Mansur &copy;
                    <span>
                        2019 -
                        <script>document.write(new Date().getFullYear())</script>
                    </span>
                </a>
            </footer>
        </>)
}

export default App
