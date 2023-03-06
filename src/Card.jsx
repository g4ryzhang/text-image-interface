import './Card.css';

const Card = (props) => {

    return (<div className='cardList'>
        {props.pics.map((pic, i) => (
            <div className='card' key={i}>
                <img
                    className='cardImage'
                    // alt={pic.alt_description}
                    src={pic}
                    width='50%'
                    height='90%'
                ></img>
                <div className='imgInfo'>
                    <div className='userName'>{`By: user${i}`}</div>
                    <div className='promptSection'>
                        <div className='promptTag'>
                            promptA
                        </div>
                        <div className='promptTag'>
                            promptB
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>);
};

export default Card;
