class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
        }
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem("count");
            const count = JSON.parse(json);
            console.log(typeof count)
            if (!isNaN(count)){
                this.setState(()=>({count: count}))
            }
        } catch (e){

        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem("count", json);
            console.log("saving data")
        }
    }
    handleAddOne(){
        this.setState((prevState)=> {
            console.log(prevState.count);
            return {
                count: prevState.count + 1,
            };
        })
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count - 1,
            }
        })
    }
    handleReset(){
        this.setState(()=>{
            return{
                count: 0,
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}



ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;
// const addOne = () => {
//     count = count + 1;
//     renderCounterApp();
// }
// const removeOne = () => {
//     count--;
//     renderCounterApp();

// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count} </h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={removeOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }
// renderCounterApp();

