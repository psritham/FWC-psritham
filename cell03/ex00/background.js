document.getElementById('bgBtn').addEventListener('click', function() {
    // สุ่มรหัสสี HEX แบบ 6 หลัก (เช่น #a3f12c)
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    // เปลี่ยนสีพื้นหลังของ body
    document.body.style.backgroundColor = randomColor;
});