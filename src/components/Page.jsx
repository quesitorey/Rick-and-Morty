
const Page = ({page, setPage, quantity}) => {
    return (
        <div className="button-container">
            { page > 1 && <button onClick={() => setPage(page - 1)}>{"<<"}</button>} <p>{page} de {quantity}</p> {quantity > page && <button onClick={() => setPage(page + 1)} >{">>"}</button>}
        </div>
    );
};

export default Page;