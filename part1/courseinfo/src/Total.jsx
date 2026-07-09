const Total = (props) => {

    const total = props.numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(total);

    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total;