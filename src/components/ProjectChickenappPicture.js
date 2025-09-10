import Image from 'next/image';

const ProjectChickenappPicture = () => {
  return (
    <Image
  src="/chicken-app.png"
      alt="Chicken App"
      width={400}
      height={250}
      className="rounded"
      priority
    />
  );
};

export default ProjectChickenappPicture;
