class ApartmentsGridComponent {
    constructor(){
        this.state = {
            loading: false,
            apartments: []
          }
        this.init();
    }

    fetchApartments = () => API.fetchApartments(this.saveApartments, alert);

    saveApartments = (apartments) => {
        this.state.apartments = apartments;
        this.state.loading = false;

        this.render();
    }

    init = () => {;
        this.state.loading = true;
        this.fetchApartments();
        this.htmlElement = document.createElement("div");
        this.htmlElement.innerHTML = 'bandau laime';

        this.render();
    }

    render = () => {
        const { loading, apartments } = this.state;
        if (loading) {
          this.htmlElement.innerHTML = 'siunčiama...';
        } else {
          this.htmlElement.innerHTML = 'parsiųsta!';
        }  
    }
}