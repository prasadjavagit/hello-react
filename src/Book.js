const Book = ({ image, title, author }) => {
  return (
    <div>
      <img src={image} class="card-img-top" alt="Error" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
    </div>
  );
};

export default Book;
