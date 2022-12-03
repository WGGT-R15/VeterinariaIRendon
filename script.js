const contenedorQueContieneLosProductos = document.querySelector(".pogacion");

const getData = async () => {
  const response = await fetch(
    "https://http-nodejs-production-462e.up.railway.app/getAll"
  );

  return await response.json();
};

const renderData = async () => {
  const data = await getData();
  console.log(data)
  const html = data.map(({ id, nombre, precio, imagen_url }) => {
    return `<div class="produ">
    <img class="imagin" src="${imagen_url}" alt="">
    <table class="cartasfeiks">
      <thead>
        <tr>
          <th scope="col">ID: </th>
          <th scope="col">Nombre: </th>
          <th scope="col">Precio: </th>
        </tr>
      </thead>
      <div class="layer">
        <tbody>
          <tr>
            <td>
              ${id}
            </td>
            <td>
              ${nombre}
            </td>
            <td>
              ${precio}
            </td>
          </tr>
        </tbody>
      </div>
    </table>
  </div>
    `;
  });

  contenedorQueContieneLosProductos.innerHTML = html.join("");
};

renderData()