import axiosClient from './axiosClient';

const orderApi = {
    newOrder: ({fullName, phone, province, district, ward, address,shippingPrice}) => {
        try {
            const url = '/order/new';
            return axiosClient.post(url, {fullName, phone, province, district, ward, address, shippingPrice });
        } catch (error) {
            console.log(error);
        }
       
    },
};
export default orderApi;
