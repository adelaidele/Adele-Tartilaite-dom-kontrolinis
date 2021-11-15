const baseUrl = "http://localhost:3000";

class API {
    static fetchApartments = (success, failure) => {
        fetch(`${baseUrl}/apartments`)
            .then(res => res.json())
            .then(success)
            .catch(failure);
    }

    static deleteApartment = (id, success, failure) => {
        fetch(`${baseUrl}/apartments/${id}`, { method: "DELETE" })
            .then(res => res.status === 200 ? success() : failure(res.statusText))
            .catch(failure);
    }
}

// API.fetchApartments(
//     console.log,
//     console.error
// ) 

// API.deleteApartment(
//     '2',
//     console.log,
//     console.error
// )