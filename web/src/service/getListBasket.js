export default async function getListBasket(obj) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"id_user":1});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const response = await fetch("http://localhost:8000/basket", requestOptions)
    const data = await response.json();
    obj.setState({ basket: data, isLoad: true})
}