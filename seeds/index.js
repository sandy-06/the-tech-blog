const { Post, User, Comment } = require('../models');
const faker = require('faker');



async function main(){
    await generateUsers();
    await generatePosts();
    await generateComments();
}

async function generateUsers(){
    await User.create({
        username: faker.name.findName(),
        email: faker.internet.email(),
        password: 'whatever'

    })

}

async function generatePosts(){
    const users = await User.findAll({})
    users.map(async user => {
        // generate posts, insert them
        await Post.create({
            user_id: user.id,
            title: faker.commerce.product(),
            content: faker.commerce.productDescription()
        })
    })

}

async function generateComments(){
    const users = await User.findAll({})
    const posts = await Post.findAll({})

    users.map(async user => {
        posts.map(async post => {
            await Comment.create({
                user_id: user.id,
                post_id: post.id,
                content: faker.commerce.productMaterial()
            })

        })
    })
}