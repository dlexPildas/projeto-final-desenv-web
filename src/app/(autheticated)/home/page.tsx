import CardPerson from "./card-person/card-person";


export default function HomePage() {
  const people = [
    {
      name: "Machado de Assis",
      bithDate: "21/06/1839",
      deadDate: "29/09/1908",
      urlFoto: "https://zumbidospalmares.edu.br/wp-content/uploads/2021/11/zumbi-60.jpg",
      favorite: false
    },
    {
      name: "Aleijadinho",
      bithDate: "15/08/1738",
      deadDate: "28/09/1814",
      urlFoto: "https://zumbidospalmares.edu.br/wp-content/uploads/2021/11/zumbi-61.jpg",
      favorite: true
    },
    {
      name: "Tia Ciata",
      bithDate: "15/11/1530",
      deadDate: "28/09/1580",
      urlFoto: "https://zumbidospalmares.edu.br/wp-content/uploads/2021/11/zumbi-62.jpg",
      favorite: true
    },
    {
      name: "Dandara",
      bithDate: "15/11/1530",
      deadDate: "28/09/1580",
      urlFoto: "https://zumbidospalmares.edu.br/wp-content/uploads/2021/11/zumbi-63.jpg",
      favorite: true
    },
    {
      name: "Grande Otelo",
      bithDate: "15/11/1530",
      deadDate: "28/09/1580",
      urlFoto: "https://zumbidospalmares.edu.br/wp-content/uploads/2021/11/zumbi-65.jpg",
      favorite: false
    },
  ];

  return (
    <>
      <main className="">
        {
          people.map((item, index) => (
            <CardPerson key={index} person={item} />
          ))
        }
      </main>
    </>
  );
}