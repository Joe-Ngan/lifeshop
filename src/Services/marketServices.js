export function fetchMarket(){
    return fetch('/api/market', {
        method:'GET',
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

export function fetchAddMarketItem(newItem, username){
    return fetch('/api/market/item', {
        method:'POST',
        headers: new Headers({
            'content-type': 'application/json'
          }),
        body: JSON.stringify({ newItem, username }),
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

export function fetchDeleteMarketItem(itemId, username){
    return fetch('/api/market/item',{
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