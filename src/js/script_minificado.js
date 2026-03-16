const form=document.getElementById("contato_container"),numero="00900000000";form.addEventListener("submit",e=>{let r=form.querySelector(".erro")??!1;r&&r.classList.remove("erro"),e.preventDefault();let t=form.querySelector("#nome").value.trim(),o=form.querySelector("#telefone").value.replace(/\D/g,""),l=form.querySelector("#descricao").value.trim();if(form.checkValidity()){if(o.length<10||o.length>11){let n=form.querySelector("#telefone");n.classList.add("erro");return}}else{form.reportValidity();return}let s=`Ol\xe1, gostaria de um or\xe7amento.
    
    Nome: ${t}
    Telefone: ${o}
    Problema: ${l}
    `,a=encodeURIComponent(s),$=`https://wa.me/00900000000?text=${a}`;window.open($,"_blank")});const observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("show"),observer.unobserve(e))})},{threshold:.3}),hidden=document.querySelectorAll(".hidden");hidden.forEach(e=>observer.observe(e));