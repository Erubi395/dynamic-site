// Google Map Init Function
function initMap() {
    // Сургуулийн байршил (Coordinates)
    const schoolLocation = { lat: 35.4547, lng: 133.0583 }; 

    // Газрын зураг үүсгэх
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: schoolLocation,
        styles: [
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#747474" }]
            }
        ]
    });

    // Улаан тэмдэглэгээ (Marker)
    const marker = new google.maps.Marker({
        position: schoolLocation,
        map: map,
        title: "Shimane Design School",
        animation: google.maps.Animation.DROP
    });

    // Мэдээллийн цонх (Info Window)
    const infoWindow = new google.maps.InfoWindow({
        content: '<div style="padding:10px; color:#333;"><strong>Shimane Design School</strong><br>Welcome to our campus!</div>'
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}

// News Ticker Loop Logic
document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.ticker-list');
    
    // Жагсаалт олдвол доторх агуулгыг нь хувилж залгана
    // Энэ нь текстийг тасралтгүй урсаж байгаа мэт харагдуулна
    if(list) {
        list.innerHTML += list.innerHTML;
    }
});