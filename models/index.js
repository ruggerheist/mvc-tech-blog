const User = require('./User');
const Post = require('./Post');

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Comment.belongsTo(User)

//Post.hasMany(Comment)

module.exports = { User, Post };