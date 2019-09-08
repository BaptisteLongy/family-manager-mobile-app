const ShoppingAPIEndPoint = 'http://91.169.224.65:49153/'

export function getShoppingList(id) {
    const url = ShoppingAPIEndPoint + '/ShoppingList/' + id
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function addShoppingItem(idList, nameItem) {
    const url = ShoppingAPIEndPoint + '/ShoppingList/' + idList + '/AddItem'
    return fetch(
        url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name:nameItem})
        }
    ).then((response) => response.json())
    .catch((error) => console.error(error))
}

export function deleteShoppingItem(idList, idToDelete) {
    const url = ShoppingAPIEndPoint + '/ShoppingList/' + idList + '/DeleteItem/' +idToDelete
    return fetch(
        url, {
            method: 'PUT'
        }
    ).then((response) => response.json())
    .catch((error) => console.error(error))

}