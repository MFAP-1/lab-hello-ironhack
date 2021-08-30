import icon1 from './assets/images/icon1.png';
import icon2 from './assets/images/icon2.png';
import icon3 from './assets/images/icon3.png';
import icon4 from './assets/images/icon4.png';

function Cards() {
    return (
        <div id='cards-main-div' className='d-flex justify-content-around p-3'>
            <div className='text-start mx-4'>
                <img src={icon1} alt='screwdriver'/>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className='text-start mx-4'>
                <img src={icon2} alt='computer' />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className='text-start mx-4'>
                <img src={icon3} alt='monitor'/>
                <h3>Single-way</h3>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className='text-start mx-4'>
                <img src={icon4} alt='file'/>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    );
}

export default Cards;