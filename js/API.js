const baseUrl = "http://localhost:3000";

class API {
    static fetchApartments = (success, failure) => {
        setTimeout(() => {
            fetch(`${baseUrl}/apartments`)
                .then(res => res.json())
                .then(success)
                .catch(failure);
        }, 1000)
    }

    static deleteApartment = (id, success, failure) => {
        fetch(`${baseUrl}/apartments/${id}`, { method: "DELETE" })
            .then(res => res.status === 200 ? success() : failure(res.statusText))
            .catch(failure);
    }
}