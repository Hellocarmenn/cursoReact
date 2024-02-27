//ponemos export para exportar el componente

export const Usuario = () => {
    return (
        <div>
            <h1>Nombre:Carmen Martinez</h1>
            <p>Edad:27</p>
            <p>Nacionalidad:Mexico</p>
            <hr />
        </div>
    )
}

//utilizar props
export const Usuario2 = (props) => {
    return (
        <div>
            <h1>Nombre:{props.nombre}</h1>
            <p>Edad:{props.edad}</p>
            <p>Nacionalidad:{props.nacionalidad}</p>
            <hr />
        </div>
    )
}
//destructuracion de objetos
export const Usuario3 = ({nombre,edad,nacionalidad}) => {

    //const {nombre,edad, nacionalidad} = props;
    return (
        <div>
            <h1>Nombre:{nombre}</h1>
            <p>Edad:{edad}</p>
            <p>Nacionalidad:{nacionalidad}</p>
            <hr />
        </div>
    )
}