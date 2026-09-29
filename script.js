document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("themeBtn");
  themeBtn.addEventListener("click", () => {
    const isDark = document.body.dataset.theme === "dark";
    if (isDark) {
      delete document.body.dataset.theme;
      themeBtn.textContent = "🌙";
    } else {
      document.body.dataset.theme = "dark";
      themeBtn.textContent = "☀️";
    }
  });

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  menuBtn.addEventListener("click", () => nav.classList.toggle("show"));

  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".project-item");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tag = btn.dataset.tag;
      items.forEach(item => {
        item.style.display = (tag === "all" || item.dataset.category === tag) ? "block" : "none";
      });
    });
  });

  const msg = document.getElementById("msg");
  const charCount = document.getElementById("charCount");
  msg.addEventListener("input", () => {
    charCount.textContent = `${msg.value.length}/200`;
  });

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = msg.value.trim();
    let valid = true;

    document.getElementById("nameErr").textContent = name ? "" : "Cần nhập họ tên";
    document.getElementById("emailErr").textContent = /\S+@\S+\.\S+/.test(email) ? "" : "Email không hợp lệ";
    document.getElementById("msgErr").textContent = message.length >= 5 ? "" : "Cần tối thiểu 5 ký tự";

    if (!name || !/\S+@\S+\.\S+/.test(email) || message.length < 5) valid = false;

    if (valid) {
      document.getElementById("successMsg").textContent = "Gửi thành công!";
      form.reset();
      charCount.textContent = "0/200";
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});