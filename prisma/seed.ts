import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const post1 = await prisma.rockbands.upsert({
        where: {name: 'Foo Fighters' },
        update:{},
        create: {
            name: 'Foo Fighters',
            bestsellingalbum:  'The Colour and the Shape',
            members: 'Dave Grohl, Nate Mendel, Pat Smear, Taylor Hawkins, Rami Jaffee' ,
            cityoffoundation: 'Seattle, Washington',
            yearoffoundation: 'One thousand nine hundred ninety-four'
        },
    });
         
const post2 = await prisma.rockbands.upsert({
        where: {name: 'Pink Floyd' },
        update:{},
        create: {
                name: 'Pink Floyd',
                bestsellingalbum:  'The Dark Side of the Moon',
                members: 'Syd Barrett, Roger Waters, David Gilmour, Nick Mason, Richard Wright' ,
                cityoffoundation: 'London, England',
                yearoffoundation: 'one thousand nine hundred sixty-five'
            },
    });
    console.log({ post1, post2 });
}


main()
.catch((e) =>   {
    console.error(e);
    process.exit(1);
})
.finally(async() =>{
    await prisma.$disconnect();
});

