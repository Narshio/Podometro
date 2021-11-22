import Navbar from "../components/navbar";
import { db, admin } from "../utils/fireBaseAdmin"
import nookies from "nookies"

export default ({carreras}) => {

    return <>

        <Navbar />

        <div className="col s12 ">
            <div className="card-panel teal #bdbdbd grey lighten-1">
                <div className="row">
                    <div className="col 12">

                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>distancia</th>
                                    <th>No. participantes</th>
                                    <th>Participantes</th>
                                </tr>
                            </thead>

                            <tbody>
                            {
                                    carreras.map((carrera, index) => index < 5 && <tr>
                                        <td>{carrera.nombreC}</td>
                                        <td>{carrera.distancia}</td>
                                        <td>{carrera.Integrantes}</td>
                                        <td>{carrera.correos}</td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export const getServerSideProps = async (context) => {
    try {
        const cookies = nookies.get(context);
        const token = await admin.auth().verifyIdToken(cookies.token);
        const { email } = token;

        const carreras = await db.collection('users').doc(email).collection("carrera").get();
        let mCarreras = []
        carreras.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            mCarreras.push({ N: doc.id, ...doc.data() })
        });

        return {
            props: { carreras: mCarreras },
        };
    } catch (err) {
        console.log(err)
        return { props: { carreras: [] } };
    }
};
