// Drawer open/close (2nd pic behavior)
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const btnOpenDrawer = document.getElementById("btnOpenDrawer");

function openDrawer(){
  drawer.classList.add("open");
  overlay.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDrawer(){
  drawer.classList.remove("open");
  overlay.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

btnOpenDrawer.addEventListener("click", openDrawer);
overlay.addEventListener("click", closeDrawer);

// ESC to close
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeDrawer();
});

// Menu active highlight + dynamic content swap
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(btn => {
  btn.addEventListener("click", () => {
    const view = btn.getAttribute("data-view");

    // 🔹 ফলাফল অনুসন্ধান → নতুন পেজ
    if (view === "result_search") {
      window.location.href = "result.html";
      return;
    }
    if (view === "verify") {
  window.location.href = "test.html";
  return;
}

     
  if (view === "profile") {
  window.location.href = "profile.html";
  return;
  
}
    // 🔹 অন্য menu আগের মতোই
    menuItems.forEach(x => x.classList.remove("active"));
    btn.classList.add("active");

    closeDrawer();
    loadView(view);
  });
});




// Tabs (Notice/Message)
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(t => {
  t.addEventListener("click", () => {
    tabs.forEach(x => x.classList.remove("active"));
    t.classList.add("active");

    const id = t.getAttribute("data-tab");
    panels.forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  });
});

// Default: show Notice directly (as you asked)
window.addEventListener("load", () => {
  // ensure Notice tab is active
  document.querySelector('.tab[data-tab="noticeTab"]').click();
  // ensure default selected menu (Apply like screenshot)
  // but dashboard content is Notice area visible (like 1st pic)
  loadView("notice");
});

function loadView(view){
  // We keep your main home (Notice/Message + Profile/About) always visible like screenshot.
  // This function can be expanded later if you want different pages.
  // For now: only small title change so it stays "dynamic" but UI doesn't change.
  const titleMap = {
    notice: "নোটিশবোর্ড",
    apply: "আবেদনপত্র",
    profile: "প্রোফাইল",
    academic: "একাডেমিক রেকর্ড হালনাগাদ",
    form: "তথ্য/যোগাযোগ ফর্ম",
    result: "ফলাফল",
    result_search: "ফলাফল অনুসন্ধান",
    verify_fee: "যাচাই ফি",
    adjust_fee: "সমন্বয় ফি",
    card_grade: "কার্ড/গ্রেড শীট",
    fees_all: "ফি আদায় (সকল ফি)",
    re_admission: "পুনঃভর্তি/একাডেমিক আবেদন",
    syllabus: "একাডেমিক সিলেবাস",
    teacher: "শিক্ষক তথ্য"
  };

  // App title stays same; if you want we can show a small toast.
  // Just for dynamic feel (optional): console log
  console.log("View:", view, titleMap[view] || view);
}
// LOGOUT FUNCTION
const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", () => {
  const confirmLogout = confirm("আপনি কি নিশ্চিত যে লগআউট করতে চান?");

  if (confirmLogout) {
    // session / login data clear
    localStorage.clear();
    sessionStorage.clear();

    // redirect to login page
    window.location.href = "login.html"; 
    // 👉 আপনি চাইলে অন্য পেজ নাম দিতে পারেন
  }
});



