const wishes = {
    'me': {
        title: "Gửi Mẹ yêu thương!",
        content: "Chúc Mẹ ngày 8/3 thật hạnh phúc, luôn mạnh khỏe và tươi cười. Cảm ơn Mẹ vì đã luôn là điểm tựa ấm áp của cả nhà!"
    },
    'hien': {
        title: "Gửi Chị Hiền!",
        content: "Chúc chị Hiền ngày 8/3 thật rạng rỡ. Chúc chị luôn mạnh khoẻ, vững vàng và lạc quan để vượt qua giai đoạn khó khăn này, sớm đạt được thành công chị nhé!"
    },
    'tien': {
        title: "Gửi Chị Tiên!",
        content: "Chúc chị Tiên ngày 8/3 thật nhiều niềm vui. Chúc chị luôn mạnh khoẻ, xinh đẹp, yêu đời và đạt được nhiều thành công chị nhé!"
    },
    'nang': {
        title: "Gửi Bé Nắng!",
        content: "Chúc Nắng ngày 8/3 thật vui vẻ. Luôn chăm ngoan và học giỏi nhé!"
    },
    'may': {
        title: "Gửi Bé Mây!",
        content: "Chúc Mây ngày 8/3 thật vui tươi. Luôn ngoan ngoãn và hay ăn chóng lớn nhé!"
    }
};

function showWish(person) {
    const card = document.getElementById('wish-display');
    document.getElementById('wish-title').innerText = wishes[person].title;
    document.getElementById('wish-content').innerText = wishes[person].content;
    card.classList.remove('hidden');
}

function closeWish() {
    document.getElementById('wish-display').classList.add('hidden');
}

function createSparkle() {
    if (document.hidden) return;

    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    const size = Math.random() * 6 + 4 + 'px';
    const colors = ['#f48fb1', '#f06292', '#ffffff', '#ffeb3b'];
    
    Object.assign(sparkle.style, {
        width: size, height: size,
        left: Math.random() * 100 + 'vw',
        top: '100vh',
        background: colors[Math.floor(Math.random() * colors.length)],
        boxShadow: '0 0 8px white'
    });

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 4000);
}

// Tạo hạt mỗi 1.2 giây để đảm bảo máy chạy mượt tuyệt đối
setInterval(createSparkle, 1200);