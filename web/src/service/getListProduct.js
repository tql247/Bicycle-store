export default async function getListProduct(obj) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      "http://localhost:8000/product",
      requestOptions,
    );

    const data = await response.json();
    obj.setState({ product: data, isLoad: true})
}