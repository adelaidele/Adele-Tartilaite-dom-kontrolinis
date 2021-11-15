class ApartmentsGridComponent {
    constructor(){
        this.state = {
            loading: false,
            apartments: []
          }
        this.init();
    }

    fetchApartments = () => API.fetchApartments(
        (apartments) => {
            this.state.loading = false;
            this.saveApartments(apartments);
        },
         (err) => {
             alert(err);
             this.state.loading = false;
             this.render();
        });

    saveApartments = (apartments) => {
        this.state = {apartments, loading: false}

        this.render();
    }

    deleteApartment = (id) => {
        API.deleteApartment(id, () => API.fetchApartments(this.saveApartments, alert),alert);
    }

    init = () => {;
        this.state.loading = true;
        this.fetchApartments();
        this.htmlElement = document.createElement("div");
        this.htmlElement.className = "row g-4";

        this.render();
    }

    wrapInColumn = (element) => {
        const column = document.createElement('div');
        column.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
        column.appendChild(element);
        return column;
    }

    render = () => {
        const { loading, apartments } = this.state;
        if (loading) {
          this.htmlElement.innerHTML = "<div class='text-center'><img src='assets/house-loading.gif'/></div>";
        }else if (apartments.length > 0) {
            this.htmlElement.innerHTML = '';
            const apartmentsElements = apartments
            .map(({id, ...props}) => new ApartmentCardComponent({
                ...props,
                onDelete: () => this.deleteApartment(id)
              }))
              .map(apt => apt.htmlElement)
              .map(this.wrapInColumn);

            this.htmlElement.append(...apartmentsElements);
        }
        else {
          this.htmlElement.innerHTML = "<h2>Siuo metu apartamentu nera</h2>";
        }  
    }
}