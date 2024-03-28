class PayloadBuilder {
    constructor() {
        this.payload = {
            categoryCode: '',
            title: '',
            priceNumber: 0,
            areaNumber: 0,
            images: [],
            address: '',
            priceCode: '',
            areaCode: '',
            description: '',
            province: ''
        };
    }

    withCategoryCode(categoryCode) {
        this.payload.categoryCode = categoryCode;
        return this;
    }

    withTitle(title) {
        this.payload.title = title;
        return this;
    }

    withPriceNumber(priceNumber) {
        this.payload.priceNumber = priceNumber;
        return this;
    }

    withAreaNumber(areaNumber) {
        this.payload.areaNumber = areaNumber;
        return this;
    }

    withImages(images) {
        this.payload.images = images;
        return this;
    }

    withAddress(address) {
        this.payload.address = address;
        return this;
    }

    withPriceCode(priceCode) {
        this.payload.priceCode = priceCode;
        return this;
    }

    withAreaCode(areaCode) {
        this.payload.areaCode = areaCode;
        return this;
    }

    withDescription(description) {
        this.payload.description = description;
        return this;
    }

    withProvince(province) {
        this.payload.province = province;
        return this;
    }

    build() {
        return this.payload;
    }
}

export default PayloadBuilder