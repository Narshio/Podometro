import Navbar from "../components/navbar";
import { db, admin } from "../utils/fireBaseAdmin"
import nookies from "nookies"

export default ({ carreras }) => {
    return <>
        <Navbar />

        <div className="col s12 ">
            <div className="card-panel teal #bdbdbd grey lighten-1">
                <div className="row">
                    <div className="col 12">

                        <table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Distancia</th>
                                    <th>Pasos</th>
                                    <th>Tiempo</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    carreras.map((carrera, index) => index < 5 && <tr>
                                        <td>{carrera.N}</td>
                                        <td>{carrera.distancia}<i> Km</i></td>
                                        <td>{carrera.pasos}</td>
                                        <td>{carrera.tiempo}<i>'</i></td>
                                        <td>{carrera.fecha}</td>
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

        const carreras = await db.collection('users').doc(email).collection("carreras").get();
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