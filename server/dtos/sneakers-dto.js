class SneakersDTO{
    id;
    imageUrl;
    fullname;
    brand
    price;
    sizes;
    colors;
    isFavorite;
    isAdded;

    constructor(model) {
        this.id = model._id;
        this.imageUrl = model.imageUrl;
        this.fullname = model.fullname;
        this.brand = model.brand;
        this.price = model.price;
        this.sizes = model.sizes;
        this.colors = model.colors;
        this.isFavorite = false;
        this.isAdded = false;
    }
}
export default SneakersDTO;