function toggleForm(formType) {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (formType === "signup") {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
  } else {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  }
}

function handleLogin() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email && password) {
    alert(`Logged in with Email: ${email}`);
    // Add backend integration for login here
  } else {
    alert("Please fill in all fields.");
  }
}
function handleLogin() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email && password) {
    // عملية تسجيل الدخول الناجحة
    alert(`Logged in with Email: ${email}`);
    // إعادة التوجيه إلى الصفحة الرئيسية
    window.location.href = "code.html";
  } else {
    alert("Please fill in all fields.");
  }
}

function handleSignup() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (name && email && password) {
    // عملية التسجيل الناجحة
    alert(`Signed up with Name: ${name}, Email: ${email}`);
    // إعادة التوجيه إلى الصفحة الرئيسية
    window.location.href = "code.html";
  } else {
    alert("Please fill in all fields.");
  }
}
function isValidEmail(email) {
  // تعبير منتظم للتحقق من صحة البريد الإلكتروني
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function handleLogin() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email && password) {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // عملية تسجيل الدخول الناجحة
    alert(`Logged in with Email: ${email}`);
    // إعادة التوجيه إلى الصفحة الرئيسية
    window.location.href = "code.html";
  } else {
    alert("Please fill in all fields.");
  }
}

function handleSignup() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (name && email && password) {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // عملية التسجيل الناجحة
    alert(`Signed up with Name: ${name}, Email: ${email}`);
    // إعادة التوجيه إلى الصفحة الرئيسية
    window.location.href = "code.html";
  } else {
    alert("Please fill in all fields.");
  }
}

