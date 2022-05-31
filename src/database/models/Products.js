module.exports = (sequelize, DataTypes) => {
    let Product = 'Product_categorie'
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
        },
        name:{
            allowNull:false,
            type: DataTypes.STRING,
        },
        description:{
            allowNull: false,
            type: DataTypes.STRING
        },
        price:{
            allowNull:false,
            type: DataTypes.INTEGER
        },
        product_categories_id:{
            allowNull:false,
            type: DataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'products',
        timestamps: false
    }

    const Products = sequelize.define(Product, cols, config);

    return Products;
}