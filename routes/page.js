const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    // 넌적스에서 사용할 변수 설정
    res.locals.user = null;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followingIdList = [];
    next();
});

router.get('/profile', renderProfile);
router.get('/join', renderJoin);
router.get('/', renderMain);

module.exports = router;