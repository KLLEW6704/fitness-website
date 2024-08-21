function saveRecord() {
    const record = document.getElementById('fitnessRecord').value;
    const savedRecords = document.getElementById('savedRecords');
    if (record) {
        savedRecords.innerHTML += `<p>${record}</p>`;
        document.getElementById('fitnessRecord').value = '';
    } else {
        alert('请先输入记录内容！');
    }
}

function saveDiet() {
    const diet = document.getElementById('dietDiary').value;
    const savedDiet = document.getElementById('savedDiet');
    if (diet) {
        savedDiet.innerHTML += `<p>${diet}</p>`;
        document.getElementById('dietDiary').value = '';
    } else {
        alert('请先输入饮食内容！');
    }
}

// 登录和注册功能的占位符
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('登录功能尚未实现');
});

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('注册功能尚未实现');
});