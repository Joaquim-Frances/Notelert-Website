import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio - Notelert",
  description: "Términos de Servicio de Notelert. Condiciones de uso de la aplicación y el plugin de Obsidian.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <div className="back-link">
          <a href="/">← Volver a Inicio</a>
        </div>
        <article className="legal-content">
          <h1>Términos de Servicio de Notelert</h1>
          <p className="last-updated"><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section>
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al descargar, instalar, acceder o utilizar la aplicación móvil Notelert ("la Aplicación" o "el Servicio") o el plugin de Obsidian, usted acepta estar sujeto a estos Términos de Servicio ("Términos"). Si no está de acuerdo con estos Términos, no debe utilizar la Aplicación o el plugin.
            </p>
          </section>

          <section>
            <h2>2. Descripción del Servicio</h2>
            <p>
              Notelert es una aplicación móvil que permite a los usuarios crear recordatorios basados en tiempo y ubicación, recibir notificaciones push y emails, e integrarse con Obsidian mediante un plugin para crear recordatorios directamente desde sus notas.
            </p>
            <p>
              El servicio incluye:
            </p>
            <ul>
              <li>Aplicación móvil para Android (com.quim79.notelert)</li>
              <li>Plugin de Obsidian para integración con vaults</li>
              <li>Servicio de backend para procesamiento de notificaciones</li>
              <li>Servicio de emails para recordatorios programados</li>
            </ul>
          </section>

          <section>
            <h2>3. Elegibilidad</h2>
            <p>Para utilizar Notelert, debe:</p>
            <ul>
              <li>Tener al menos 16 años de edad (o la edad mínima requerida en su jurisdicción)</li>
              <li>Tener capacidad legal para celebrar contratos vinculantes</li>
              <li>No estar prohibido de utilizar el Servicio bajo las leyes aplicables</li>
            </ul>
          </section>

          <section>
            <h2>4. Cuenta de Usuario</h2>
            <h3>4.1. Registro</h3>
            <ul>
              <li>Debe registrarse utilizando Google Sign-In</li>
              <li>Es responsable de mantener la confidencialidad de su cuenta</li>
              <li>Debe notificarnos inmediatamente de cualquier uso no autorizado de su cuenta</li>
            </ul>

            <h3>4.2. Información Veraz</h3>
            <ul>
              <li>Debe proporcionar información precisa y completa</li>
              <li>Es responsable de toda la actividad que ocurra bajo su cuenta</li>
            </ul>
          </section>

          <section>
            <h2>5. Uso Aceptable</h2>
            <h3>5.1. Uso Permitido</h3>
            <p>Puede utilizar Notelert para:</p>
            <ul>
              <li>Crear recordatorios personales basados en tiempo y ubicación</li>
              <li>Recibir notificaciones push y emails</li>
              <li>Integrar con Obsidian para gestionar recordatorios desde sus notas</li>
              <li>Gestionar sus recordatorios y ubicaciones guardadas</li>
            </ul>

            <h3>5.2. Uso Prohibido</h3>
            <p>No debe utilizar Notelert para:</p>
            <ul>
              <li>Cualquier propósito ilegal o no autorizado</li>
              <li>Violar leyes o regulaciones aplicables</li>
              <li>Infringir derechos de propiedad intelectual</li>
              <li>Enviar spam, malware o contenido malicioso</li>
              <li>Intentar acceder no autorizado a sistemas o datos</li>
              <li>Interferir con el funcionamiento del Servicio</li>
              <li>Crear recordatorios que contengan contenido ilegal, difamatorio, acosador, abusivo o inapropiado</li>
              <li>Utilizar el servicio para enviar notificaciones no solicitadas o spam</li>
              <li>Intentar acceder a datos de otros usuarios</li>
            </ul>
          </section>

          <section>
            <h2>6. Suscripciones y Pagos</h2>
            <h3>6.1. Planes</h3>
            <ul>
              <li><strong>Plan Gratuito:</strong> Notificaciones push ilimitadas basadas en fecha y hora. No incluye notificaciones por email ni notificaciones basadas en ubicación.</li>
              <li><strong>Plan Premium:</strong> Notificaciones ilimitadas (push, email y ubicación), hasta 100 notificaciones activas simultáneamente.</li>
            </ul>

            <h3>6.2. Compras In-App</h3>
            <ul>
              <li>Las compras se realizan a través de Google Play Store</li>
              <li>Los precios se muestran en la moneda de su región</li>
              <li>Los pagos se procesan según los términos de Google Play</li>
              <li>Package name: com.quim79.notelert</li>
            </ul>

            <h3>6.3. Renovación Automática</h3>
            <ul>
              <li>Las suscripciones Premium se renuevan automáticamente</li>
              <li>Puede cancelar la renovación automática en cualquier momento desde la configuración de Google Play</li>
              <li>La cancelación no reembolsa el período actual ya pagado</li>
            </ul>

            <h3>6.4. Reembolsos</h3>
            <ul>
              <li>Los reembolsos se rigen por la política de reembolsos de Google Play</li>
              <li>No ofrecemos reembolsos directos, excepto según lo requerido por la ley</li>
            </ul>
          </section>

          <section>
            <h2>7. Límites del Servicio</h2>
            <h3>7.1. Límites Técnicos</h3>
            <ul>
              <li><strong>Plan Gratuito:</strong> Notificaciones push ilimitadas (solo fecha/hora). No incluye emails ni notificaciones de ubicación.</li>
              <li><strong>Plan Premium:</strong> Máximo 100 notificaciones activas simultáneamente (push + email + ubicación combinadas). Notificaciones ilimitadas en total.</li>
              <li>Los límites se aplican para garantizar el rendimiento del servicio</li>
            </ul>

            <h3>7.2. Disponibilidad</h3>
            <ul>
              <li>No garantizamos disponibilidad ininterrumpida del Servicio</li>
              <li>Podemos realizar mantenimiento programado o de emergencia</li>
              <li>No somos responsables de interrupciones del servicio debido a factores fuera de nuestro control</li>
              <li>No garantizamos que las notificaciones se entreguen en tiempo exacto debido a limitaciones del sistema operativo, red o configuración del dispositivo</li>
            </ul>
          </section>

          <section>
            <h2>8. Contenido del Usuario</h2>
            <h3>8.1. Propiedad</h3>
            <ul>
              <li>Usted conserva todos los derechos sobre el contenido que crea (títulos y mensajes de notificaciones)</li>
              <li>Al utilizar el Servicio, nos otorga una licencia limitada para almacenar y procesar su contenido para proporcionar el Servicio</li>
            </ul>

            <h3>8.2. Responsabilidad</h3>
            <ul>
              <li>Es responsable del contenido que crea</li>
              <li>No debe crear contenido que viole derechos de terceros o leyes aplicables</li>
              <li><strong>Importante sobre Obsidian:</strong> No almacenamos ni accedemos al contenido de sus notas de Obsidian. Solo procesamos la información que usted selecciona explícitamente para crear recordatorios. No escaneamos su vault completo.</li>
            </ul>

            <h3>8.3. Eliminación</h3>
            <ul>
              <li>Puede eliminar sus notificaciones en cualquier momento</li>
              <li>Eliminamos automáticamente las notificaciones después de ser enviadas</li>
              <li>Podemos eliminar contenido que viole estos Términos sin previo aviso</li>
            </ul>
          </section>

          <section>
            <h2>9. Privacidad</h2>
            <p>
              Su uso del Servicio también está sujeto a nuestra <a href="/privacy">Política de Privacidad</a>, que puede consultar en nuestra página web. Al utilizar el Servicio, usted consiente la recopilación y uso de su información según se describe en la Política de Privacidad.
            </p>
          </section>

          <section>
            <h2>10. Propiedad Intelectual</h2>
            <h3>10.1. Nuestros Derechos</h3>
            <ul>
              <li>Notelert y todo su contenido (código, diseño, logotipos, etc.) son propiedad nuestra o de nuestros licenciantes</li>
              <li>Está protegido por leyes de derechos de autor, marcas registradas y otras leyes de propiedad intelectual</li>
            </ul>

            <h3>10.2. Licencia Limitada</h3>
            <ul>
              <li>Le otorgamos una licencia limitada, no exclusiva, no transferible y revocable para utilizar la Aplicación y el plugin según estos Términos</li>
              <li>No puede copiar, modificar, distribuir, vender o alquilar ninguna parte del Servicio</li>
            </ul>
          </section>

          <section>
            <h2>11. Servicios de Terceros</h2>
            <p>Notelert utiliza servicios de terceros, incluyendo:</p>
            <ul>
              <li><strong>Google:</strong> Para autenticación (Google Sign-In) y almacenamiento de datos</li>
              <li><strong>Firebase:</strong> Para backend, procesamiento y almacenamiento (Firestore, Cloud Functions)</li>
              <li><strong>Resend:</strong> Para envío de emails de recordatorio</li>
              <li><strong>Google Play:</strong> Para compras in-app y distribución de la aplicación</li>
            </ul>
            <p>Su uso de estos servicios está sujeto a sus respectivos términos y políticas de privacidad.</p>
          </section>

          <section>
            <h2>12. Modificaciones del Servicio</h2>
            <ul>
              <li>Podemos modificar, suspender o discontinuar cualquier aspecto del Servicio en cualquier momento</li>
              <li>No somos responsables ante usted ni ante terceros por cualquier modificación, suspensión o discontinuación del Servicio</li>
              <li>Intentaremos notificar cambios importantes cuando sea posible</li>
            </ul>
          </section>

          <section>
            <h2>13. Terminación</h2>
            <h3>13.1. Por Usted</h3>
            <ul>
              <li>Puede dejar de utilizar el Servicio en cualquier momento</li>
              <li>Puede eliminar su cuenta y datos desde la aplicación o contactándonos</li>
            </ul>

            <h3>13.2. Por Nosotros</h3>
            <p>Podemos suspender o terminar su acceso al Servicio si:</p>
            <ul>
              <li>Viola estos Términos</li>
              <li>Utiliza el Servicio de manera fraudulenta o ilegal</li>
              <li>No paga las tarifas aplicables (si corresponde)</li>
              <li>Por cualquier otra razón a nuestra sola discreción</li>
            </ul>
          </section>

          <section>
            <h2>14. Limitación de Responsabilidad</h2>
            <p><strong>EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY:</strong></p>
            <ul>
              <li>EL SERVICIO SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD"</li>
              <li>NO GARANTIZAMOS QUE EL SERVICIO SEA ININTERRUMPIDO, SEGURO O LIBRE DE ERRORES</li>
              <li>NO SOMOS RESPONSABLES DE:
                <ul>
                  <li>Pérdida de datos o contenido</li>
                  <li>Daños indirectos, incidentales o consecuentes</li>
                  <li>Pérdida de beneficios o oportunidades comerciales</li>
                  <li>Problemas técnicos fuera de nuestro control</li>
                  <li>Fallos en el envío de notificaciones debido a problemas del dispositivo, red o configuración del usuario</li>
                  <li>Problemas con la integración de Obsidian debido a cambios en el plugin o en Obsidian</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2>15. Exención de Garantías</h2>
            <p>
              EL SERVICIO SE PROPORCIONA SIN GARANTÍAS DE NINGÚN TIPO, EXPRESAS O IMPLÍCITAS, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN.
            </p>
          </section>

          <section>
            <h2>16. Indemnización</h2>
            <p>
              Usted acepta indemnizar, defender y mantener indemne a Notelert, sus afiliados, directores, empleados y agentes de cualquier reclamo, daño, obligación, pérdida, responsabilidad, costo o deuda, y gastos (incluyendo honorarios de abogados) que surjan de:
            </p>
            <ul>
              <li>Su uso del Servicio</li>
              <li>Su violación de estos Términos</li>
              <li>Su violación de cualquier derecho de terceros</li>
              <li>Cualquier contenido que cree o transmita a través del Servicio</li>
            </ul>
          </section>

          <section>
            <h2>17. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos Términos se rigen por las leyes de España, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa relacionada con estos Términos o el Servicio se resolverá en los tribunales competentes de España.
            </p>
          </section>

          <section>
            <h2>18. Resolución de Disputas</h2>
            <h3>18.1. Negociación</h3>
            <p>
              Antes de iniciar cualquier procedimiento legal, las partes intentarán resolver cualquier disputa mediante negociación de buena fe.
            </p>
          </section>

          <section>
            <h2>19. Disposiciones Generales</h2>
            <h3>19.1. Términos Completos</h3>
            <p>
              Estos Términos constituyen el acuerdo completo entre usted y Notelert respecto al uso del Servicio.
            </p>

            <h3>19.2. Modificaciones</h3>
            <p>
              Podemos modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor cuando se publiquen en esta página. Su uso continuado del Servicio después de las modificaciones constituye su aceptación de los nuevos Términos.
            </p>

            <h3>19.3. Divisibilidad</h3>
            <p>
              Si alguna disposición de estos Términos se considera inválida o inaplicable, las disposiciones restantes permanecerán en pleno vigor y efecto.
            </p>

            <h3>19.4. Renuncia</h3>
            <p>
              Nuestra falta de ejercer o hacer valer cualquier derecho o disposición de estos Términos no constituirá una renuncia a tal derecho o disposición.
            </p>

            <h3>19.5. Cesión</h3>
            <p>
              No puede ceder o transferir estos Términos o sus derechos bajo estos Términos sin nuestro consentimiento previo por escrito.
            </p>
          </section>

          <section>
            <h2>20. Contacto</h2>
            <p>Si tiene preguntas sobre estos Términos de Servicio, puede contactarnos en:</p>
            <p>
              <strong>Email:</strong> <a href="mailto:contact@notelert.com">contact@notelert.com</a><br/>
              <strong>Asunto:</strong> Consulta sobre Términos de Servicio
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

