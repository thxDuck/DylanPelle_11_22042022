import database from './Database.js'
let Index = {
    getApartmentList: (page = 1) => {
        if (page <= 0) page = 1;
        return database.getApartmentListByPage(page);
    },
    getApartmentById: (id) => {
        return database.getById(id);
    }

}

export default Index;