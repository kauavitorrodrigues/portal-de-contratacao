import { Job } from "@/types/Job";

export const jobs: Job[] = [
    {
      "hiringRegime": "PJ",
      "profile": "Desenvolvimento de Software",
      "location": "São Paulo, SP",
      "company": {
        "name": "Google Brasil",
        "photo": "https://www.svgrepo.com/show/303108/google-icon-logo.svg",
        "id": "2918273648273",
        "address": "SP",
        "phone": "(11) 4002-8922",
        "employees": []
      },
      "jobType": "Remoto",
      "personalSkills": [
        "Inovação",
        "Comunicação",
        "Trabalho em equipe"
      ],
      "description": "Buscamos desenvolvedor(a) back-end para integrar nossa equipe de desenvolvimento. Atuará em projetos focados em soluções escaláveis na nuvem.",
      "requirements": "Experiência com Java, APIs RESTful e Kubernetes. Desejável conhecimento em Docker e Google Cloud.",
      "qualifications": "Graduação em Engenharia da Computação, Ciência da Computação ou similar. Experiência mínima de 3 anos em desenvolvimento.",
      "additionalInformation": "Trabalhe em uma das maiores empresas de tecnologia, com grande oportunidade de crescimento profissional.",
      "salary": 15000.00,
      "status": "active",
      "benefits": "Vale-refeição, assistência médica e bônus de performance.",
      "position": "Desenvolvedor(a) Back-end",
      "id": "9c29bcfe-1a24-47ef-9487-d8bc2c9fcba1",
      "creationDate": new Date("2024-07-19T19:19:46.762198"),
      "isFeatured": true
    },
    {
      "hiringRegime": "PF",
      "profile": "Data Science",
      "location": "Belo Horizonte, MG",
      "company": {
        "name": "Microsoft Brasil",
        "photo": "https://www.svgrepo.com/show/448239/microsoft.svg",
        "id": "4829374628371",
        "address": "MG",
        "phone": "(31) 3333-4444",
        "employees": []
      },
      "jobType": "Presencial",
      "personalSkills": [
        "Pensamento analítico",
        "Proatividade",
        "Colaboração"
      ],
      "description": "Procuramos Cientista de Dados para trabalhar com grandes volumes de dados e desenvolver modelos preditivos em nossa plataforma Azure.",
      "requirements": "Experiência com Python, R e banco de dados SQL. Conhecimento em machine learning e deep learning é essencial.",
      "qualifications": "Formação em Ciência de Dados, Estatística ou áreas correlatas. Experiência mínima de 2 anos.",
      "additionalInformation": "Faça parte da equipe que está na vanguarda das tecnologias de dados.",
      "salary": 13000.00,
      "status": "active",
      "benefits": "Assistência médica, previdência privada, plano de carreira.",
      "position": "Cientista de Dados",
      "id": "7dbf4d6a-f7e6-4b29-8462-e9b8e6742ab9",
      "creationDate": new Date("2024-07-26T19:19:46.762211"),
      "isFeatured": false
    },
    {
      "hiringRegime": "PJ",
      "profile": "Desenvolvimento Mobile",
      "location": "Rio de Janeiro, RJ",
      "company": {
        "name": "Amazon Brasil",
        "photo": "https://www.svgrepo.com/show/475634/amazon-color.svg",
        "id": "3928471628734",
        "address": "RJ",
        "phone": "(21) 9876-5432",
        "employees": []
      },
      "jobType": "Remoto",
      "personalSkills": [
        "Criatividade",
        "Resiliência",
        "Capacidade de resolver problemas"
      ],
      "description": "Estamos contratando desenvolvedor(a) mobile com experiência em Android e iOS para criar aplicativos de alta performance.",
      "requirements": "Conhecimento em Kotlin e Swift, além de experiência com APIs e integração de serviços externos.",
      "qualifications": "Graduação em áreas relacionadas à Tecnologia da Informação ou experiência equivalente.",
      "additionalInformation": "Trabalhe em projetos que impactam milhões de clientes da Amazon no mundo todo.",
      "salary": 14000.00,
      "status": "active",
      "benefits": "Vale-refeição, assistência médica, home office flexível.",
      "position": "Desenvolvedor(a) Mobile",
      "id": "d39c9fa6-3c4d-473b-8b8c-bd621b8de6fb",
      "creationDate": new Date("2024-08-12T19:19:46.762215"),
      "isFeatured": false
    },
    {
      "hiringRegime": "PF",
      "profile": "Engenharia de Software",
      "location": "Florianópolis, SC",
      "company": {
        "name": "Facebook Brasil",
        "photo": "https://www.svgrepo.com/show/303114/facebook-3-logo.svg",
        "id": "7648392837763",
        "address": "SC",
        "phone": "(48) 9999-9999",
        "employees": []
      },
      "jobType": "Presencial",
      "personalSkills": [
        "Liderança",
        "Trabalho em equipe",
        "Resolução de problemas"
      ],
      "description": "Procuramos um(a) Engenheiro(a) de Software para trabalhar em nossas plataformas sociais, desenvolvendo e otimizando serviços de alto desempenho.",
      "requirements": "Experiência em desenvolvimento full-stack, com ênfase em React e Node.js.",
      "qualifications": "Bacharelado em Engenharia de Software, Ciência da Computação ou áreas afins. Experiência de 4 anos em desenvolvimento.",
      "additionalInformation": "Faça parte da equipe de engenharia de uma das maiores plataformas sociais do mundo.",
      "salary": 16000.00,
      "status": "active",
      "benefits": "Vale-refeição, auxílio-transporte, seguro de vida.",
      "position": "Engenheiro(a) de Software",
      "id": "2b7f621f-09f7-4b36-8459-47857e847f27",
      "creationDate": new Date("2024-09-22T19:19:46.762218"),
      "isFeatured": true
    },
    {
      "hiringRegime": "PJ",
      "profile": "DevOps",
      "location": "Curitiba, PR",
      "company": {
        "name": "IBM Brasil",
        "photo": "https://www.svgrepo.com/show/473655/ibm.svg",
        "id": "5938274628391",
        "address": "PR",
        "phone": "(41) 3030-4040",
        "employees": []
      },
      "jobType": "Remoto",
      "personalSkills": [
        "Pensamento estratégico",
        "Gestão de tempo",
        "Comunicação"
      ],
      "description": "Estamos em busca de um(a) DevOps Engineer para integrar nossa equipe e otimizar fluxos de CI/CD utilizando tecnologias como Docker, Kubernetes e Jenkins.",
      "requirements": "Experiência com pipelines de automação, infraestrutura como código e ferramentas de monitoramento.",
      "qualifications": "Formação em Engenharia de Software, Sistemas de Informação ou áreas correlatas.",
      "additionalInformation": "Participe de projetos inovadores em um ambiente ágil e dinâmico.",
      "salary": 13500.00,
      "status": "active",
      "benefits": "Plano de saúde, plano odontológico, participação nos lucros.",
      "position": "DevOps Engineer",
      "id": "45a53d29-9f27-4c99-8d9d-6a1f94342c59",
      "creationDate": new Date("2024-09-29T19:19:46.762221"),
      "isFeatured": false
    },
    {
        "hiringRegime": "PF",
        "profile": "Desenvolvimento Web",
        "location": "São Paulo, SP",
        "company": {
            "name": "SAP Brasil",
            "photo": "https://www.svgrepo.com/show/331567/sap.svg",
            "id": "8273645192837",
            "address": "SP",
            "phone": "(11) 2222-3333",
            "employees": []
        },
        "jobType": "Presencial",
        "personalSkills": [
            "Criatividade",
            "Adaptabilidade",
            "Colaboração"
        ],
        "description": "Procuramos desenvolvedor(a) front-end para trabalhar em equipe multidisciplinar, focado em melhorar a experiência do usuário.",
        "requirements": "Experiência com HTML, CSS, JavaScript e frameworks como Angular ou React.",
        "qualifications": "Formação em áreas relacionadas à tecnologia e 2 anos de experiência.",
        "additionalInformation": "Possibilidade de crescimento em uma empresa global líder em soluções empresariais.",
        "salary": 12000.0,
        "status": "active",
        "benefits": "Vale-alimentação, plano de saúde, e auxílio-educação.",
        "position": "Desenvolvedor(a) Front-end",
        "id": "f6b5b647-3346-4d8c-9ed1-d1c56731fa2d",
        "creationDate": new Date("2024-09-22T19:22:17.472086"),
        "isFeatured": true
    },
    {
        "hiringRegime": "PJ",
        "profile": "Cloud Engineer",
        "location": "Belo Horizonte, MG",
        "company": {
            "name": "Oracle Brasil",
            "photo": "https://www.svgrepo.com/show/355152/oracle.svg",
            "id": "1928374650192",
            "address": "MG",
            "phone": "(31) 2222-1111",
            "employees": []
        },
        "jobType": "Remoto",
        "personalSkills": [
            "Análise crítica",
            "Trabalho em equipe",
            "Gestão de tempo"
        ],
        "description": "Estamos buscando um(a) Cloud Engineer para atuar em projetos de migração e gerenciamento de serviços em nuvem.",
        "requirements": "Conhecimento em Oracle Cloud, infraestrutura como código e segurança em ambientes de nuvem.",
        "qualifications": "Graduação em TI ou áreas afins e 3 anos de experiência em nuvem.",
        "additionalInformation": "Integre-se a uma equipe inovadora em uma empresa reconhecida no mercado.",
        "salary": 14500.0,
        "status": "active",
        "benefits": "Bônus por desempenho, vale-refeição, e treinamentos.",
        "position": "Cloud Engineer",
        "id": "c0f12732-4d2f-4ab9-aad6-515c96f8a3f2",
        "creationDate": new Date("2024-10-07T19:22:17.472118"),
        "isFeatured": false
    },
    {
        "hiringRegime": "PF",
        "profile": "Analista de Segurança da Informação",
        "location": "Rio de Janeiro, RJ",
        "company": {
            "name": "Cisco Brasil",
            "photo": "https://www.svgrepo.com/show/473567/cisco.svg",
            "id": "8372641827364",
            "address": "RJ",
            "phone": "(21) 5555-6666",
            "employees": []
        },
        "jobType": "Presencial",
        "personalSkills": [
            "Foco em detalhes",
            "Pensamento crítico",
            "Proatividade"
        ],
        "description": "Buscamos um(a) Analista de Segurança da Informação para garantir a proteção dos dados e sistemas da empresa.",
        "requirements": "Experiência com ferramentas de segurança, análise de riscos e compliance.",
        "qualifications": "Formação em Segurança da Informação ou áreas relacionadas e 3 anos de experiência.",
        "additionalInformation": "Atue em uma das empresas líderes em soluções de redes e segurança.",
        "salary": 15500.0,
        "status": "active",
        "benefits": "Vale-alimentação, assistência médica e cursos de capacitação.",
        "position": "Analista de Segurança da Informação",
        "id": "4b63c0f2-11ec-4fa5-a746-7024e3b789bc",
        "creationDate": new Date("2024-09-21T19:22:17.472137"),
        "isFeatured": true
    },
    {
        "hiringRegime": "PJ",
        "profile": "UI/UX Designer",
        "location": "Curitiba, PR",
        "company": {
            "name": "Intel Brasil",
            "photo": "https://www.svgrepo.com/show/341933/intel.svg",
            "id": "8237461827364",
            "address": "PR",
            "phone": "(41) 4444-5555",
            "employees": []
        },
        "jobType": "Presencial",
        "personalSkills": [
            "Empatia",
            "Criatividade",
            "Colaboração"
        ],
        "description": "Estamos à procura de um(a) UI/UX Designer para criar interfaces amigáveis e atraentes para nossos produtos.",
        "requirements": "Experiência em design de interfaces, prototipagem e testes de usabilidade.",
        "qualifications": "Graduação em Design ou áreas afins e 2 anos de experiência em design digital.",
        "additionalInformation": "Junte-se à nossa equipe para desenvolver produtos inovadores que impactam a vida das pessoas.",
        "salary": 13000.0,
        "status": "active",
        "benefits": "Vale-refeição, plano de saúde e horários flexíveis.",
        "position": "UI/UX Designer",
        "id": "c20b1641-bb92-4e1a-8c69-c94c20b8e3a4",
        "creationDate": new Date("2024-08-09T19:22:17.472149"),
        "isFeatured": false
    },
    {
        "hiringRegime": "PF",
        "profile": "Gerente de Projetos de TI",
        "location": "Porto Alegre, RS",
        "company": {
            "name": "Dell Brasil",
            "photo": "https://www.svgrepo.com/show/303445/dell-2-logo.svg",
            "id": "9283746512387",
            "address": "RS",
            "phone": "(51) 9999-8888",
            "employees": []
        },
        "jobType": "Presencial",
        "personalSkills": [
            "Liderança",
            "Organização",
            "Comunicação"
        ],
        "description": "Procuramos um(a) Gerente de Projetos de TI para coordenar equipes e garantir a entrega de projetos dentro do prazo.",
        "requirements": "Experiência em gerenciamento de projetos e conhecimento em metodologias ágeis.",
        "qualifications": "Bacharel em áreas de TI e certificação PMP será um diferencial.",
        "additionalInformation": "Atue em uma empresa que valoriza o desenvolvimento e bem-estar dos funcionários.",
        "salary": 17000.0,
        "status": "active",
        "benefits": "Assistência médica, vale-alimentação e programas de bem-estar.",
        "position": "Gerente de Projetos de TI",
        "id": "e62c46f7-4557-4aa0-9114-2e1d0411d601",
        "creationDate": new Date("2024-08-30T19:22:17.472154"),
        "isFeatured": true
    },
    {
        "hiringRegime": "PJ",
        "profile": "Analista de Sistemas",
        "location": "São Paulo, SP",
        "company": {
            "name": "TechStars",
            "photo": "https://ui-avatars.com/api/?name=TechStars&background=random&color=fff",
            "id": "1234567890123",
            "address": "SP",
            "phone": "(11) 9888-7777",
            "employees": []
        },
        "jobType": "Remoto",
        "personalSkills": [
            "Análise Crítica",
            "Trabalho em Equipe",
            "Flexibilidade"
        ],
        "description": "Buscamos um(a) Analista de Sistemas para desenvolver e manter sistemas de alta complexidade.",
        "requirements": "Experiência em programação e conhecimento em SQL.",
        "qualifications": "Graduação em Ciência da Computação ou áreas correlatas.",
        "additionalInformation": "Oferecemos um ambiente de trabalho colaborativo e oportunidades de crescimento.",
        "salary": 12000.0,
        "status": "active",
        "benefits": "Plano de saúde, vale-refeição e bônus por desempenho.",
        "position": "Analista de Sistemas",
        "id": "b38b39c0-e6b1-4f67-bb10-9d98babc5f69",
        "creationDate": new Date("2024-08-31T10:00:00.000Z"),
        "isFeatured": false
    },
    {
        "hiringRegime": "PF",
        "profile": "Desenvolvedor Front-end",
        "location": "Belo Horizonte, MG",
        "company": {
            "name": "TOTVS",
            "photo": "https://ui-avatars.com/api/?name=TOTVS&background=random&color=fff",
            "id": "9876543210987",
            "address": "MG",
            "phone": "(31) 9777-6666",
            "employees": []
        },
        "jobType": "Remoto",
        "personalSkills": [
            "Criatividade",
            "Autonomia",
            "Trabalho sob Pressão"
        ],
        "description": "Estamos em busca de um(a) Desenvolvedor(a) Front-end para criar interfaces dinâmicas e responsivas.",
        "requirements": "Conhecimento em HTML, CSS e JavaScript.",
        "qualifications": "Formação em Design, Tecnologia da Informação ou áreas afins.",
        "additionalInformation": "Trabalhe em um ambiente inovador que estimula a criatividade.",
        "salary": 10000.0,
        "status": "active",
        "benefits": "Vale-transporte, assistência psicológica e treinamentos.",
        "position": "Desenvolvedor Front-end",
        "id": "f2e54c3a-ec0b-4f34-baa2-c2f99c2f54a6",
        "creationDate": new Date("2024-09-01T10:30:00.000Z"),
        "isFeatured": true
    },
    {
        "hiringRegime": "PF",
        "profile": "Product Owner",
        "location": "Curitiba, PR",
        "company": {
            "name": "Movile",
            "photo": "https://ui-avatars.com/api/?name=TMovile&background=random&color=fff",
            "id": "2345678901234",
            "address": "PR",
            "phone": "(41) 9555-4444",
            "employees": []
        },
        "jobType": "Remoto",
        "personalSkills": [
            "Empatia",
            "Visão Estratégica",
            "Comunicação"
        ],
        "description": "Estamos em busca de um(a) Product Owner para liderar a definição de produtos e priorizar backlog.",
        "requirements": "Experiência em metodologias ágeis e gestão de produtos.",
        "qualifications": "Formação em Administração, Engenharia ou áreas relacionadas.",
        "additionalInformation": "Trabalhe com um time talentoso e em um ambiente colaborativo.",
        "salary": 16000.0,
        "status": "active",
        "benefits": "Bônus anual, assistência médica e programa de incentivo a cursos.",
        "position": "Product Owner",
        "id": "b67f8f9e-9f73-4f85-8f5e-e62a64c3b78d",
        "creationDate": new Date("2024-09-03T12:00:00.000Z"),
        "isFeatured": true
    },
    {
        "hiringRegime": "PJ",
        "profile": "Gerente de Tecnologia",
        "location": "Fortaleza, CE",
        "company": {
            "name": "CI&T",
            "photo": "https://ui-avatars.com/api/?name=CI&background=random&color=fff",
            "id": "3456789012345",
            "address": "CE",
            "phone": "(85) 9444-3333",
            "employees": []
        },
        "jobType": "Presencial",
        "personalSkills": [
            "Liderança",
            "Gestão de Mudanças",
            "Planejamento"
        ],
        "description": "Procuramos um(a) Gerente de Tecnologia para liderar a equipe de TI e implementar novas soluções tecnológicas.",
        "requirements": "Experiência em gestão de equipes e projetos de tecnologia.",
        "qualifications": "Graduação em Tecnologia da Informação ou áreas correlatas.",
        "additionalInformation": "Oferecemos um ambiente de inovação constante.",
        "salary": 18000.0,
        "status": "active",
        "benefits": "Plano de carreira, assistência médica e vale-transporte.",
        "position": "Gerente de Tecnologia",
        "id": "e8b39f09-09c8-4f4d-9250-e85a295a034c",
        "creationDate": new Date("2024-09-04T13:30:00.000Z"),
        "isFeatured": false
    },
    {
        "hiringRegime": "PJ",
        "profile": "Gerente de Tecnologia",
        "location": "Recife, PE",
        "company": {
            "name": "TechSolutions",
            "photo": "https://ui-avatars.com/api/?name=Tech&background=random&color=fff",
            "id": "4567896123456",
            "address": "PE",
            "phone": "(81) 9222-1111",
            "employees": []
        },
        "jobType": "Presencial",
        "personalSkills": [
            "Liderança",
            "Gestão de Mudanças",
            "Planejamento"
        ],
        "description": "Procuramos um(a) Gerente de Tecnologia para liderar a equipe de TI e implementar novas soluções tecnológicas.",
        "requirements": "Experiência em gestão de equipes e projetos de tecnologia.",
        "qualifications": "Graduação em Tecnologia da Informação ou áreas correlatas.",
        "additionalInformation": "Oferecemos um ambiente de inovação constante.",
        "salary": 18000.0,
        "status": "active",
        "benefits": "Plano de carreira, assistência médica e vale-transporte.",
        "position": "Gerente de Tecnologia",
        "id": "a1234567-89ab-cdef-0123-456789abcdef",
        "creationDate": new Date("2024-09-04T13:30:00.000Z"),
        "isFeatured": false
    },
    {
        "hiringRegime": "PJ",
        "profile": "Gerente de Tecnologia",
        "location": "São Paulo, SP",
        "company": {
            "name": "InovaTech",
            "photo": "https://ui-avatars.com/api/?name=Inova&background=random&color=fff",
            "id": "5678901234567",
            "address": "SP",
            "phone": "(11) 9333-2222",
            "employees": []
        },
        "jobType": "Presencial",
        "personalSkills": [
            "Liderança",
            "Gestão de Mudanças",
            "Planejamento"
        ],
        "description": "Procuramos um(a) Gerente de Tecnologia para liderar a equipe de TI e implementar novas soluções tecnológicas.",
        "requirements": "Experiência em gestão de equipes e projetos de tecnologia.",
        "qualifications": "Graduação em Tecnologia da Informação ou áreas correlatas.",
        "additionalInformation": "Oferecemos um ambiente de inovação constante.",
        "salary": 18000.0,
        "status": "active",
        "benefits": "Plano de carreira, assistência médica e vale-transporte.",
        "position": "Gerente de Tecnologia",
        "id": "b2345678-90ab-cdef-1234-567890abcdef",
        "creationDate": new Date("2024-09-04T13:30:00.000Z"),
        "isFeatured": false
    },
    {
        "hiringRegime": "PJ",
        "profile": "Desenvolvimento de Software",
        "location": "São Paulo, SP",
        "company": {
          "name": "Twitter Brasil",
          "photo": "https://www.svgrepo.com/show/452123/twitter.svg",
          "id": "1938475628371",
          "address": "SP",
          "phone": "(11) 4000-5555",
          "employees": []
        },
        "jobType": "Remoto",
        "personalSkills": [
          "Criatividade",
          "Trabalho em equipe",
          "Capacidade de adaptação"
        ],
        "description": "Buscamos desenvolvedor(a) full-stack para integrar nossa equipe de inovação e criar novas funcionalidades para a plataforma.",
        "requirements": "Experiência em JavaScript, Node.js e React. Conhecimento em bancos de dados relacionais e não relacionais.",
        "qualifications": "Formação em Ciência da Computação ou áreas correlatas, com pelo menos 3 anos de experiência.",
        "additionalInformation": "Venha fazer parte de uma das maiores redes sociais do mundo e impactar milhões de usuários.",
        "salary": 14500.00,
        "status": "active",
        "benefits": "Vale-alimentação, plano de saúde e horários flexíveis.",
        "position": "Desenvolvedor(a) Full-Stack",
        "id": "a8f9c2b8-bb92-4e12-8c61-d5c2f0f21e53",
        "creationDate": new Date("2024-10-10T10:00:00.000Z"),
        "isFeatured": true
      },
      {
        "hiringRegime": "PF",
        "profile": "Analista de Dados",
        "location": "Curitiba, PR",
        "company": {
          "name": "TM Brasil",
          "photo": "https://ui-avatars.com/api/?name=TM&background=random&color=fff",
          "id": "2389475638272",
          "address": "PR",
          "phone": "(41) 3333-4444",
          "employees": []
        },
        "jobType": "Presencial",
        "personalSkills": [
          "Análise crítica",
          "Atenção aos detalhes",
          "Comunicação"
        ],
        "description": "Procuramos um(a) Analista de Dados para coletar, processar e analisar grandes volumes de dados, contribuindo para a tomada de decisão.",
        "requirements": "Experiência em ferramentas de BI, SQL e Excel. Conhecimento em estatística é um diferencial.",
        "qualifications": "Graduação em Estatística, Matemática ou áreas correlatas. Experiência mínima de 2 anos.",
        "additionalInformation": "Junte-se a uma equipe inovadora e ajude a moldar a estratégia de negócios.",
        "salary": 12500.00,
        "status": "active",
        "benefits": "Vale-refeição, assistência médica e treinamentos.",
        "position": "Analista de Dados",
        "id": "c3c82d75-8e24-4c60-98f1-e47c87d9c23d",
        "creationDate": new Date("2024-10-10T10:00:00.000Z"),
        "isFeatured": false
      },
      {
        "hiringRegime": "PJ",
        "profile": "Engenheiro de Software",
        "location": "Belo Horizonte, MG",
        "company": {
          "name": "Spotify Brasil",
          "photo": "https://www.svgrepo.com/show/475684/spotify-color.svg",
          "id": "8473629145678",
          "address": "MG",
          "phone": "(31) 4444-5555",
          "employees": []
        },
        "jobType": "Remoto",
        "personalSkills": [
          "Trabalho em equipe",
          "Comunicação",
          "Proatividade"
        ],
        "description": "Estamos à procura de um(a) Engenheiro(a) de Software para trabalhar na melhoria da plataforma de streaming e na implementação de novas funcionalidades.",
        "requirements": "Experiência com Java, Spring Boot e APIs RESTful. Desejável conhecimento em microservices.",
        "qualifications": "Formação em Engenharia de Software ou áreas afins. Experiência de 3 anos em desenvolvimento.",
        "additionalInformation": "Participe de um ambiente dinâmico e criativo em uma das maiores plataformas de música do mundo.",
        "salary": 15500.00,
        "status": "active",
        "benefits": "Vale-refeição, assistência médica e bônus de performance.",
        "position": "Engenheiro(a) de Software",
        "id": "f4b70e87-4f53-4c9d-9f0f-5c75b3a82ae2",
        "creationDate": new Date("2024-10-10T10:00:00.000Z"),
        "isFeatured": true
      },
      {
        "hiringRegime": "PF",
        "profile": "Desenvolvedor(a) de Jogos",
        "location": "Rio de Janeiro, RJ",
        "company": {
          "name": "Ubisoft Brasil",
          "photo": "https://www.svgrepo.com/show/331624/ubisoft.svg",
          "id": "9876543210123",
          "address": "RJ",
          "phone": "(21) 7777-8888",
          "employees": []
        },
        "jobType": "Presencial",
        "personalSkills": [
          "Criatividade",
          "Trabalho em equipe",
          "Solução de problemas"
        ],
        "description": "Buscamos desenvolvedor(a) de jogos para criar e otimizar jogos para diferentes plataformas, com foco em inovação e qualidade.",
        "requirements": "Experiência em Unity ou Unreal Engine, além de programação em C# ou C++.",
        "qualifications": "Formação em Design de Jogos ou áreas relacionadas. Mínimo de 2 anos de experiência.",
        "additionalInformation": "Junte-se a uma equipe apaixonada por jogos e crie experiências incríveis para os jogadores.",
        "salary": 17000.00,
        "status": "active",
        "benefits": "Vale-alimentação, assistência médica e horário flexível.",
        "position": "Desenvolvedor(a) de Jogos",
        "id": "b12e9a46-4de0-4b8b-88fc-4a18d4d1b6ee",
        "creationDate": new Date("2024-10-10T10:00:00.000Z"),
        "isFeatured": false
    },
    {
        "hiringRegime": "PJ",
        "profile": "Analista de Sistemas",
        "location": "Belo Horizonte, MG",
        "company": {
          "name": "InnovateTech",
          "photo": "https://ui-avatars.com/api/?name=InnovateTech&background=random&color=fff",
          "id": "9876543210123",
          "address": "MG",
          "phone": "(31) 9888-6666",
          "employees": []
        },
        "jobType": "Remoto",
        "personalSkills": [
          "Liderança",
          "Proatividade",
          "Análise Crítica"
        ],
        "description": "Procuramos um(a) Analista de Sistemas que será responsável por realizar o levantamento de requisitos e gerenciar projetos de tecnologia.",
        "requirements": "Experiência em programação e familiaridade com ferramentas de gerenciamento de projetos.",
        "qualifications": "Formação superior em áreas relacionadas à tecnologia.",
        "additionalInformation": "Participe de uma equipe dinâmica e ajude a moldar o futuro da tecnologia.",
        "salary": 14000.00,
        "status": "active",
        "benefits": "Vale-transporte, plano odontológico, e participação nos lucros.",
        "position": "Analista de Sistemas",
        "id": "c3b12a4d-d8e1-4b94-87fa-4c9ef7d5f2a4",
        "creationDate": new Date("2024-10-15T10:00:00.000Z"),
        "isFeatured": true
    },
    {
        "hiringRegime": "PJ",
        "profile": "Analista de Sistemas",
        "location": "Curitiba, PR",
        "company": {
          "name": "DevSolutions",
          "photo": "https://ui-avatars.com/api/?name=DevSolutions&background=random&color=fff",
          "id": "4567890123456",
          "address": "PR",
          "phone": "(41) 9999-8888",
          "employees": []
        },
        "jobType": "Remoto",
        "personalSkills": [
          "Comunicação",
          "Solução de Problemas",
          "Trabalho em Equipe"
        ],
        "description": "Estamos à procura de um(a) Analista de Sistemas para ajudar na melhoria contínua de nossos produtos e serviços.",
        "requirements": "Conhecimento em Python e experiência com análise de dados.",
        "qualifications": "Graduação em Engenharia, Análise de Sistemas ou áreas afins.",
        "additionalInformation": "Venha crescer em uma empresa que valoriza a inovação e o trabalho em equipe.",
        "salary": 12500.00,
        "status": "active",
        "benefits": "Vale-refeição, cursos de capacitação e assistência médica.",
        "position": "Analista de Sistemas",
        "id": "e5d12f55-cfd5-4f26-b802-56a3e82f6cde",
        "creationDate": new Date("2024-10-15T10:00:00.000Z"),
        "isFeatured": false
    }
        
]