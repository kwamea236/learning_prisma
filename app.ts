import connectDB, { prisma } from "./connectDB";

//connectDB
connectDB();

async function main(){
//    const user = await prisma.user.create({
//     data:{
//         fullname: "Kwame Ato".toUpperCase(),
//         age: 20,
//         email: "kwame@gmail.com"

//     }
//    })
    // const updateData = await prisma.user.update({
    //     where:{
    //         id: "d041f9df-9542-4802-97be-7248bad87c86"
    //     },
    //     data:{
    //         fullname: "Raymond Ghanney",
    //         age: 30,
    //         email: "raymondghan@gmail.com"
    //     }
    // })

    const insertMany = await prisma.user.createMany({
        data:[{
            fullname: "John Doe",
            email: "johndoe@gmail.com",
            age: 30
        },{
            fullname: "Jane Doe",
            email: "janedoe@gmail.com",
            age: 7
        },{
            fullname: "Maame Saaba",
            email: "mamesaaba@gmail.com",
            age: 50
        }]
    })
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