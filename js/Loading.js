window.addEventListener('load', function () {
    const loader = document.getElementById('loading-screen');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1000);
    }, 4500); // مدة ظهور شاشة التحميل بالكامل
});