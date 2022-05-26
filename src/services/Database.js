

// const DATA_URL = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
import DATAS from "./datas.json"

const APIMock = {
    findAll: (callback) => {
        setTimeout(() => {
            callback(DATAS);
        }, 200);
    },
    findById: (id, callback) => {
        setTimeout(() => {
            let apartment = DATAS.find(d => d.id === id);
            callback(apartment);
        }, 200);

    }

}

const APARTMENTS_BY_PAGES = 6;
const Index = {
    getApartmentListByPage: (page = 1, callback) => {
        APIMock.findAll(datas => {
            if (!!datas.length) {
                let max = (page) * APARTMENTS_BY_PAGES;
                let min = max - APARTMENTS_BY_PAGES;
                let apartments = datas.slice(min, max);
                callback(apartments);
                return;
            }
            callback([]);
        });
    },
    getById: (id, callback) => {
        APIMock.findById(id, apartment => {
            callback(apartment);
        });
    },
}
export default Index;