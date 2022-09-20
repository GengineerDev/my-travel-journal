export default function Card() {
    return (
        <main>
            <div className='card'>
                <img src="https://source.unsplash.com/WLxQvbMyfas" alt="Mount Fugi" className='card-pic'/>
                <div class="side-info">
                    <p className='location'>
                        <img src="src/assets/marker.png" className='marker'/> JAPAN 
                        <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank">View on Google Maps</a>
                    </p>
                    <h1 className='title'>Mount Fuji</h1>
                    <strong>12 Jan, 2021 - 24 Jan, 2021</strong>
                    <p className='description'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
            <div className='divider'></div>
        </main>
    )
}