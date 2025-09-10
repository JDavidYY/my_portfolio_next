import Columns from './ui/Columns';
import Column from './ui/Column';
import ProfileCard from './ProfileCard';
import TechCard from './TechCard';

const frontList = [
  { label: 'JavaScript'},
  { label: 'TypeScript'},
  { label: 'CSS'},
  { label: 'Angular'},
  { label: 'React'},
  { label: 'Bootstrap'},
  { label: 'materialUI'},
  { label: 'Gatsby'},
  { label: 'XML'},
  { label: 'HTML'},
];

const backList = [
  { label: 'Node'},
  { label: 'Python'},
  { label: 'Odoo'},
  { label: 'Docker'},
  { label: 'Flask'},
  { label: 'Express'},
  { label: 'Django'},
];

const About = () => {
  return (
    <section className="section bg-gray-100">
      <div className="container mx-auto">
        <Columns>
          <Column side="left">
            <ProfileCard />
          </Column>
          <Column side="right">
            <Columns>
              <Column side="half">
                {/* Aquí iría TechCard y otros componentes si los migras */}
              </Column>
              <Column side="half">
                {/* Aquí iría TechCard y otros componentes si los migras */}
              </Column>
            </Columns>
          </Column>
        </Columns>
      </div>
    </section>
  );
};

export default About;
