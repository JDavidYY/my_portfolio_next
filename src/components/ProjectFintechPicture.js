import Image from 'next/image';

const ProjectFintechPicture = () => {
  return (
    <Image
  src="/proyecto-fintech.png"
      alt="Proyecto Fintech"
      width={400}
      height={250}
      className="rounded"
      priority
    />
  );
};

export default ProjectFintechPicture;
