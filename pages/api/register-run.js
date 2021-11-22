import { create } from "../../utils/register-run"
import {parseCookies} from "nookies"
import {admin} from "../../utils/fireBaseAdmin"

export default async (req, res) => {
    const { Integrantes, Distancia,Correos,nombreC } = req.body;

    const cookies = parseCookies({ req });
    const token = await admin.auth().verifyIdToken(cookies.token);
    const { email } = token;

    create(email,Integrantes, Distancia, Correos, nombreC).then((_) => res.status(200).end()).catch(() => res.status(500).end())
}
