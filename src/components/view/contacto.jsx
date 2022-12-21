function Contacto() {
    return(

        <div className="contacto">
        

        <div className="formulario">

        <label htmlFor="name">Nombre:</label>

        <input type="text" placeholder="Ingresa tu nombre"/>

        <label htmlFor="email">Correo:</label>

        <input type="email" placeholder="Ingresa tu correo"/>

        <label htmlFor="message">Mensaje:</label>

        <textarea name="message" id="message"  placeholder="Ingresa tu mensaje"></textarea>
        <div className="boton">
        <button>Enviar</button>
        </div>

        </div>

        <div className="contactInfo">
        <h1>¡Contactanos!</h1>
        <p>Si tienes alguna duda o sugerencia, no dudes en contactarnos.</p>
        </div>

       
        
        </div>);
}

export default Contacto;