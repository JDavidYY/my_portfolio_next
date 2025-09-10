import Card from './ui/Card';
import Progress from './Progress';

const TechCard = ({ title, list, img }) => {
  return (
    <Card className="w-full text-center about-card">
      <img className="rounded mx-auto d-block text-color-white" src={img} width="120" />
      <h2 className="title text-color-white">{title}</h2>
      {list.map((item, key) => (
        <Progress key={key.toString()} item={item} />
      ))}
    </Card>
  );
};

export default TechCard;
