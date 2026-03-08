// Dữ liệu lời chúc (Giữ nguyên)
const wishes = {
    'me': {
        title: "Gửi Mẹ yêu thương!",
        content: "Chúc Mẹ ngày 8/3 thật hạnh phúc, luôn mạnh khỏe và tươi cười. Cảm ơn Mẹ vì đã luôn là điểm tựa ấm áp của cả nhà!"
    },
    'hien': {
        title: "Gửi Chị Hiền!",
        content: "Chúc chị Hiền ngày 8/3 thật nhiều niềm vui. Chúc chị luôn mạnh khoẻ, vững vàng và lạc quan để vượt qua giai đoạn khó khăn này, sớm đạt được thành công chị nhé!"
    },
    'tien': {
        title: "Gửi Chị Tiên!",
        content: "Chúc chị Tiên ngày 8/3 thật rạng rỡ. Chúc chị luôn mạnh khoẻ, xinh đẹp, yêu đời và đạt được nhiều thành công chị nhé!"
    }
};

// Hàm hiển thị lời chúc (Giữ nguyên)
function showWish(person) {
    const card = document.getElementById('wish-display');
    const title = document.getElementById('wish-title');
    const content = document.getElementById('wish-content');

    title.innerText = wishes[person].title;
    content.innerText = wishes[person].content;
    
    card.classList.remove('hidden');
}

// Hàm đóng lời chúc (Giữ nguyên)
function closeWish() {
    document.getElementById('wish-display').classList.add('hidden');
}

// Hàm tạo hiệu ứng lấp lánh (Sparkles) - TỐI ƯU HÓA
function createSparkle() {
    // Chỉ tạo hạt lấp lánh khi tab trình duyệt đang hoạt động để tiết kiệm tài nguyên
    if (document.hidden) return;

    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Kích thước ngẫu nhiên
    const size = Math.floor(Math.random() * 8 + 4) + 'px';
    
    // Màu sắc ngẫu nhiên trong tông hồng ấm áp
    const colors = ['#f48fb1', '#f06292', '#ffc1e3', '#ffffff']; // Thêm màu trắng cho sáng
    
    // Thiết lập style bằng Object.assign để tối ưu hơn
    Object.assign(sparkle.style, {
        width: size,
        height: size,
        left: Math.floor(Math.random() * 100) + 'vw',
        top: '100vh',
        background: colors[Math.floor(Math.random() * colors.length)],
        boxShadow: '0 0 10px white' // Thêm bóng để lấp lánh hơn
    });
    
    document.body.appendChild(sparkle);
    
    // Tự động xóa sparkle sau khi animation kết thúc (4s)
    setTimeout(() => {
        sparkle.remove();
    }, 4000); // Khớp với thời gian animation trong CSS
}

// Chạy hiệu ứng mỗi 800ms (giảm tần suất để trang web mượt hơn)
setInterval(createSparkle, 800);