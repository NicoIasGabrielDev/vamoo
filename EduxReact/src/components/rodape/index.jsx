import React from 'react';
import logo_1 from '../../assests/img/logo_1.png'
const Rodape = () => {
    return(
        <footer >
            <div className="containers" style={{backgroundColor : '#000000', color : 'white'}}>

            <img src={logo_1} alt="Edux" style={{width : "64px", marginLeft : '47%', marginTop : '1em'}}/>
            </div>

            <div className="footer-copyright text-center py-3" style={{backgroundColor : '#000000', color : 'white'}}>© 2020 Copyright:
                <a href="github.com/BrenoPierin/EduxReact"> Os Desenformados</a>
            </div>

        </footer>
    );
}

export default Rodape;