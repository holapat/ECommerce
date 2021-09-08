const divStyle={
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'beige',
    color: 'black',
}
const ulStyle={
    display: 'flex',
    listStyleType: 'none',
    width: '50vw',
    justifyContent: 'space-evenly',
    padding: '0',
    margin: '20px 0px 20px 0px',
}

const NavBar = () =>{    
    return(
        <div style={divStyle}>
            <ul style={ulStyle}>
                <li>INICIO</li>
                <li>PLAYSTATION</li>
                <li>XBOX One</li>
                <li>SWITCH</li>
                <li>WII</li>
                <li>PC</li>
            </ul>
        </div>
    )
}

export default NavBar