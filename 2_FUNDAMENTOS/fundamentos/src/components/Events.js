const Events = () => {
    const handleMyEvent = (e) => {
        //alert("Ativou o evento!");
        console.log(e);
        console.log("Ativando Evendo com click");
        //console.clear();
    }

    const renderSomenthing = (x) =>{
        if(x){
            return <h1>Renderizando depois do if</h1>
        }else{
            return <h1>Renderizando depois do else</h1>
        }
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
            <div>
                {renderSomenthing(true)}
                {renderSomenthing(false)}
            </div>
        </div>
    );
};

export default Events;