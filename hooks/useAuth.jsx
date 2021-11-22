import { useEffect } from 'react';
import {AuthContext} from '../context/authProvider'

export default ({usuario, contraseña}) => {

    

    return useContext(AuthContext);
  };