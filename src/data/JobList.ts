import { Job } from "@/types/Job";
import { faker, fakerPT_BR } from '@faker-js/faker';

export const generateJobList = (): Job[] => {

    return Array.from({ length: 20 }, () => {
        
        const companyName = fakerPT_BR.company.name();
        const initials = companyName.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
        const states = [
            'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT',
            'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 
            'RR', 'SC', 'SP', 'SE', 'TO'
        ];
        
        return {
            hiringRegime: Math.random() > 0.5 ? "PJ" : "PF",
            profile: fakerPT_BR.person.jobArea(),
            location: fakerPT_BR.location.city(),
            company: {
                name: companyName,
                photo: `https://ui-avatars.com/api/?name=${initials}`,
                id: faker.number.bigInt().toString(),
                address: faker.helpers.arrayElement(states),
                phone: fakerPT_BR.phone.number(),
                employees: []
            },
            jobType: Math.random() > 0.5 ? "Presencial" : "Remoto",
            personalSkills: [fakerPT_BR.hacker.adjective(), fakerPT_BR.hacker.noun()],
            description: fakerPT_BR.lorem.paragraph(),
            requirements: fakerPT_BR.lorem.sentence(),
            qualifications: fakerPT_BR.lorem.sentence(),
            additionalInformation: fakerPT_BR.lorem.paragraph(),
            salary: fakerPT_BR.number.float({ min: 1000, max: 10000 }),
            status: Math.random() > 0.5 ? "Active" : "Inactive",
            benefits: fakerPT_BR.lorem.words(3),
            position: fakerPT_BR.person.jobArea(),
            id: faker.string.uuid(),
            creationDate: faker.date.recent({days: 10}),
            isFeatured: Math.random() > 0.5,
        };
    });

};