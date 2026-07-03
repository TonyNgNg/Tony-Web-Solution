const menuBtn=document.getElementById('menuBtn');const nav=document.getElementById('nav');if(menuBtn){menuBtn.addEventListener('click',()=>{const open=nav.style.display==='flex';nav.style.display=open?'none':'flex';menuBtn.setAttribute('aria-expanded',String(!open));});}nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<721)nav.style.display='none';}));document.getElementById('year').textContent=new Date().getFullYear();
// Random Popup Ad Script
document.addEventListener("DOMContentLoaded", function() {
    // Array of all affiliate ads
    const ads = [
        { 
            // Ad 1
            image: "https://www.ftjcfx.com/image-101807649-17068393", 
            link: "https://www.kqzyfj.com/click-101807649-17068393",
            alt: "Advertisement"
        },
        { 
            // Ad 2: Coffee Quiz
            image: "https://www.awltovhc.com/image-101807649-13588852", 
            link: "https://www.kqzyfj.com/click-101807649-13588852",
            alt: "Coffee Quiz"
        },
        { 
            // Ad 3: OEDRO Sales
            image: "https://www.tqlkg.com/image-101807649-17310569", 
            link: "https://www.kqzyfj.com/click-101807649-17310569",
            alt: "OEDRO 2026 Independence Day Sales - Save Up to 30%"
        },
        { 
            // Ad 4
            image: "https://www.ftjcfx.com/image-101807649-17235977", 
            link: "https://www.tkqlhce.com/click-101807649-17235977",
            alt: "Advertisement"
        },
        { 
            // Ad 5: Newegg Shell Shocker
            image: "https://promotions.newegg.com/NEemail/Apr-0-2021/FlashSaleSecondary_LBdi8d_07/img/banner3.png", 
            link: "https://click.linksynergy.com/deeplink?id=1aSwjBzRdaI&mid=44583&murl=https%3a%2f%2fwww.newegg.com%2fShell-Shocker%2fEventSaleStore%2fID-10381%3fcm_sp%3dHomepage_shellshocker-_-SeeAll",
            alt: "Shell Shocker Event Sale"
        },
        { 
            // Ad 6: Fanttik
            image: "https://fanttik.com/cdn/shop/files/A_APP_1-1.jpg?v=1767698081&width=600", 
            link: "https://www.dpbolvw.net/click-101815247-17065965",
            alt: "Fanttik"
        },
        { 
            // Ad 7: STDCheck
            image: "https://www.colormango.com/home-hobby/s_boxshot/stdcheck_153121.png", 
            link: "https://www.dpbolvw.net/click-101815247-11680307",
            alt: "STDCheck"
        },
        { 
            // Ad 8: GameFly
            image: "https://www.awltovhc.com/image-101815247-12500877", 
            link: "https://www.anrdoezrs.net/click-101815247-12500877",
            alt: "GameFly FreeTrial
        }                 
    ];

    // Select a random ad
    const randomIndex = Math.floor(Math.random() * ads.length);
    const selectedAd = ads[randomIndex];

    // Find the HTML elements
    const adImageElement = document.getElementById("popup-ad-image");
    const adLinkElement = document.getElementById("popup-ad-link");

    // Update the HTML with the selected ad
    if (adImageElement && adLinkElement) {
        adImageElement.src = selectedAd.image;
        adImageElement.alt = selectedAd.alt;
        adLinkElement.href = selectedAd.link;
    }
});
