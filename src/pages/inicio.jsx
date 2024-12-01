import React from 'react'
import '../assets/styles/Inicio.css';

function inicio() {
  return (
    <>
        <div className="linea"></div>
        <section className="nosotros" id="nosotros">
                <div className="nosotros-header">
                    <h1>Acerca de nosotros</h1><br></br>
                </div>
                <div className="nosotros-content">
                    <p>En ServiTIC , nos especializamos en la reparación de dispositivos electrónicos como computadoras, teléfonos móviles, tabletas y otros aparatos tecnológicos. Desde nuestros inicios, hemos estado comprometidos con brindar soluciones eficientes, precisas y seguras a nuestros clientes. <br></br><br></br>

                    Nuestro enfoque en la innovación y la mejora continua nos ha permitido crecer significativamente, ampliando nuestra plantilla de empleados y, con ello, nuestras capacidades operativas. Reconocemos que el éxito de nuestra empresa radica en la confianza y satisfacción tanto de nuestros clientes como de nuestro equipo, por lo que hemos decidido apostar por la tecnología para optimizar nuestras operaciones internas.</p>
                </div>
                <div className="mision-vision">
                    <div className="mision">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                        </svg>
                        <h3>Mision</h3>
                        <p>Brindar soluciones tecnológicas de alta calidad a nuestros clientes, con un enfoque en la innovación y la mejora continua.</p>
                    </div>
                    <div className="vision">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                      </svg>
                      <h3>Visión</h3>
                      <p>Convertirnos en una empresa liénea en el mercado de reparación de dispositivos electrónicos, reconocida por nuestra calidad y servicio excepcional.</p>
                    </div>
                    <div className="valores">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" fill="currentColor" class="bi bi-arrow-through-heart" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z"/>
                      </svg>
                      <h3>Valores</h3>
                      <p>Innovación, Calidad, Eficiencia y Compromiso</p>
                      <p>Con iniciativas como la implementación de un sistema automatizado de gestión de nómina, buscamos fortalecer nuestras operaciones internas, 
                      reducir errores y mejorar la experiencia de nuestros empleados, quienes son el motor que impulsa nuestra misión.</p>
                    </div>
                </div>
            </section>
    </>
  )
}

export default inicio