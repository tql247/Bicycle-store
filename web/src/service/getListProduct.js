export default async function getListProduct(obj) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/product`,
      requestOptions,
    );

    const data = await response.json();
    obj.setState({ product: data, isLoad: true})
}