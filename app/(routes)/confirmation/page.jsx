const Confirmation = () => {
  return (
    <div className="flex justify-center m-52 ">
      <div className="text-center p-10 bg-green-500 text-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">¡Pago exitoso!</h2>
        <p className="mt-2">Gracias por su compra.</p>
        {/* Puedes agregar más información aquí, como detalles del pedido, etc. */}
      </div>
    </div>
  );
};

export default Confirmation;
