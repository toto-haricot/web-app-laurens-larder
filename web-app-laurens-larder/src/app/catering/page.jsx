// import style from './styleCatering.module.css'

export default function Catering() {
    return (
        <section className="catering-page">
            <div className="catering-page-container">
                <h1>Browse our catering menus</h1>
                <div className="image-row">
                    <div className="image-container">
                        <img
                        src="/menu-finger-food-1.jpg"
                        alt="First page of the finger food menu"
                        className=""
                        />
                    </div>
                    <div className="image-container">
                        <img
                        src="/menu-finger-food-1.jpg"
                        alt="Second page of the finger food menu"
                        className=""
                        />
                    </div>
                    <div className="image-container">
                        <img
                        src="/menu-finger-food-2.jpg"
                        alt="First page of the finger food menu"
                        className=""
                        />
                    </div>
                    <div className="image-container">
                        <img
                        src="/menu-finger-food-1.jpg"
                        alt="Second page of the finger food menu"
                        className=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}