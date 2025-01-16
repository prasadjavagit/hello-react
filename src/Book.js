const Book = ({ image, title, author }) => {
  const clickHandler = () => {
    alert('hello world');
  };
  return (
    <article>
      <img src={image} alt="Error" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button onClick={clickHandler}>reference example</button>
    </article>
  );
};

export default Book;
