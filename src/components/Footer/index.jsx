import React from "react";
import "./index.css";

const Footer = () => {
    return(
        <footer>
            <div>
               
                <p className="copyright">&copy;2022</p>
            </div>
            <ul>
                <li><a href="">Главная</a></li>
                <li><a href="">Блог</a></li>
                <li><a href="">Обо мне</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
            <ul>
                <li><a href="">Vk</a></li>
                <li><a href="">Reddit</a></li>
                <li><a href="">Sber</a></li>
                <li><a href="">Facebook</a></li>
            </ul>
            <div>
                <h4 className="footer__h4">О нас :</h4>
                <a href="tel:+1234567890"> Звоните нам бесплатно! </a>
                <a href="mailto:Komanda@yandex.ru">Email</a>
                {/* <ul className="soc">
                    <li><a href="">soc</a></li>
                    <li><a href="">soc</a></li>
                    <li><a href="">soc</a></li>
                    <li><a href="">soc</a></li>
                    <li><a href="">soc</a></li>
                </ul> */}
            </div>
            
        </footer>
    )
}
export default Footer