const Events = () => {
    const handleMyEvent = (e) => {
        //alert("Ativou o evento!");
        console.log(e.pageX);
        console.clear();
    }
    
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
        </div>
    );
};

export default Events;