exports.getAddProperty = (req, res, next) => {
    res.send('<form action="/admin/add-property" method="POST"><input type="text" name="title"><button type="submit">Add product</button>');
}