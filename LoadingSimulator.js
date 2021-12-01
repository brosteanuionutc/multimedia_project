
    document.querySelector('.regForm').style.display='none';
    document.getElementById('load').classList.add('loader');


    setTimeout(()=>{  
    document.getElementById('load').classList.remove('loader');
    document.querySelector('.regForm').style.display='block';
  
    },3000)

