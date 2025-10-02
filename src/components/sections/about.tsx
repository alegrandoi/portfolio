
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <SectionWrapper id="about" title="Sobre Mí">
      <div className="mx-auto max-w-3xl text-center">
        <Card>
          <CardContent className="p-8 text-lg leading-relaxed text-foreground/80">
            <p className="mb-4">
              Desde siempre me ha fascinado cómo la tecnología puede transformar
              ideas en soluciones reales que impactan en la vida de las
              personas. Esa pasión me llevó a estudiar Ingeniería Informática en
              la Universidad de Sevilla, un camino que estoy a punto de
              culminar.
            </p>
            <p className="mb-4">
              Para mí, programar no es solo escribir código: es un ejercicio de
              creatividad, lógica y resolución de problemas, una forma de
              construir herramientas útiles y con propósito.
            </p>
            <p>
              Tras completar mi primera experiencia profesional en Tier 1
              Technology, me encuentro en un momento clave: busco un nuevo reto
              que me permita seguir creciendo como desarrollador. Me apasiona el
              desarrollo backend con Java y Spring Boot, pero lo que realmente
              me motiva es aprender de forma continua, explorar nuevas
              tecnologías y aportar valor dentro de un equipo que comparta la
              misma visión de innovación.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
