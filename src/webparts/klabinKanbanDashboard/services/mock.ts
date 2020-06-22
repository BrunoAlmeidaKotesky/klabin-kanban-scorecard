import {ICardData} from '../models/interfaces/IStore';

export function loadCardMock():ICardData[]{
    
    return [{
        category: 'Fazendo',
        data:
            [
            {
                codeUrl: 'https://dummyimage.com/100x100/1279ff/ffffff.png&text=TS',
                imgIdea: 'https://dummyimage.com/100x100/1279ff/ffffff.png&text=TS',
                titleIdea: 'Typescript',
                codeIdea:'TSV203'
            },
            {
                codeUrl: 'https://dummyimage.com/100x100/1279ff/ffffff.png&text=JS',
                imgIdea: 'https://dummyimage.com/100x100/dba903/ffffff.png&text=JS',
                titleIdea: 'Javascript',
                codeIdea:'JSIU38'
            }, 
            {
                codeUrl: 'https://dummyimage.com/100x100/2c4573/d1b900.png&text=Python',
                imgIdea: 'https://dummyimage.com/100x100/2c4573/d1b900.png&text=Python',
                titleIdea: 'Python',
                codeIdea:'PYC#33V'
            }, 
            {
                codeUrl: 'https://dummyimage.com/100x100/ff0000/ffffff.png&text=Rust',
                imgIdea: 'https://dummyimage.com/100x100/ff0000/ffffff.png&text=Rust',
                titleIdea: 'Rust',
                codeIdea:'RCPP23'
            }, 
            {
                codeUrl: 'https://dummyimage.com/100x100/0c38c9/ffffff.png&text=CSS',
                imgIdea: 'https://dummyimage.com/100x100/0c38c9/ffffff.png&text=CSS',
                titleIdea: 'CSS',
                codeIdea:'CSSUG29'
            }, 
            ],

    },
    {
        category: 'Mock02',
        data: 
        [
            {
                codeUrl: 'https://dummyimage.com/100x100/ff5e00/ffffff.png&text=+HTML',
                imgIdea: 'https://dummyimage.com/100x100/ff5e00/ffffff.png&text=+HTML',
                titleIdea: 'HTML',
                codeIdea:'HJ88VASJ'
            }
        ]
    },
    {
        category: 'Mock03',
        data: 
        []
    },
    {
        category: 'Mock04',
        data: 
        [
            {
                codeUrl: 'https://dummyimage.com/100x100/e30000/ffffff.png&text=+JAVA',
                imgIdea: 'https://dummyimage.com/100x100/e30000/ffffff.png&text=+JAVA',
                titleIdea: 'JAVA',
                codeIdea:'JAW7866'
            },
            {
                codeUrl: 'https://dummyimage.com/100x100/e39b00/000000.png&text=+JSON',
                imgIdea: 'https://dummyimage.com/100x100/e39b00/000000.png&text=+JSON',
                titleIdea: 'JSON',
                codeIdea:'JWTIV9'
            }
        ]
    },
    {
        category: 'Mock 5',
        data:[{
            codeUrl: 'https://dummyimage.com/100x100/e39b00/000000.png&text=+CPP',
            imgIdea: 'https://dummyimage.com/100x100/e39b00/000000.png&text=+CPP',
            titleIdea: 'CPP',
            codeIdea:'CWT7V9'
        }]
    }
];
}