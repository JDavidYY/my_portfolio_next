import About from '../../components/About';
import ProjectFintechPicture from '../../components/ProjectFintechPicture';
import ProjectChickenappPicture from '../../components/ProjectChickenappPicture';
// Si migras ProjectChickenApp, actualiza aquí también

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4">
      <About />
      <div className="container items-center justify-center clear-right">
        <h1 className="text-5xl mb-10 text-purple-800 border-black text-center"> Projects </h1>
      </div>
      <div className="Container projects">
        <div className="items-center project rounded overflow-hidden shadow-lg p-5 bg-white inline-block">
          <ProjectChickenApp />
          <br />
          <h2 className=" text-center text-2xl font-medium text-color-white" > Asociación Fintech del Perú</h2>
          <br />
          <p className="justify-center text-color-white"> Proyecto realizado para la Asociación Fintech del Perú. El proyecto realizado es un administrador de contenido construido con una arquitectura hexagonal y con las tecnologías: MongoDB, Express, Angular y NodeJS </p>
          <p className="justify-center text-color-white items-center text-center"><a target='_blank' href="https://fintechperu.com/"> <u>LINK DE LA WEB</u> </a>
          </p>
        </div>
        <div className="items-center project rounded overflow-hidden shadow-lg p-5 py-4 bg-white inline-block">
          <ProjectChickenappPicture />
          <br />
          <h2 className=" text-center text-2xl font-medium text-color-white" > Pollería con delivery y venta online</h2>
          <br />
          <p className="justify-center text-color-white"> Proyecto realizado para una pollería con delivery; administración de los recursos humanos y logísticos; con compra y venta online. Las tecnologías utilizadas fueron: MySQL, Express, Angular y NodeJS </p>
          <p className="justify-center text-color-white items-center text-center"><a target='_blank' href="https://php73-dot-chickenapp-dev.uc.r.appspot.com/web/"> <u>LINK DE LA WEB</u> </a>
          </p>
        </div>
      </div>
    </div>
  );
}
