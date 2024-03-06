document.getElementById('popap-cms').classList.add("show");


document.querySelectorAll('.btn-close-popap-cms').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById('popap-cms').classList.remove("show")
    )
  );