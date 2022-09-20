export default function Card(props) {
    return (
        <section>
            <div className='card'>
                <img src={props.imageUrl} alt="Mount Fuji" className='card-pic'/>
                <div class="side-info">
                    <p className='location'>
                        <img src="src/assets/marker.png" className='marker'/> {props.location.toUpperCase()} 
                        <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </p>
                    <h1 className='title'>{props.title}</h1>
                    <strong>{props.startDate} - {props.endDate}</strong>
                    <p className='description'>{props.description}</p>
                </div>
            </div>
            <div className='divider'></div>
        </section>
    )
}