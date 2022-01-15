const { Post, User, Comment } = require('../models');
const faker = require('faker');



async function main(){
    await generateUsers();
    await generatePosts();
    await generateComments();
}

async function generateUsers(){
    for( let i = 0; i < 10; i++){
        await User.create({
            username: faker.name.findName(),
            email: faker.internet.email(),
            password: 'whatever'
    
        })
    }
    

}

async function generatePosts(){
    const users = await User.findAll({})
    users.map(async user => {
        // generate posts, insert them
for(let i =0; i<4; i++){
    await Post.create({
        userId: user.id,
        title: faker.commerce.product(),
        contents: faker.commerce.productDescription()
    })
}

        
    })

}

async function generateComments(){
    const users = await User.findAll({})
    const posts = await Post.findAll({})
    for(let i =0; i < 2; i++){
        await users.map(async user => {
            await posts.map(async post => {
                await Comment.create({
                    userId: user.id,
                    postId: post.id,
                    contents: faker.commerce.productMaterial()
                })
    
            })
        })
    }

  
}

main();