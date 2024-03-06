document.getElementById("btn-online-payment").classList.add("btn-division-background");
document.getElementById("division-online-payment").classList.add("show");

document.querySelectorAll('.btn-payment-by-invoice').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById('division-online-payment').classList.remove("show")
    )
  );
  document.querySelectorAll('.btn-payment-by-invoice').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById('division-payment-by-invoice').classList.add("show")
    )
  );
  document.querySelectorAll('.btn-payment-by-invoice').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById("btn-online-payment").classList.remove("btn-division-background")
    )
  );
  document.querySelectorAll('.btn-payment-by-invoice').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById("btn-payment-by-invoice").classList.add("btn-division-background")
    )
  );




  document.querySelectorAll('.btn-online-payment').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById('division-online-payment').classList.add("show")
    )
  );
  document.querySelectorAll('.btn-online-payment').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById('division-payment-by-invoice').classList.remove("show")
    )
  );
  document.querySelectorAll('.btn-online-payment').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById("btn-online-payment").classList.add("btn-division-background")
    )
  );
  document.querySelectorAll('.btn-online-payment').forEach(el => 
    el.addEventListener('click', () =>
        document.getElementById("btn-payment-by-invoice").classList.remove("btn-division-background")
    )
  );