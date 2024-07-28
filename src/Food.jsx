function Food(){
    const food1 = "Pizza";
    return (
        <ul>
            <li><a href="#">Pizza</a></li>
            <li><a href="#">Burger</a></li>
            <li><a href="#">{food1.toUpperCase()}</a></li>
        </ul>
    )
}

export default Food