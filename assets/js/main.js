"use strict";

jQuery(document).ready(function ($) {});

// script.js

const statusElement = document.getElementById('status');
const sendLocationBtn = document.getElementById('sendLocationBtn');

// Konumu alma fonksiyonu
function getLocation() {
    if (navigator.geolocation) {
        // Kullanıcı konumunu alır ve success ve error fonksiyonlarına yollar
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        statusElement.textContent = "Geolocation bu tarayıcıda desteklenmiyor.";
    }
}

// Başarıyla konum alındığında bu fonksiyon çalışır
function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    statusElement.textContent = `Enlem: ${latitude}, Boylam: ${longitude}`;
    
    // Konumu bir sunucuya göndermek isterseniz buraya bir AJAX/Fetch isteği ekleyebilirsiniz:
    // fetch('/server-url', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ latitude, longitude })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data));
}

// Konum alma sırasında hata olursa bu fonksiyon çalışır
function error() {
    statusElement.textContent = "Konum bilgisi alınamadı.";
}

// Butona tıklama ile konum almayı başlatıyoruz
sendLocationBtn.addEventListener('click', getLocation);
