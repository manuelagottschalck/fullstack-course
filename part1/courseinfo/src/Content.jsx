import Part from './Part.jsx';

const Content = (props) => {
    console.log(props);
    return (
        <>
            <Part part={props.props[0]} />
            <Part part={props.props[1]}/>
            <Part part={props.props[2]} />
        </>
    )
}

export default Content;