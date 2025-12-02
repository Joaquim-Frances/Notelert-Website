'use client';

import { useEffect } from 'react';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Política de Privacidad - Notelert';
  }, []);

  return (
    <main className="legal-page">
      <div className="container">
        <div className="back-link">
          <a href="/">← Volver a Inicio</a>
        </div>
        <article className="legal-content">
          <h1>Política de Privacidad de Notelert</h1>
          <p className="last-updated"><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section>
            <h2>1. Introducción</h2>
            <p>
              Notelert ("nosotros", "nuestro" o "la aplicación") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información personal cuando utiliza nuestra aplicación móvil Notelert y el plugin de Obsidian.
            </p>
            <p>
              Al utilizar Notelert, usted acepta las prácticas descritas en esta política. Si no está de acuerdo con esta política, por favor no utilice nuestra aplicación.
            </p>
          </section>

          <section>
            <h2>2. Responsable del Tratamiento</h2>
            <p>
              <strong>Responsable:</strong> Joaquim Frances<br/>
              <strong>Email de contacto:</strong> <a href="mailto:contact@notelert.com">contact@notelert.com</a><br/>
              <strong>Aplicación:</strong> Notelert (com.quim79.notelert)
            </p>
          </section>

          <section>
            <h2>3. Información que Recopilamos</h2>
            
            <h3>3.1. Información de Autenticación</h3>
            <p>Cuando se registra utilizando Google Sign-In, recopilamos:</p>
            <ul>
              <li><strong>ID de usuario de Google</strong> (identificador único)</li>
              <li><strong>Dirección de correo electrónico</strong></li>
              <li><strong>Nombre</strong> (si está disponible en su cuenta de Google)</li>
              <li><strong>Foto de perfil</strong> (si está disponible en su cuenta de Google)</li>
            </ul>

            <h3>3.2. Contenido de Notificaciones</h3>
            <p>Cuando crea recordatorios, almacenamos:</p>
            <ul>
              <li><strong>Título de la notificación</strong> (puede contener información personal que usted introduzca)</li>
              <li><strong>Mensaje de la notificación</strong> (puede contener información personal que usted introduzca)</li>
              <li><strong>Fecha y hora programada</strong></li>
              <li><strong>Identificador único de la notificación</strong></li>
            </ul>

            <h3>3.3. Datos de Ubicación</h3>
            <p>Para las notificaciones basadas en ubicación (geofencing), recopilamos:</p>
            <ul>
              <li><strong>Coordenadas de latitud y longitud</strong> de las ubicaciones que usted selecciona</li>
              <li><strong>Dirección aproximada</strong> de la ubicación</li>
              <li><strong>Tipo de activación</strong> (al llegar o al salir)</li>
            </ul>
            <p>
              <strong>Importante:</strong> No rastreamos su ubicación en tiempo real de forma continua. Solo utilizamos la ubicación cuando usted crea una notificación basada en ubicación y cuando el sistema detecta que ha entrado o salido de una zona específica que usted ha definido.
            </p>

            <h3>3.4. Datos de Compras In-App</h3>
            <p>Si adquiere la suscripción Premium, almacenamos:</p>
            <ul>
              <li><strong>Estado de suscripción</strong> (Premium/Free)</li>
              <li><strong>Fecha de expiración de la suscripción</strong></li>
              <li><strong>ID del producto comprado</strong></li>
              <li><strong>Token de compra de Google Play</strong> (para verificación)</li>
              <li><strong>ID de transacción</strong></li>
              <li><strong>Fecha de activación</strong></li>
            </ul>

            <h3>3.5. Datos del Plugin de Obsidian</h3>
            <p>Cuando utiliza el plugin de Obsidian, procesamos:</p>
            <ul>
              <li><strong>Token de autenticación del plugin</strong> (generado por usted desde la aplicación móvil)</li>
              <li><strong>Contenido de líneas específicas</strong> que usted selecciona explícitamente para crear recordatorios</li>
              <li><strong>No escaneamos ni accedemos a su vault completo</strong> - solo procesamos la información que usted selecciona explícitamente</li>
            </ul>

            <h3>3.6. Datos Técnicos</h3>
            <p>Recopilamos automáticamente:</p>
            <ul>
              <li><strong>Identificador único del dispositivo</strong> (para notificaciones push)</li>
              <li><strong>Información de la aplicación</strong> (versión, sistema operativo)</li>
              <li><strong>Logs de errores</strong> (para mejorar la aplicación)</li>
            </ul>
          </section>

          <section>
            <h2>4. Cómo Utilizamos su Información</h2>
            <p>Utilizamos su información personal para:</p>
            <ol>
              <li><strong>Proporcionar el servicio:</strong>
                <ul>
                  <li>Autenticación y gestión de su cuenta</li>
                  <li>Crear y gestionar sus recordatorios</li>
                  <li>Enviar notificaciones push y emails según sus preferencias</li>
                  <li>Procesar y verificar compras in-app</li>
                  <li>Integración con Obsidian mediante el plugin</li>
                </ul>
              </li>
              <li><strong>Mejorar el servicio:</strong>
                <ul>
                  <li>Analizar errores y problemas técnicos</li>
                  <li>Desarrollar nuevas funcionalidades</li>
                </ul>
              </li>
              <li><strong>Comunicación:</strong>
                <ul>
                  <li>Enviar emails de recordatorio programados</li>
                  <li>Notificaciones sobre el estado de su cuenta</li>
                </ul>
              </li>
              <li><strong>Cumplimiento legal:</strong>
                <ul>
                  <li>Cumplir con obligaciones legales</li>
                  <li>Responder a solicitudes legales</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2>5. Base Legal para el Tratamiento (RGPD)</h2>
            <p>Para usuarios en la Unión Europea, procesamos sus datos personales basándonos en:</p>
            <ul>
              <li><strong>Consentimiento:</strong> Al registrarse y utilizar la aplicación, usted consiente el tratamiento de sus datos personales.</li>
              <li><strong>Ejecución de contrato:</strong> El tratamiento es necesario para proporcionar el servicio que ha solicitado (crear y enviar recordatorios).</li>
              <li><strong>Interés legítimo:</strong> Mejora del servicio y prevención de fraudes.</li>
            </ul>
          </section>

          <section>
            <h2>6. Compartir Información con Terceros</h2>
            <p>Compartimos su información con los siguientes proveedores de servicios:</p>

            <h3>6.1. Google (Autenticación)</h3>
            <ul>
              <li><strong>Servicio:</strong> Google Sign-In</li>
              <li><strong>Datos compartidos:</strong> ID de usuario, email, nombre, foto</li>
              <li><strong>Propósito:</strong> Autenticación de usuarios</li>
              <li><strong>Política de privacidad:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            </ul>

            <h3>6.2. Google Firebase</h3>
            <ul>
              <li><strong>Servicio:</strong> Firebase (Firestore, Cloud Functions)</li>
              <li><strong>Datos compartidos:</strong> Todos los datos mencionados en la sección 3</li>
              <li><strong>Propósito:</strong> Almacenamiento y procesamiento de datos</li>
              <li><strong>Política de privacidad:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></li>
            </ul>

            <h3>6.3. Resend</h3>
            <ul>
              <li><strong>Servicio:</strong> Envío de emails</li>
              <li><strong>Datos compartidos:</strong> Dirección de email, título y mensaje de notificaciones</li>
              <li><strong>Propósito:</strong> Envío de emails de recordatorio</li>
              <li><strong>Política de privacidad:</strong> <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://resend.com/legal/privacy-policy</a></li>
            </ul>

            <h3>6.4. Google Play</h3>
            <ul>
              <li><strong>Servicio:</strong> Verificación de compras in-app</li>
              <li><strong>Datos compartidos:</strong> Token de compra, ID de producto</li>
              <li><strong>Propósito:</strong> Verificar la validez de las compras Premium</li>
              <li><strong>Política de privacidad:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            </ul>

            <p><strong>No vendemos ni alquilamos su información personal a terceros para fines comerciales.</strong></p>
          </section>

          <section>
            <h2>7. Seguridad de los Datos</h2>
            <p>Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos:</p>
            <ul>
              <li><strong>Cifrado:</strong> Los datos se transmiten mediante conexiones cifradas (HTTPS)</li>
              <li><strong>Autenticación:</strong> Acceso restringido mediante autenticación de Firebase</li>
              <li><strong>Reglas de seguridad:</strong> Firestore configurado con reglas que limitan el acceso a sus propios datos</li>
              <li><strong>Almacenamiento seguro:</strong> Datos almacenados en servidores seguros de Google Cloud</li>
              <li><strong>Tokens del plugin:</strong> Tokens de 64 caracteres generados de forma segura, con expiración automática</li>
            </ul>
            <p>
              Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. No podemos garantizar la seguridad absoluta de sus datos.
            </p>
          </section>

          <section>
            <h2>8. Retención de Datos</h2>
            <ul>
              <li><strong>Datos de cuenta:</strong> Se conservan mientras su cuenta esté activa. Puede eliminar su cuenta en cualquier momento desde la aplicación.</li>
              <li><strong>Notificaciones:</strong> Se eliminan automáticamente después de ser enviadas o cuando usted las elimina manualmente.</li>
              <li><strong>Emails programados:</strong> Se eliminan después de ser enviados o cuando se cancelan.</li>
              <li><strong>Datos de compras:</strong> Se conservan según lo requerido por la ley (generalmente 7 años para fines fiscales).</li>
              <li><strong>Tokens del plugin:</strong> Se eliminan automáticamente después de 90 días o cuando la suscripción Premium expira.</li>
            </ul>
          </section>

          <section>
            <h2>9. Sus Derechos (RGPD)</h2>
            <p>Si reside en la Unión Europea, tiene los siguientes derechos:</p>
            <ol>
              <li><strong>Derecho de acceso:</strong> Puede solicitar una copia de sus datos personales.</li>
              <li><strong>Derecho de rectificación:</strong> Puede corregir datos inexactos.</li>
              <li><strong>Derecho de supresión:</strong> Puede solicitar la eliminación de sus datos.</li>
              <li><strong>Derecho a la portabilidad:</strong> Puede solicitar una copia de sus datos en formato estructurado.</li>
              <li><strong>Derecho de oposición:</strong> Puede oponerse al tratamiento de sus datos.</li>
              <li><strong>Derecho a limitar el tratamiento:</strong> Puede solicitar que limitemos el uso de sus datos.</li>
              <li><strong>Derecho a retirar el consentimiento:</strong> Puede retirar su consentimiento en cualquier momento.</li>
            </ol>
            <p>Para ejercer estos derechos, contacte con nosotros en: <a href="mailto:contact@notelert.com">contact@notelert.com</a></p>
          </section>

          <section>
            <h2>10. Menores de Edad</h2>
            <p>
              Notelert no está dirigido a menores de 16 años. No recopilamos intencionalmente información personal de menores de 16 años. Si descubrimos que hemos recopilado información de un menor sin el consentimiento de los padres, tomaremos medidas para eliminar esa información.
            </p>
          </section>

          <section>
            <h2>11. Transferencias Internacionales</h2>
            <p>
              Sus datos pueden ser transferidos y almacenados en servidores ubicados fuera de su país de residencia, incluyendo Estados Unidos. Estos países pueden tener leyes de protección de datos diferentes. Al utilizar Notelert, usted consiente estas transferencias.
            </p>
          </section>

          <section>
            <h2>12. Cambios a esta Política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos de cualquier cambio publicando la nueva política en esta página y actualizando la fecha de "Última actualización". Le recomendamos que revise esta política periódicamente.
            </p>
          </section>

          <section>
            <h2>13. Contacto</h2>
            <p>Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos sus datos, puede contactarnos en:</p>
            <p>
              <strong>Email:</strong> <a href="mailto:contact@notelert.com">contact@notelert.com</a><br/>
              <strong>Asunto:</strong> Consulta sobre Privacidad
            </p>
          </section>
        </article>
      </div>
      <style jsx>{`
        .legal-page {
          padding: 8rem 2rem 4rem;
          min-height: 100vh;
          background: var(--bg-primary);
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
        }

        .legal-content {
          background: var(--bg-secondary);
          border-radius: 16px;
          padding: 3rem;
          border: 1px solid var(--border-subtle);
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text-normal);
          background: linear-gradient(to right, var(--primary-color), var(--accent-color));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .last-updated {
          color: var(--text-muted);
          margin-bottom: 3rem;
          font-size: 0.95rem;
        }

        section {
          margin-bottom: 3rem;
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          margin-top: 2rem;
          color: var(--text-normal);
        }

        h3 {
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          margin-top: 1.5rem;
          color: var(--text-normal);
        }

        p {
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        ul, ol {
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1rem;
          padding-left: 2rem;
        }

        li {
          margin-bottom: 0.5rem;
        }

        a {
          color: var(--primary-color);
          text-decoration: none;
          transition: color 0.2s;
        }

        a:hover {
          color: var(--accent-color);
          text-decoration: underline;
        }

        strong {
          color: var(--text-normal);
        }

        .back-link {
          margin-bottom: 2rem;
        }

        .back-link a {
          color: var(--text-accent);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .back-link a:hover {
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .legal-page {
            padding: 6rem 1rem 2rem;
          }

          .legal-content {
            padding: 2rem 1.5rem;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </main>
  );
}

