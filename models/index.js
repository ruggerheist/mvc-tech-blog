const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

//User.hasMany(Comment, {

//Comment.belongsTo(User)

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
//Post.hasMany(Comment)
Post.hasMany(Comment, {
    foreignKey: 'post_id',
})

//Comment.belongsTo(Post)


module.exports = { User, Post, Comment };