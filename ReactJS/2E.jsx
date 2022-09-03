// Which statement describes the code below?

const fetchData = () => new Promise((r) => setTimeout(() => r(Date.now()), 100));

const MyComponent = () => {
    const [result, setResult] = React.useState();
    const data = fetchData().then((value) => setResult(value));

    return(
        <div>
            {result === data.toString() ? (<div>hello</div>) : (<div>good bye</div>)}
        </div>
    );
}

/* 
    [X] The code will result in a memory leak
    [] A 'hello' message will be displayed
    [] No message will be displayed
    [] setResult() is never called
*/ 