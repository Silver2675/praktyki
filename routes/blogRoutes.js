const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


router.get('/', blogController.blog_index);

router.get('/', (req,res) => {
    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.render('index', {title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err);
        })
    });

router.post('/', blogController.blog_create_post);
router.get('/create', blogController.blog_create_get);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);


module.exports = router;