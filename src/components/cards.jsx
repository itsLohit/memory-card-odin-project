import '../styles/cards.css'

export default function Cards ({cardClickHandle, img}) {
    return (
        <div className='card-img' onClick={cardClickHandle}>
            <img src= {img} alt="card pic" />
        </div   >
    )
}