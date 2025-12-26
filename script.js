function login(role) {
  localStorage.setItem('role', role);
  if (role === 'admin') location.href = 'admin.html';
  if (role === 'student') location.href = 'student.html';
  if (role === 'employer') location.href = 'employer.html';
  if (role === 'officer') location.href = 'officer.html';
}

function showLoader(targetPage) {
  const loader = document.getElementById("loader");
  loader.classList.add("active");

  
  setTimeout(() => {
    window.location.href = targetPage;
},2000);
}