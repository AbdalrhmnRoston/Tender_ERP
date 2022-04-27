const scriptURL = 'https://script.google.com/macros/s/AKfycbxoYKFZ82qxtka4xfOC7ra7HKimiHLLF6aukwqD6lCSKg4q8dds4w7B2Updo0WxOPGHmw/exec' ;
        const form = document.forms['google-sheet'] ;
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log("Thanks for Contacting us..! We Will Contact You Soon..."))
            .catch(error => console.error('Error!', error.message))
        })
