export default async function addProduct(id_user, id_product) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"action":"add","id_user": id_user,"id_product": id_product});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8000/action", requestOptions)
    .then(response => response.text())
    .then(result => window.location.reload())
    .catch(error => console.log('error', error));
}