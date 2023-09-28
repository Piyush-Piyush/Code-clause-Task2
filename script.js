let btn = document.getElementById("shortBtn");
const copyButton = document.getElementById('copyButton');
btn.addEventListener('click', short);

async function short() {
    let shortUrl = document.getElementById("shortUrl")
    let longUrl = document.getElementById("longUrl").value;

    const url = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`, {
        method: 'GET' 
    });
    const data = await url.json();
    console.log(data)

    shortUrl.value = data.result.short_link

    
}

copyButton.addEventListener('click', copyToClipboard);

function copyToClipboard() {
    const shortUrlInput = document.getElementById('shortUrl');
    shortUrlInput.select(); 
    document.execCommand('copy');
  

    const promptElement = document.getElementById('prompt');
    promptElement.style.opacity = '1';
  
    setTimeout(() => {
      promptElement.style.opacity = '0';
    }, 1000);
  }