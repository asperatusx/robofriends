import Card from "./Card";

const CardList = ({robots}) => {
  const cardComponent = robots.map((robot, i) => {
    return (
      <Card key={i} id={robot.id} name={robot.name} email={robot.email}/>
    )
  })
  return (
    <>
      {cardComponent}
    </>
  );
};

export default CardList;
