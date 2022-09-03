// Prompt: Consider the code below, when will the MyChild component be unmounted? 

const MyParent = ({ value }) => {
    return <div>{ value !== 3 && <MyChlid />}</div>;
}

/*
    [X] When the value property is equal to 3
    [] When the value property is different from 3
    [] Never
    [] After each render of the MyParent component
*/