let storage = window.localStorage;



if(storage.getItem("style")!=undefined){
    document.getElementById('stylechanger').setAttribute('href', storage.getItem('style'));
  }else{
    storage.setItem("style", 'style/main.css'); // Save to storage
  
  }
  
  function switcher () {
  
  
    let currentstyle = document.getElementById('stylechanger').getAttribute('href').trim();
    
    if (currentstyle == ('style/main.css')){
  
        document.getElementById('stylechanger').setAttribute('href', 'style/style.dark.css');
        storage.setItem("style", 'style/style.dark.css');
    }
    
    else{
  
        document.getElementById('stylechanger').setAttribute('href', 'style/main.css');
        storage.setItem("style", 'style/main.css');
    }
     
  }
  