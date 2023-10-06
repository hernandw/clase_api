

const Card = ({ item }) => {
  return (
    <div key={item.id}>
      <p>{item.title}</p>
      <p>{item.price}</p>
    </div>
  );
}

export default Card
