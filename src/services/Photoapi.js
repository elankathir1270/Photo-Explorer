import axios from "axios"

export const Photoapi = axios.create({

    baseURL: "https://api.unsplash.com/",
    params: {
        client_id:"QsHeOGpGCi63x-qB_ohsu9XNOEv4KQ97iheGQ3UUUlU"
    }
}

) 
