const menuBtn=document.getElementById('menuBtn');const nav=document.getElementById('nav');if(menuBtn){menuBtn.addEventListener('click',()=>{const open=nav.style.display==='flex';nav.style.display=open?'none':'flex';menuBtn.setAttribute('aria-expanded',String(!open));});}nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<721)nav.style.display='none';}));document.getElementById('year').textContent=new Date().getFullYear();
// Random Popup Ad Script
document.addEventListener("DOMContentLoaded", function () {

    const ads = [
        {
            image: "https://www.ftjcfx.com/image-101807649-17068393",
            link: "https://www.kqzyfj.com/click-101807649-17068393",
            alt: "Advertisement"
        },
        {
            image: "https://www.awltovhc.com/image-101807649-13588852",
            link: "https://www.kqzyfj.com/click-101807649-13588852",
            alt: "Coffee Quiz"
        },
        {
            image: "https://www.tqlkg.com/image-101807649-17310569",
            link: "https://www.kqzyfj.com/click-101807649-17310569",
            alt: "OEDRO Sale"
        },
        {
            image: "https://www.ftjcfx.com/image-101807649-17235977",
            link: "https://www.tkqlhce.com/click-101807649-17235977",
            alt: "Advertisement"
        },
        {
            image: "https://promotions.newegg.com/NEemail/Apr-0-2021/FlashSaleSecondary_LBdi8d_07/img/banner3.png",
            link: "https://click.linksynergy.com/deeplink?id=1aSwjBzRdaI&mid=44583&murl=https%3A%2F%2Fwww.newegg.com%2FShell-Shocker%2FEventSaleStore%2FID-10381",
            alt: "Newegg Shell Shocker"
        },
        {
            image: "https://fanttik.com/cdn/shop/files/A_APP_1-1.jpg?v=1767698081&width=600",
            link: "https://www.dpbolvw.net/click-101815247-17065965",
            alt: "Fanttik"
        },
        {
            image: "https://www.colormango.com/home-hobby/s_boxshot/stdcheck_153121.png",
            link: "https://www.dpbolvw.net/click-101815247-11680307",
            alt: "STDCheck"
        },
        {
            image: "https://www.awltovhc.com/image-101815247-12500877",
            link: "https://www.anrdoezrs.net/click-101815247-12500877",
            alt: "GameFly Free Trial"
        },
        {
            image: "https://www.ftjcfx.com/image-101815247-14515563",
            link: "https://www.anrdoezrs.net/click-101815247-14515563",
            alt: "Fresh Coffee Roaster"
        },
        {
            image: "https://www.tqlkg.com/image-101815247-17267212",
            link: "https://www.jdoqocy.com/click-101815247-17267212",
            alt: "Abracadabranyc"
        }
    ];

    const popup = document.getElementById("affiliatePopup");
    const img = document.getElementById("popup-ad-image");
    const link = document.getElementById("popup-ad-link");

    if (!popup || !img || !link) return;

    // Shuffle ads randomly
    const shuffledAds = [...ads].sort(() => Math.random() - 0.5);

    let currentIndex = 0;

    function loadAd() {
        if (currentIndex >= shuffledAds.length) {
            popup.style.display = "none";
            return;
        }

        const ad = shuffledAds[currentIndex];

        img.onload = function () {
            link.href = ad.link;
            img.alt = ad.alt;
            console.log("Loaded ad:", ad.alt);
        };

        img.onerror = function () {
            console.warn("Failed image:", ad.image);
            currentIndex++;
            loadAd();
        };

        img.src = ad.image + (ad.image.includes("?") ? "&" : "?") + "cb=" + Date.now();
    }

    loadAd();
});
