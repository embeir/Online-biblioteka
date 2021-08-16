    import axios from 'axios';

    const instance = axios.create({
        baseURL:"https://online-biblioteka-default-rtdb.europe-west1.firebasedatabase.app/"
    })


    export default instance;