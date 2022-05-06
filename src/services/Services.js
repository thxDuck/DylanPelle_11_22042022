import database from './Database.js';

let Index = {
    getApartmentList: (page = 1, callback) => {
        if (page <= 0) page = 1;
        database.getApartmentListByPage(page, callback);
    },
    getApartmentById: (id) => {
        return database.getById(id);
    }

}

export default Index;