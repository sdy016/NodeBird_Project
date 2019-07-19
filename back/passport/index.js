const passport = require("passport");
const db = require("../models");
const local = require("./local");

module.exports = () => {
  //서버쪽에 사용자를 대표하는 아이디 를 저장. [{id:3, cookie:'abcdefg'}]
  //프론트 쪽에서는 쿠키를 쓴다.
  //req.login 을 실행하면 passport.serializeUser 실행 된다.
  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    return done(null, user.id);
  });
  //
  passport.deserializeUser(async (id, done) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
    try {
      const user = await db.User.findOne({
        where: { id },
        include: [{
          model: db.Post,
          as: 'Posts',
          attributes: ['id'],
        }, {
          model: db.User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: db.User,
          as: 'Followers',
          attributes: ['id'],
        }],
      });
      return done(null, user); // req.user
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });
  local();
};
//프론트 => 서버 쪽에는 암호화된 쿠키만 전달. 'abcdefg'
//서버가 쿠키 정보를 받아서  쿠키 파서, 익스프레스 세션으로 쿠키 검사 후 id : 3 발견.
//id: 3이 deserializeUserUser에 들어간당~~~
//req.user로 사용자 정보가 들어감.

//요청 보낼때마다 deserializeUserUser가 실행 됨.
//실무에서는 deserializeUserUser 결과물 캐싱. (db 자원 아낄라궁)
