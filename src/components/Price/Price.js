import "./Price.css";

const Price = () => {
    return (
        <div className='price'>
            <div className="price__content">
                <div>
                    <div className="price__content__one">
                        <div className="left"></div>
                        <p>RitmStyle с погружением</p>
                    </div>
                    <div className="price__content__one">
                        <div className="left"></div>
                        <p>Абонемент на RitmStyle</p>
                    </div>
                    <div className="price__content__one">
                        <div className="left"></div>
                        <p>RitmStyle для пар</p>
                    </div>
                    <div className="price__content__one">
                        <div className="left"></div>
                        <p>RitmStyle для беременных</p>
                    </div>
                    <div className="price__content__one">
                        <div className="left"></div>
                        <p>RitmStyle +  фотосессия</p>
                    </div>
                </div>
                <div>
                    <p className="price__total">1000р.</p>
                    <p className="price__total">5500р.</p>
                    <p className="price__total">6000р.</p>
                    <p className="price__total">13500р.</p>
                    <p className="price__total">11500р.</p>
                </div>
            </div>
            <div className="price__img"></div>
        </div>
    )

}
export default Price;