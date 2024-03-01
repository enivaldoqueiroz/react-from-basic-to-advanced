const Events = () => {
    const handleMyEvent = (e) => {
        //alert("Ativou o evento!");
        console.log(e);
        console.log("Ativando Evendo com click");
        //console.clear();
    }
    
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Funções no evento")}>Funções no evento</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true)
                        console.log("Não é uma boa pratica");
                }
                }>Não é uma boa pratica</button>
            </div>
        </div>
    );
};

export default Events;