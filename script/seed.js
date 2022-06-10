'use strict'

const db = require('../server/db')
const {User, Flag} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const flags = await Promise.all([
    Flag.create({
      name: 'Abrosexual',
      year: '2013',
      creator: '@modchad',
      imageurl: 'flags/abrosexual2013.png'
    }),
    Flag.create({
      name: 'Agender',
      year: '2014',
      imageurl: 'flags/agender2014.png'
    }),
    Flag.create({
      name: 'Agender',
      year: '2021',
      creator: 'Salem X',
      imageurl: 'flags/agender2021.png'
    }),
    Flag.create({
      name: 'Agender',
      altname: 'Citrus',
      year: '2021',
      creator: 'Mars',
      imageurl: 'flags/agendercitrus.png'
    }),
    Flag.create({
      name: 'Ally Pride',
      year: '2000',
      creator: '@cameronwhimsy',
      imageurl: 'flags/allypride2000.png'
    }),
    Flag.create({
      name: 'Aromantic',
      year: '2014',
      creator: '@cameronwhimsy',
      imageurl: 'flags/aromantic2014.png'
    }),
    Flag.create({
      name: 'Aromantic',
      year: '2011',
      creator: 'National Coalition for Aromantic Visibility',
      controversial: 'CONTROVERSIAL',
      imageurl: 'flags/aromantic2011.png'
    }),
    Flag.create({
      name: 'Asexual',
      year: '2010',
      creator: 'Asexual Visibility and Education Network (AVEN)',
      imageurl: 'flags/asexual2010.png'
    }),
    Flag.create({
      name: 'Bigender',
      year: '2013',
      controversial: 'CONTROVERSIAL',
      creator: '@Jewishkuvira',
      imageurl: 'flags/bigender2013.png'
    }),
    Flag.create({
      name: 'Bigender',
      year: '2015',
      imageurl: 'flags/bigender2015.png'
    }),
    Flag.create({
      name: 'Bigender',
      year: '2020',
      creator: '@camp-mlm',
      imageurl: 'flags/bigender2020.png'
    }),
    Flag.create({
      name: 'Bisexual',
      year: '1998',
      creator: 'Michael Page',
      imageurl: 'flags/bisexual1998.png'
    }),
    Flag.create({
      name: 'Butch',
      year: '2017',
      creator: '@butchspace',
      imageurl: 'flags/butch2017.png'
    }),
    Flag.create({
      name: 'Demiromantic',
      year: '2011',
      imageurl: 'flags/demiromantic2011.png'
    }),
    Flag.create({
      name: 'Demisexual',
      year: '2010',

      imageurl: 'flags/demisexual2010.png'
    }),
    Flag.create({
      name: 'Drag Pride',
      year: '1999',
      creator: 'Sean Campbell',
      imageurl: 'flags/dragpride1999.png'
    }),
    Flag.create({
      name: 'Drag Pride',
      year: '2016',
      creator: 'Veranda L’Ni',
      imageurl: 'flags/dragpride2016.png'
    }),
    Flag.create({
      name: 'Gay',
      year: '2019',
      creator: '@gayflagblog',
      imageurl: 'flags/gay2019.png'
    }),
    Flag.create({
      name: 'Gay',
      altname: 'Bear',
      year: '1995',
      creator: 'Craig Byrnes',
      imageurl: 'flags/gay1995.png'
    }),
    Flag.create({
      name: 'Genderfluid',
      year: '2012',
      creator: 'JJ Poole',
      imageurl: 'flags/genderfluid2012.png'
    }),
    Flag.create({
      name: 'Genderqueer',
      year: '2011',
      creator: 'Marilyn Roxie',
      imageurl: 'flags/genderqueer2011.png'
    }),
    Flag.create({
      name: 'Gender Questioning',
      year: '2017',
      creator: 'Roswelll',
      imageurl: 'flags/genderquestioning2017.png'
    }),
    Flag.create({
      name: 'Intersex',
      year: '2019',
      creator: 'Natalie Phox',
      imageurl: 'flags/intersex2009.png'
    }),
    Flag.create({
      name: 'Intersex',
      year: '2013',
      creator: 'Morgan Carpenter',
      imageurl: 'flags/intersex2013.png'
    }),
    Flag.create({
      name: 'Leather Pride',
      year: '1989',
      creator: 'Tony DeBlase',
      imageurl: 'flags/leatherpride1989.png'
    }),
    Flag.create({
      name: 'Lesbian',
      year: '2011',
      imageurl: 'flags/lesbian2011.png'
    }),
    Flag.create({
      name: 'Lesbian',
      year: '1999',
      controversial: 'CONTROVERSIAL',
      creator: 'Sean Campbell',
      imageurl: 'flags/lesbian1999.png'
    }),
    Flag.create({
      name: 'Lesbian',
      year: '2010',
      controversial: 'CONTROVERSIAL',
      imageurl: 'flags/lesbian2010.png'
    }),
    Flag.create({
      name: 'Lesbian',
      year: '2018',
      creator: 'Emily Gwen',
      imageurl: 'flags/lesbian2018.png'
    }),
    Flag.create({
      name: 'Nonbinary',
      year: '2014',
      creator: 'Kyle Rowan',
      imageurl: 'flags/nonbinary2014.png'
    }),
    Flag.create({
      name: 'Nonbinary',
      atlname: 'Trans',
      year: '2022',
      imageurl: 'flags/nonbinarytrans2022.png'
    }),
    Flag.create({
      name: 'Polysexual',
      year: '2012',
      creator: '@fuckyeahpolysexuality',
      imageurl: 'flags/polysexual2012.png'
    }),
    Flag.create({
      name: 'Pansexual',
      year: '2010',
      creator: 'Jasper V.',
      imageurl: 'flags/pansexual2010.png'
    }),
    Flag.create({
      name: 'Pangender',
      year: '2015',
      creator: '@pangendering',
      imageurl: 'flags/pangender2015.png'
    }),
    Flag.create({
      name: 'Pocket Gender',
      year: '2021',
      creator: 'Alex Stowe',
      imageurl: 'flags/pocketgender2021.png'
    }),
    Flag.create({
      name: 'Polyamory',
      year: '1995',
      creator: 'Jim Evans',
      imageurl: 'flags/polyamory1995.png'
    }),
    Flag.create({
      name: 'Pride',
      year: '1978',
      creator: 'Gilbert Baker',
      imageurl: 'flags/pride1978.png'
    }),
    Flag.create({
      name: 'Pride',
      year: '1979',
      imageurl: 'flags/pride1979.png'
    }),
    Flag.create({
      name: 'Pride',
      year: '1980',
      imageurl: 'flags/pride1980.png'
    }),
    Flag.create({
      name: 'Pride',
      altname: 'US Canton',
      year: '1999',
      imageurl: 'flags/prideuscanton1999.png'
    }),
    Flag.create({
      name: 'Pride',
      year: '2003',
      creator: 'Gilbert Baker',
      imageurl: 'flags/pride2003.png'
    }),
    Flag.create({
      name: 'Pride',
      altname: 'Two Spirit',
      year: '2016',
      creator: '@2Sanon',
      imageurl: 'flags/pridetwospirit2016.png'
    }),
    Flag.create({
      name: 'Pride',
      year: '2017',
      creator: 'Gilbert Baker',
      imageurl: 'flags/pride2017.png'
    }),
    Flag.create({
      name: 'Philadelphia Pride',
      year: '2017',
      creator: 'Tierney',
      imageurl: 'flags/philadelphiapride2017.png'
    }),
    Flag.create({
      name: 'Pride',
      year: '2018',
      creator: 'Daniel Quasar',
      imageurl: 'flags/pride2018.png'
    }),
    Flag.create({
      name: 'Pride',
      altname: 'Brazil',
      year: '2018',
      creator: 'Estêvão Romane',
      imageurl: 'flags/pridebrazil2018.png'
    }),
    Flag.create({
      name: 'Pride',
      altname: 'Chennai',
      year: '2018',
      creator: 'Moulee',
      imageurl: 'flags/pridechennai2018.png'
    }),
    Flag.create({
      name: 'Pride',
      altname: 'QPOC',
      year: '2019',
      imageurl: 'flags/prideqpoc2019.png'
    }),
    Flag.create({
      name: 'Pride',
      altname: 'Africa',
      year: '2019',
      imageurl: 'flags/prideafrica2019.png'
    }),
    Flag.create({
      name: 'Pride',
      year: '2021',
      creator: 'Valentino Vecchietti',
      imageurl: 'flags/pride2021.png'
    }),
    Flag.create({
      name: 'Rubber Pride',
      year: '1995',
      creator: 'Peter Tolos & Scott Moats',
      imageurl: 'flags/rubberpride1995.png'
    }),
    Flag.create({
      name: 'Transgender',
      year: '1999',
      creator: 'Monica Helmes',
      imageurl: 'flags/transgender1999.png'
    }),
    Flag.create({
      name: 'Transgender',
      year: '2018',
      controversial: 'CONTROVERSIAL',
      creator: 'Jennifel Pellinen',
      imageurl: 'flags/transgender2018.png'
    }),
    Flag.create({
      name: 'Transgender',
      altname: 'Alt',
      year: '1999',
      creator: 'Captain John Andrew',
      imageurl: 'flags/alttransgender1999.png'
    }),
    Flag.create({
      name: 'Transgender',
      year: '2014',
      creator: 'Toronto Trans Alliance',
      imageurl: 'flags/transgender2014.png'
    }),
    Flag.create({
      name: 'Transgender',
      year: '1991',
      creator: 'Dawn Holland/Transgender Nation',
      imageurl: 'flags/transgender1991.png'
    }),
    Flag.create({
      name: 'Transgender',
      year: '2012',
      creator: 'Spokane Trans*',
      imageurl: 'flags/transgender2012.png'
    }),
    Flag.create({
      name: 'Transgender',
      year: '2017',
      creator: 'Jesse DemiDude Bananasaurus',
      imageurl: 'flags/transgender2017.png'
    }),
    Flag.create({
      name: 'Twink',
      year: '2017',
      imageurl: 'flags/twink2017.png'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${flags.length} flegs`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
