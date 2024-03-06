
document.getElementById("btn-division-auth").classList.add("btn-division-background");
document.getElementById("popap-auth").classList.add("display-block");

// REGIST DIVISION BUTTON
document.querySelectorAll('.btn-division-regist').forEach(el => 
  el.addEventListener('click', () =>
      document.getElementById('popap-auth').classList.remove("display-block")
  )
);
document.querySelectorAll('.btn-division-regist').forEach(el => 
  el.addEventListener('click', () =>
      document.getElementById('popap-regist').classList.add("display-block")
  )
);
document.querySelectorAll('.btn-division-regist').forEach(el => 
  el.addEventListener('click', () =>
      document.getElementById('btn-division-auth').classList.remove("btn-division-background")
  )
);
document.querySelectorAll('.btn-division-regist').forEach(el => 
  el.addEventListener('click', () =>
  document.getElementById('btn-division-regist').classList.add("btn-division-background")
  )
);
document.querySelectorAll('.btn-division-regist').forEach(el => 
  el.addEventListener('click', () =>
      document.getElementById('popap-recover-password').classList.remove("show")
  )
);
// AUTH DIVISION BUTTON
document.querySelectorAll('.btn-division-auth').forEach(el => 
  el.addEventListener('click', () =>
      document.getElementById('popap-regist').classList.remove("display-block")
  )
);
document.querySelectorAll('.btn-division-auth').forEach(el => 
  el.addEventListener('click', () =>
      document.getElementById('popap-auth').classList.add("display-block")
  )
);
document.querySelectorAll('.btn-division-auth').forEach(el => 
  el.addEventListener('click', () =>
      document.getElementById('btn-division-regist').classList.remove("btn-division-background")
  )
);
document.querySelectorAll('.btn-division-auth').forEach(el => 
  el.addEventListener('click', () =>
  document.getElementById('btn-division-auth').classList.add("btn-division-background")
  )
);
document.querySelectorAll('.btn-division-auth').forEach(el => 
  el.addEventListener('click', () =>
      document.getElementById('popap-recover-password').classList.remove("show")
  )
);



document.querySelectorAll('.btn-recover-password').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById('popap-recover-password').classList.toggle("show")
    )
  );

  document.querySelectorAll('.btn-recover-password').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById('popap-auth').classList.remove("display-block")
    )
  );

