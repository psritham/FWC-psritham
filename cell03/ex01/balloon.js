const balloon = document.getElementById('balloon');

let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

function updateBalloon() {
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.backgroundColor = colors[colorIndex];
}

// เมื่อคลิก: ขยาย 10px และเปลี่ยนสีเรียงตามลำดับ (Red -> Green -> Blue)
balloon.addEventListener('click', () => {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;

    // ถ้าขนาดมากกว่า 420px ให้ระเบิดกลับเป็นขนาดเดิมและสีเริ่มต้น
    if (size > 420) {
        size = 200;
        colorIndex = 0;
    }

    updateBalloon();
});

// เมื่อเอาเมาส์ออก (mouseleave): หดลง 5px และเปลี่ยนสีย้อนกลับ (Red -> Blue -> Green)
balloon.addEventListener('mouseleave', () => {
    if (size > 200) {
        size -= 5;
        if (size < 200) {
            size = 200;
        }
        
        // ย้อนลำดับสี
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    }

    updateBalloon();
});