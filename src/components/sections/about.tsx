import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <SectionWrapper id="about" title="Sobre Mí">
      <div className="mx-auto max-w-3xl text-center">
        <Card>
          <CardContent className="p-8 text-lg leading-relaxed text-foreground/80">
            <p className="mb-4">
              Desde siempre, he sentido una profunda fascinación por cómo la
              tecnología es capaz de transformar ideas en realidades tangibles.
              Esa curiosidad me llevó a la Ingeniería Informática en la
              Universidad de Sevilla, un camino que estoy a punto de completar.
              Para mí, programar es más que escribir código; es un ejercicio de
              creatividad y resolución de problemas, una forma de construir
              herramientas que realmente ayuden a las personas.
            </p>
            <p>
              Ahora, con la carrera casi finalizada y mi primera experiencia
              profesional concluida, busco con ilusión un nuevo reto. Me
              apasiona el desarrollo backend, especialmente con Java y Spring,
              pero mi verdadera motivación es seguir aprendiendo. Me entusiasma
              la idea de unirme a un equipo donde pueda no solo aportar mis
              conocimientos, sino también crecer, explorar nuevas tecnologías y
              contribuir a proyectos que marquen la diferencia.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
