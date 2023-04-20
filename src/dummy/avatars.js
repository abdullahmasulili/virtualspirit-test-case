import { faker } from '@faker-js/faker'

const avatars = [
    {
        name: faker.name.fullName(),
        image: null
    },
    {
        name: faker.name.fullName(),
        image: faker.image.avatar()
    },
    {
        name: faker.name.fullName(),
        image: null
    },
    {
        name: faker.name.fullName(),
        image: null
    },
    {
        name: faker.name.fullName(),
        image: faker.image.avatar()
    },
    {
        name: faker.name.fullName(),
        image: null
    },
    {
        name: faker.name.fullName(),
        image: null
    },
    {
        name: faker.name.fullName(),
        image: faker.image.avatar()
    },
    {
        name: faker.name.fullName(),
        image: null
    },
    {
        name: faker.name.fullName(),
        image: null
    },
    {
        name: faker.name.fullName(),
        image: faker.image.avatar()
    },
]

export default avatars