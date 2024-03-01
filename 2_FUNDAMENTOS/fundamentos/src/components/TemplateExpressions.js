import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
    const name = "Jose Queiroz"
    const data = {
        age: 30,
        job: "Programador"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você tem {data.age} anos de idade</p>
            <p>Você atua como {data.job}</p>

            <MyComponent></MyComponent>
        </div>
    );
}

export default TemplateExpressions;