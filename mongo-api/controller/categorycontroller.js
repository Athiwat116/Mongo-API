import Category from "../models/category.js";

const CategoryCreate = async (req, res) => {
    try {
        const { categoryName, description } = req.body;
        await Category.create({
            categoryName,
            description
        })
        .then( result => res.status(201).json( result ))
        .catch(error => res.status(400).json({message: error.message}));
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const CategoryGetAll = async (req, res) => {
    try {
        await Category.find()
        .then( result => res.status(200).json(result))
        .catch( error => res.status(400).json({message: error.message}))
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const CategoryGetById = async (req, res) => {
    try {
        const { id } = req.params;
        await Category.findById(id)
        .then( result => {
            if (!result) return res.status(404).json({ message: 'Category not found' });
            return res.status(200).json(result);
        })
        .catch( error => res.status(400).json({ message: error.message }));
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const CategoryUpdateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoryName, description } = req.body;
        await Category.findByIdAndUpdate(id, { categoryName, description }, { new: true })
            .then(result => {
                if (!result) return res.status(404).json({ message: 'Category not found' });
                return res.status(200).json(result);
            })
            .catch(error => res.status(400).json({ message: error.message }));
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const CategoryDeleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await Category.findByIdAndDelete(id)
            .then(result => {
                if (!result) return res.status(404).json({ message: 'Category not found' });
                return res.status(204).json({ message: 'Category deleted successfully' });
            })
            .catch(error => res.status(400).json({ message: error.message }));
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export {CategoryCreate, CategoryGetAll, CategoryGetById, CategoryUpdateById, CategoryDeleteById};