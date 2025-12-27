// Componente Server Component para renderizar el enlace a la política de privacidad
// Este componente se renderiza en el servidor y aparece en el HTML estático inicial

export default function PrivacyLink() {
  return (
    <a 
      href="https://www.notelert.com/privacy/" 
      style={{ 
        display: 'inline-block',
        color: 'var(--text-normal)',
        textDecoration: 'underline',
        fontSize: '0.875rem',
        padding: '0.25rem 0.5rem',
        margin: '0.5rem'
      }}
    >
      Privacy Policy
    </a>
  );
}


