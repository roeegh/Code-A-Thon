// Prompt: Consider the following code snippet, How many times the 'Hello' message would be printed?

const App = () => {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        console.log('Hello');
        setCounter(counter + 1);
    }, []);

    return (<div>{ counter }</div>);
}

/*
    [X] The 'Hello' message will be printed once.
*/