<?php
/**
 * Created by PhpStorm.
 * User: vijay
 * Date: 20/02/2018
 * Time: 13:57
 */
?>

<section class="intouch" id="contact">
    <header class="intouch__title">
        GET IN TOUCH WITH US!
    </header>
    <div class="intouch__container">
        <form class="form">
            <div class="form__head">
                SEND US A MESSAGE
            </div>
            <input required class="form__name form__input" type="text" placeholder="Type your name here"/ >
            <input required id="email" class="form__email form__input" type="email" placeholder="Type your email address here"/>
            <textarea required placeholder="What is it you want to have contact about?" class="form__input form__textarea" rows="10" cols="50"></textarea>

            <input class="form__submit" type="submit" value="SEND">
        </form>

        <aside class="intouch__contact">
            <div class="intouch__infohead">
                CONTACT INFO
            </div>
            <p class="intouch__text">
                Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit.
            </p>
            <div class="intouch__info-container">
                <div class="intouch__info">
                    <img class="intouch__icon" src="img/location.png">
                    <p class="intouch__p">addres<br>city</p>
                </div>
                <div class="intouch__info">
                    <img class="intouch__icon" src="img/phone.png">
                    <p class="intouch__p">1234567890</p>
                </div>
                <div class="intouch__info">
                    <img class="intouch__icon" src="img/email.png">
                    <p class="intouch__p">email@email.com</p>
                </div>
            </div>
        </aside>
    </div>
</section>
<script src="js/emailcheck.js"></script>