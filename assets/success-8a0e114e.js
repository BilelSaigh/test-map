import"./modulepreload-polyfill-3cfb730f.js";console.log("Script started successfully");WA.onInit().then(async()=>{let o=new URL(window.location.href).searchParams.get("param");console.log(o);let t=document.querySelector(".card-title");t.textContent=o,console.log("ROOM CREEATED.."),WA.nav.goToRoom("conference")}).catch(e=>console.error(e));