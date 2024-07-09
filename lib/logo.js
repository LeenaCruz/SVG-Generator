function Logo(name) {
    this.name = name;

    if (typeof name !== "string" && name.lenght > 3) {
        throw new Error("Please select only 3 letters");
    };

}

module.exports = Logo;