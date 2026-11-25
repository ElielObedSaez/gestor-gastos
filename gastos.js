const agregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const descripcion = document.getElementById("descripcion");
const monto = document.getElementById("monto");
const categoria = document.getElementById("categoria");
const total = document.getElementById("total");
const gastos = JSON.parse(localStorage.getItem("gastos")) || [];
let totalGastado = 0;

gastos.forEach(function (gasto) {
    mostrarGasto(gasto);
    totalGastado = (totalGastado + gasto.monto);
});
total.textContent = totalGastado;
function mostrarGasto(gasto) {
    const li = document.createElement("li");
    li.textContent = `${gasto.descripcion} / $${gasto.monto} / ${gasto.categoria} `;
    lista.appendChild(li);
}

agregar.addEventListener("click", function () {
    if (descripcion.value.trim() === "" || monto.value.trim() === "" || categoria.value.trim() === "") {
        return;
    }

    const datos = { descripcion: descripcion.value.trim(), monto: Number(monto.value), categoria: categoria.value.trim() };
    gastos.push(datos);
    localStorage.setItem("gastos", JSON.stringify(gastos));

    mostrarGasto(datos);



    totalGastado = (totalGastado + datos.monto);
    total.textContent = totalGastado;
    descripcion.value = "";
    monto.value = "";
    categoria.value = "";
});
