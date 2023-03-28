
export default function Star(props) {
    let starIcon = props.isFilled ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4t4lFE07WezDN1iQ1XNKVRsCXgN7uvC1cYw&usqp=CAU" : "https://cdn-icons-png.flaticon.com/512/13/13595.png"

    return (
        <img
            src={starIcon}
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}
