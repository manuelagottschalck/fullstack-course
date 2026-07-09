const Total = (props) => {

    const total = props.numbers.reduce((acc, curr) => acc + curr, 0);
    
    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total;