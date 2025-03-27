window.onload = function () {
  if (typeof jQuery === "undefined") {
    console.error("jQuery is not loaded!");
    return;
  }

  fish();
};

function fish() {
  let footer = $("#footer");

  // 避免重复创建飞鱼容器
  if ($("#jsi-flying-fish-container").length === 0) {
      footer.append('<div class="container" id="jsi-flying-fish-container"></div>');
  }

  $("#jsi-flying-fish-container").css({
      position: "absolute",
      width: "100%",
      height: "100%",  // 让它充满整个 footer
      bottom: 0,
      left: 0
  });

  // 避免重复加载 fish-base.js
  if (!$("script[src='/styles/fish-base.js']").length) {
      $("body").append('<script src="/styles/fish-base.js"></script>');
  }
}
