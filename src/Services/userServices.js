export function fetchBuyItem(itemId, username){
    return fetch('/api/user/item', {
        method:'POST',
        headers: new Headers({
            'content-type': 'application/json'
          }),
        body: JSON.stringify({ itemId, username }),
    })
    .catch(()=> Promise.reject({ error : 'networkError' }))
    .then( response => {
        if (response.ok){
            return response.json();
        }
        return response.json()
        .catch( error => Promise.reject({ error }))
        .then( err => Promise.reject( err ) );
    });
  };

export function fetchDeleteItem(itemId, username){
    return fetch('/api/user/item',{
        method:'DELETE',
        headers: new Headers({
            'content-type': 'application/json'
          }),
        body: JSON.stringify({ itemId, username }),
    })
    .catch(()=> Promise.reject({ error : 'networkError' }))
    .then( response => {
        if (response.ok){
            return response.json();
        }
        return response.json()
        .catch( error => Promise.reject({ error }))
        .then( err => Promise.reject( err ) );
    }); 
}