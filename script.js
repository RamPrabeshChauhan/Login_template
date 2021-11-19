const scriptURL = 'https://script.google.com/macros/s/AKfycby06tYWq5cvlTNQu5Sl_k6IeeIzNgqwsCRotRIgd1nBCCzlFQtM3GQqV0IB-e7dxRbG/exec'

const form = document.forms['google-sheet'] 
        
form.addEventListener('submit', e => 
{
    e.preventDefault() 
    fetch(scriptURL, 
    { 
        method: 'POST', body: new FormData(form)
    })

    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
            