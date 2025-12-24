// ✅ এখানে তোমার Registration Number + Password সেট করো
const VALID_REG = "2019811290";
const VALID_PASS = "90861000";

// ✅ Redirect page
const REDIRECT_PAGE = "dashboard.html";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const reg = document.getElementById("reg").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (reg === VALID_REG && pass === VALID_PASS) {
    window.location.href = REDIRECT_PAGE;
  } else {
    alert("Invalid Registration No. or Password!");
  }
});
