class ApartmentCardComponent {
    static USD_EUR = 0.87;

    constructor(props) {
        this.props = props;
        this.init();
    }

    init = () => {
        const { address, imgSrc, price, roomCount, squares, owner, type } = this.props;
        const { street, number, city, country } = address
        const { amount, currency } = price
        const { fullname, email, phone } = owner

        let finalPrice = currency === '$' ? amount * ApartmentCardComponent.USD_EUR : amount;

        finalPrice = finalPrice.toFixed(2);

        this.htmlElement = document.createElement('article');
        this.htmlElement.className = "card p-3 shadow";
        this.htmlElement.innerHTML = `
        <div class="card-body">
            <img class="card-img-top" src="${imgSrc}">
            <h5>Address</h5>
            <ul>
                <li>${street}-${number}, ${city}, ${country}</li>
                <li>Price: ${finalPrice} €</li>
                <li>Type: ${type} </li>
                <li>Rooms: ${roomCount} </li>
                <li>Squares: ${squares} m2 </li>
            </ul>
            <h5>Contacts</h5>
            <ul>
                <li> ${fullname}</li>
                <li> ${email}</li>
                <li> ${phone}</li>
            </ul>
        </div>
        `;
    };
}