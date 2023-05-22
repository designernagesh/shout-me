const ShoutOutput = ({shout}) => {
    const outputStyle = {
        textAlign: 'center',
        color: 'teal',
        fontSize: '100px',
        marginTop: '-10px',
    }

    return (
        <h2 style={outputStyle}> { shout.toUpperCase() } </h2>
    )
}

export default ShoutOutput;