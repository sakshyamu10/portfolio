document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill out all fields.";
  } else {
    formMsg.style.color = "green";
    formMsg.textContent = "Message sent successfully!";
    // You could reset the form or send to a backend later
    this.reset();
  }
});
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMessage");

    if (!name || !email || !message) {
      msg.textContent = "Please fill in all fields.";
      msg.style.color = "red";
    } else {
      msg.textContent = "Thanks! Message sent.";
      msg.style.color = "green";
      this.reset();
    }
  });
  const topBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.classList.remove("hidden");
    } else {
      topBtn.classList.add("hidden");
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
    AOS.init({
    duration: 1000,
    once: true,
  });
   const toggle = document.getElementById("darkToggle");
  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });

