// Navigation Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    menuBtn.setAttribute('aria-expanded', String(!open));
  });
}

nav?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    if (window.innerWidth < 721) nav.style.display = 'none';
  })
);

// Dynamic Footer Year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Random Popup Ad Script
document.addEventListener("DOMContentLoaded", function () {
  const ads = [
    {
      image: "https://www.awltovhc.com/image-101807649-13588852",
      link: "https://www.kqzyfj.com/click-101807649-13588852",
      alt: "Coffee Quiz"
    },
    {
      image: "https://ad.linksynergy.com/fs-bin/show?id=1aSwjBzRdaI&bids=2055733.47&subid=0&type=4&gridnum=0",
      link: "https://click.linksynergy.com/fs-bin/click?id=1aSwjBzRdaI&offerid=2055733.47&subid=0&type=4",
      alt: "Certified Piedmontese"
    },
    {
      image: "https://ad.linksynergy.com/fs-bin/show?id=1aSwjBzRdaI&bids=1562891.755&subid=0&type=4&gridnum=0",
      link: "https://click.linksynergy.com/fs-bin/click?id=1aSwjBzRdaI&offerid=1562891.755&subid=0&type=4",
      alt: "Kobo Clara Colour – Judge your books by their colors/colours"
    },
    {
      image: "https://ad.linksynergy.com/fs-bin/show?id=1aSwjBzRdaI&bids=1930940.13&subid=0&type=4&gridnum=19",
      link: "https://click.linksynergy.com/fs-bin/click?id=1aSwjBzRdaI&offerid=1930940.13&subid=0&type=4",
      alt: "Samsung VTX US"
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
      image: "https://www.tqlkg.com/image-101815247-15877593",
      link: "https://www.kqzyfj.com/click-101815247-15877593",
      alt: "SurfShark"
    },
    {
      image: "https://www.ftjcfx.com/image-101815247-17303394",
      link: "https://www.anrdoezrs.net/click-101815247-17303394",
      alt: "NordVPN"
    },
    {
      image: "https://www.lduhtrp.net/image-101815247-17137908",
      link: "https://www.anrdoezrs.net/click-101815247-17137908",
      alt: "Wondershare"
    },
    {
      image: "https://www.awltovhc.com/image-101815247-17242076",
      link: "https://www.tkqlhce.com/click-101815247-17242076",
      alt: "Fytoo"
    },
    {
      image: "https://www.tqlkg.com/image-101815247-14046915",
      link: "https://www.kqzyfj.com/click-101815247-14046915",
      alt: "Discount School Supply!"
    },
    {
      image: "https://www.awltovhc.com/image-101815247-17292718",
      link: "https://www.kqzyfj.com/click-101815247-17292718",
      alt: "KontrolFreaks"
    },
    {
      image: "https://www.ftjcfx.com/image-101815247-17288759",
      link: "https://www.jdoqocy.com/click-101815247-17288759",
      alt: "Aliexpress"
    },
    {
      image: "https://www.ftjcfx.com/image-101815247-17081967",
      link: "https://www.dpbolvw.net/click-101815247-17081967",
      alt: "BenQ"
    },
    {
      image: "https://www.tqlkg.com/image-101815247-17331336",
      link: "https://www.kqzyfj.com/click-101815247-17331336",
      alt: "Homestyler"
    },
    {
      image: "https://www.tqlkg.com/image-101815247-17299413",
      link: "https://www.jdoqocy.com/click-101815247-17299413",
      alt: "Kijou"
    },
    {
      image: "https://www.awin1.com/cshow.php?s=4712835&v=66494&q=573723&r=3031011",
      link: "https://www.awin1.com/cread.php?s=4712835&v=66494&q=573723&r=3031011",
      alt: "Mooncool"
    },
    {
      image: "https://www.tqlkg.com/image-101815247-17329785",
      link: "https://www.dpbolvw.net/click-101815247-17329785",
      alt: "Cheapvuelo"
    },
    {
      image: "https://www.awin1.com/cshow.php?s=3495427&v=18808&q=386371&r=3031011",
      link: "https://www.awin1.com/cread.php?s=3495427&v=18808&q=386371&r=3031011",
      alt: "RentCars"
    },
    {
      image: "https://www.awin1.com/cshow.php?s=4382635&v=45915&q=570758&r=3031011",
      link: "https://www.awin1.com/cread.php?s=4382635&v=45915&q=570758&r=3031011",
      alt: "FNTCase"
    },
    {
      image: "https://www.awin1.com/cshow.php?s=4878644&v=128579&q=609305&r=3031011",
      link: "https://www.awin1.com/cread.php?s=4878644&v=128579&q=609305&r=3031011",
      alt: "Everblog"
    }
  ];

  const popup = document.getElementById("affiliatePopup");
  const img = document.getElementById("popup-ad-image");
  const link = document.getElementById("popup-ad-link");

  if (!popup || !img || !link || ads.length === 0) return;

  // Shuffle ads randomly on each load
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
      img.alt = ad.alt || "Advertisement";
      console.log("Loaded ad:", ad.alt);
    };

    img.onerror = function () {
      console.warn("Failed image:", ad.image);
      currentIndex++;
      loadAd();
    };

    // Cache-busting timestamp ensures browsers load a fresh ad each visit
    img.src = ad.image + (ad.image.includes("?") ? "&" : "?") + "cb=" + Date.now();
  }

  loadAd();
});
