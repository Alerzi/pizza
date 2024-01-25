import axios from "./axios"

export const MenuApi = {
    async getMenu() {
        const data = await axios.get("/menu");
        return data;
    }
}