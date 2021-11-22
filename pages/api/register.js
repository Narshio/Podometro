import { create } from "../../utils/register"

export default (req, res) => {
  const { apellido_materno, apellido_paterno, fecha_Nacimiento, nombre, numero, resultado, direccion, edad,
    plantel, provider, talla, email, password } = req.body;

  create(apellido_materno, apellido_paterno, fecha_Nacimiento, nombre, numero, resultado, direccion, edad,
    plantel, provider, talla, email, password).then((_) => res.status(200).end()).catch(() => res.status(500).end())
}
