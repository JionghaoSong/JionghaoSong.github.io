// 解密成功后，触发 lazySizes 检查图片懒加载
document.addEventListener('decryptSuccess', function () {
  if (window.lazySizes) {
    lazySizes.autoSizer.checkElems();
  }

  // 补救措施：强制恢复 data-src 到 src
  document.querySelectorAll('img[data-src]').forEach(img => {
    if (!img.src || img.src === '') {
      img.src = img.getAttribute('data-src');
    }
  });
});
