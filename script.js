document.getElementById("showEvent").addEventListener("click", function() {
    const eventMessage = document.getElementById("eventMessage");
    const eventImage = document.getElementById("eventImage");
    eventMessage.classList.remove("hidden");

document.getElementById("playMusic").addEventListener("click", function() {
    const music = document.getElementById("bgMusic");
     music.play();
});
    

    // Valentine's Week Surprises
    const valentineEvents = {
        "2/7": { msg: "🌹 Rose Day - A virtual rose for you! 🌹", img: "images/rose-day.jpg" },
        "2/8": { msg: "💍 Propose Day - I’d say YES a million times! 💖", img: "images/propose-day.jpg" },
        "2/9": { msg: "🍫 Chocolate Day - Sending you sweet chocolates 🍫", img: "images/chocolate-day.jpg" },
        "2/10": { msg: "🐻 Teddy Day - A cuddly teddy for my love 🧸", img: "images/teddy-day.jpg" },
        "2/11": { msg: "🤝 Promise Day - A promise of forever! 💞", img: "images/promise-day.jpg" },
        "2/12": { msg: "💋 Hug Day - A warm virtual hug 🤗", img: "images/hug-day.jpg" },
        "2/13": { msg: "😘 Kiss Day - A sweet little peck! 💋", img: "images/kiss-day.jpg" },
        "2/14": { msg: "❤️ Valentine’s Day - You are my everything! 💖", img: "images/valentines-day.jpg" }
    };

    const today = new Date();
    const dateKey = `${today.getMonth() + 1}/${today.getDate()}`;
    const eventData = valentineEvents[dateKey] || { msg: "Every day is Love Day with you! 💕", img: "images/love.jpg" };

    eventMessage.innerText = eventData.msg;
    eventImage.src = eventData.img;
    eventImage.classList.remove("hidden");
});

// Countdown to Valentine's Day
function updateCountdown() {
    const now = new Date();
    const valentine = new Date(now.getFullYear(), 1, 14); // February 14

    const diff = valentine - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (diff < 0) {
        document.getElementById("countdown").innerText = "Happy Valentine's Day! ❤️";
    }
}

setInterval(updateCountdown, 1000);

// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.querySelector(".hearts-container").appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 30 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);

document.getElementById("loveLetterBtn").addEventListener("click", function() {
    document.getElementById("loveLetterPopup").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("loveLetterPopup").style.display = "none";
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random speed
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);


let clickCount = 0;
document.getElementById("secretHeart").addEventListener("click", function() {
    clickCount++;
    if (clickCount === 3) {
        document.getElementById("secretMessage").classList.remove("hidden");
    }
});
