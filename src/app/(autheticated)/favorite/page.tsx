import ListPerson from "../home/list-person/list-person";

export default function FavoritePage() {
    return (
        <section className="container-main">
            <ListPerson favorite={true} />
        </section>
    )
}