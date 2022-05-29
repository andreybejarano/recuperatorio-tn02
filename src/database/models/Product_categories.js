module.exports = (sequelize, DataTypes) => {
    let alias = 'Product_categorie'
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
        },
        name:{
            allowNull:false,
            type: DataTypes.STRING,
        }
    };

    let config = {
        tableName: 'product_categories',
        timestamps: false
    }

    const Product_categories = sequelize.define(alias, cols, config);

    return Product_categories;
}