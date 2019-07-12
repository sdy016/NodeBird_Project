module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      // 테이블명은 posts
      content: {
        type: DataTypes.TEXT, // 매우 긴 글
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci',
    }
  );
  Post.associate = db => {
    db.Post.belongsTo(db.User); // 테이블에 UserId 컬럼이 생겨요
    db.Post.hasMany(db.Comment); //Post : Comment  (1:N)
    db.Post.hasMany(db.Image); //Post : Image  (1:N)
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // RetweetId 컬럼 생겨요 ((post <-> post) 구별이 안될때는 as 로 구별 할수 있는 키를 생성.)
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); //이미 (post <-> user) belongsTo 관계가 있기 때문에 as 로 구별 할 수 있는 키를 생성
  };
  return Post;
};
