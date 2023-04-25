console.log("app.js is running");

// const user = {
//     name: "Karolis",
//     age: 23,
//     location: "Vilnius"
// }

// function getLocation(location) {
//     if (location){
//         return <p>Location: {location} </p>;
//     }
// }

// const NewTemplate = (
//     <div>
//         <h1>{user.name ? user.name : "Anonymous"}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

const pavadinimas = {
    title: "Indecision app",
    subtitle: "yo yo yo your time is up, my time is now",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const option = e.target.elements.option.value;
    if (option) {
        console.log(e.target.elements.option.value);
        pavadinimas.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};
const handleClick = () => {
    pavadinimas.options = [];
    renderApp();
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()* pavadinimas.options.length);
    const option = pavadinimas.options[randomNum];
    alert(option);
};
const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderApp = () => {
    const template = ( 
        <div>
            <h1>{pavadinimas.title}</h1>
            {pavadinimas.subtitle && <p>{pavadinimas.subtitle}</p>}
            {pavadinimas.options.length > 0? <p>Here are your options:</p> : <p>No options</p> }
            <button disabled={pavadinimas.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={handleClick}>remove all</button>
            <ol>
                {pavadinimas.options.map((opcija)=> <li key={opcija}>{opcija}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
ReactDOM.render(template, appRoot);
}

renderApp();