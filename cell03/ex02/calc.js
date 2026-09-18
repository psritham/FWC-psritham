const form = document.getElementById('calc-form');

// ฟังก์ชันตรวจสอบว่าเป็นจำนวนเต็มบวกหรือศูนย์ (>= 0)
function isPositiveInteger(str) {
    return /^\d+$/.test(str);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const leftStr = document.getElementById('left').value.trim();
    const operator = document.getElementById('operator').value;
    const rightStr = document.getElementById('right').value.trim();

    // ตรวจสอบ Input ต้องเป็นจำนวนเต็มบวกหรือ 0 เท่านั้น
    if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
        alert('Error :(');
        return;
    }

    const left = parseInt(leftStr, 10);
    const right = parseInt(rightStr, 10);

    // ตรวจสอบกรณีหารหรือหารเอาเศษด้วย 0
    if ((operator === '/' || operator === '%') && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;
        case '*':
            result = left * right;
            break;
        case '/':
            result = left / right;
            break;
        case '%':
            result = left % right;
            break;
    }

    alert(result);
    console.log(result);
});

// แจ้งเตือนทุกๆ 30 วินาทีตามข้อกำหนดมาตรฐานโปรเจกต์ 42
setInterval(function() {
    alert('Please, use me...');
}, 30000);