import cxs from 'cxs/component'

const Button = cxs('button')({
    backgroundColor: 'rgb(25, 91, 255)',
    color: 'white',
    padding: '8px 12px',
    fontSize: '0.9rem',
    borderRadius: '15px',
    border: 'none',
    boxSizing: 'border-box',
    userSelect: 'none',
    outline: 'none',
    transition: 'all .3s ease',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'blue',
    backgroundPosition: 'center',
    ':hover': {
        // color: 'black',
        boxShadow: ' 0 10px 20px -10px rgba(25, 91, 255, 1)',
        transform: 'translateY(-3px)',
    },
    ':active': {
        backgroundColor: '#6eb9f7',
        backgroundSize: '100%',
    }
})

const TomatoButton = cxs(Button)({
    backgroundColor: 'tomato'
})



export { Button, TomatoButton }
