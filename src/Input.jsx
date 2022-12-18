function Input(props) {
    return (
        <input type="number" value={props.input} onChange={props.action} />
    );
};

export default Input;