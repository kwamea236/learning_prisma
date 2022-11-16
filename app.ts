import connectDB, { prisma } from "./connectDB";

//connectDB
connectDB();


async function main(){
    //insert a single user
    // const user = await prisma.user.create({
    //     data: {
    //         fullname: "John Doe",
    //         email: "johndoe@gmail.com"
    //     }
    // });

    // const users = await prisma.user.createMany({
    //     data: [{
    //         fullname: "Jane Doe",
    //         email: "janedoe@gmail.com"
    //     },{
    //         fullname: "Jack Doe",
    //         email: "jackdoe@gmail.com"
    //     }]
    // })

    //find unique user
    const uniqueUser = await prisma.user.findUnique({
        where: {
            id: 3
        }
    })

    // const updateUser = await prisma.user.update({
    //     where:{
    //         id: 1
    //     },
    //     data:{
    //         fullname: "Prince Doe",
    //         age: 20,
    //         email: "princedoe@gmail.com"
    //     }
    // })

    console.log(JSON.stringify(uniqueUser, undefined));
}

main()
.then(async ()=>{
    await prisma?.$disconnect();
})
.catch(async (e)=>{
    console.error(e);
    await prisma?.$disconnect();
    process.exit();
})