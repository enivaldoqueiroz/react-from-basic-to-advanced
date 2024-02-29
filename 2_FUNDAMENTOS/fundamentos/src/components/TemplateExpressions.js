const TemplateExpressions = () => {
    const name = "Jose Queiroz"
    const data = {
        age: 30,
        job: "Programador"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
        </div>
    );
}

export default TemplateExpressions;