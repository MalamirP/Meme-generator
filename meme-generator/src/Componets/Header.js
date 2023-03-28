import './Header.css'
export default function Header() {
    return (
        <header className='header'>
            <img className='header--image'
                src='https://trollface.dk/trollfaceONE.png' alt='adasd'
            />
            <h2 className='header--title'>Header Component</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}