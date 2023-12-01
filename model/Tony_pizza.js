var usuario = {
    informacoes:[
        {
            nome: 'fernando',
            telefone: '40028922',
            email: 'fernandoAS@gmail.com',
            endereço: [
                {
                    "Estado": "São Paulo",
                    "bairro": "onde judas bateu as botas",
                    "rua": "rua jaguatiricas",
                    "casa": "casa 380"
                }
            ],
            senha: 'Azul400',
            imagem: '../img/fernando.jpg'
        },

        {
            nome: 'Camila',
            telefone: '40962589',
            email: 'CamilaPS@gmail.com',
            endereço: [
                {
                    "Estado": "São Paulo",
                    "bairro": "jardim angelica",
                    "rua": "rua jaguatiricas",
                    "casa": "casa 390"
                }
            ],
            senha: 'vermelho300',
            imagem: '../img/camila.png'
        },

        {
            nome: 'Amanda',
            telefone: '95636357',
            email: 'AmandaLove@gmail.com',
            endereço: [
                {
                    "Estado": "São Paulo",
                    "bairro": "jardim ana estela",
                    "rua": "rua jaguatiricas",
                    "casa": "casa 240"
                }
            ],
            senha: 'amarelo8000',
            imgem: '../img/amanda.jpg'
        },

        {
           nome: 'marcela',
           telefone: '93675971',
           email: 'marcelaCR@smail.com',
           endereço: [
                {
                    "Estado": "São Paulo",
                    "bairro": "onde judas bateu as botas",
                    "rua": "rua jaguatiricas",
                    "casa": "casa 180"
                }
           ],
           senha: '4008',
           imagem: '../img/marcela.jpg'
        }
    ]
}

var categoria = {
    categorias:[
        {
            nome: 'minhas pizzas',
            imagem: '../img/Pizza (2).png',
        },

        {
            nome: 'bebidas',
            imagem: '../bebidas.png',
        },

        {
            nome: 'frutas',
            imagem: '../frutas.png',
        },

        {
            nome: 'pizzas',
            imagem: '../Pizza.png',
        },

        {
            nome: 'sobremesa',
            imagem: '../sobremesas.png',
        },

        {
            nome: 'sorvete',
            imagem: '../sorvete.png',
        },
    ] 
}

var produtos ={
    pizzas:[
        {
            nome: 'Pizza de calabreza com queijo',
            preco: 'R$16,00',
            descricao: 'molho, queijo parmesão 300g, azeitona, cebola, calabresa, e oregano',
            categoria: [
                categorias[0],
                categorias[3]
            ],
            imagem: '',
            avaliacao: [
                {
                    "comentario": "pizza muito boa, muito macia e deliciosa amei",
                    "estrelas": 5
                },

                {
                    "comentario": "essa pizza é demais, recomendo!",
                    "estrelas": 5
                },
            ]
        },

        {
            nome: 'Pizza de peperoni com queijo',
            preco: 'R$19,00',
            descricao: 'molho, tomate, azitona preta, pmentão, queijo parmesao e cogumelos',
            categoria: [
                categorias[0],
                categorias [3]
            ],
            imagem: '',
            avaliacao: [
                {
                    "comentario": "pizza super saborasa, adorei",
                    "estrelas": 5
                },

                {
                    "comentario": "pizza é boa, mas seria melhor sem a azeitona",
                    "estrelas": "4,5"
                },
            ],
        },

        {
            nome: 'Pizza de calabeza com queijo',
            preco: 'R$16,00',
            descricao: 'molho de tomate, queijo, tomate e rucula',
            categoria: [
                categorias[0],
                categorias[3]
            ],
            imagem: '',
            avaliacao: [
                {
                    "comentarios": "pizza muito boa, adorei!",
                    "estrelas": 5
                },

                {
                    "comentarios": "pizza muito boa, remomendo muito!",
                    "estrelas": 5
                },
            ],
        },

        {
            nome: 'Pizza de peperoni com queijo e tomate',
            preco: 'R$15,00',
            descricao: 'molho, queijo parmesão, peperoni e tomate',
            categoria: categorias[0],
            imagem: '',
            avaliacao: [
                {
                    "comentarios": "pizza muito boa, os sabores são deliciosos",
                    "estrelas": 5
                },

                {
                    "comentarios": "pizza maravilhosa, recomendo!",
                    "estrelas": 5
                },
            ],
        },

        {
            nome: 'pizza brotinho com queijo e tomate',
            preco: 'R$12,00',
            descricao: 'molho, queijo, azeitona',
            categoria: categorias[0],
            imagem: '',
            avaliacao: [
                {
                     "comentarios": "Melhor do que eu esperava, adorei!",
                     "estrelas": 5
                },

                {
                    "comentarios": "que pizza boa, ja quero pedir novamente!!",
                    "estrelas": 5
                },
               
            ],
        },
    ],

    bebidas: [
        {
            nome: 'coca-cola 2l',
            preco: 'R$14,99',
            descricao: 'refrigerante garrafa 2l',
            categoria: categorias [1],
            imagem: '',
        },

        {
            nome: 'cerveja heineken',
            preco: 'R$17,99',
            descricao: 'cerveja heineken',
            categoria: categorias[1],
            imagem: '',
        },

        {
            nome: 'fanta laranja',
            preco: 'R$15,00',
            descricao: 'refrigerante garrafa de 2l',
            categoria: categorias[1],
            imagem: '',
        },

        {
            nome: 'Guaraná',
            preco: 'R$15,00',
            descricao: 'refrigerante garrafa 2l',
            categoria: categorias[1],
            imagem: '',
        },

        {
            nome: 'coca-cola zero',
            preco: 'R$15,00',
            descricao: 'refrigerante garrafa zero 2l',
            categoria: categorias[1],
            imagem: '',
        },
    ],

    pizzafruta: [
        {
            nome: 'pizza havaiana',
            preco: 'R$20,00',
            descricao: ' uma pizza coberta com molho de tomate, queijo, abacaxi, lombo canadense ou presunto.',
            categoria: categorias [
                categorias [2],
                categorias [4]
            ],
            imagem: '',
        },
        
        {
            nome: 'pizza de chocolate com morango',
            preco: 'R$20,00',
            descricao: 'pizza com recheio de chocolate ao leite com morangos em cima',
            categoria: categorias [ 
                categorias [2],
                categorias [4]
            ],
            imagem: '',
        },
        
        {
            nome: 'pizza de chocolate branco e banana',
            preco: 'R$25,00',
            descricao: 'pizza recheada com chocolate branco com bananas em cima',
            categoria: categorias [ 
                categorias [2],
                categorias [4]
            ],
            imagem: '',
        },
        
        {
            nome: 'pizza de frutas vermelhas',
            preco: 'R$28,00',
            descricao: 'pizza rechada com chocolate branco, com frutas vermelhas e abacaxi',
            categoria: categorias [ 
                categorias [2],
                categorias [4]
            ],
            imagem: '',
        },
    ],

    sobremesas: [
        {
            nome: 'pizza de chocolate com morango',
            preco: 'R$20,00',
            descricao: 'pizza com recheio de chocolate ao leite com morangos em cima',
            categoria: categorias[
                categorias[2],
                categorias[4]
            ],
            imagem: '',
            avaliacao: [
                {
                    "comentario": "pizza muito boa, maravilhosa para alguem que esta desejando um doce!!!",
                    "estrelas": 5
                },
                {
                    "comentario": "adorei a pizza, acho que deveria por mais morangos para equilibrar, mas e muito boa",
                    "estrelas": "4,0"
                }
            ],
        },
        
        {
            nome: 'pizza de chocolate branco e banana',
            preco: 'R$25,00',
            descricao: 'pizza recheada com chocolate branco com bananas em cima',
            categoria: categorias[
                categorias[2],
                categorias[4]
            ],
            imagem: '',
            avaliacao: [
                {
                    "comentario": "a pizza é maravilhosa, não tem como enjoar, perfeita",
                    "estrelas": 5
                },
                {
                    "comentario": "adorei a pizza, muito boa não dá para parar de comer!",
                    "estrelas": 5
                }
            ],
        },
        
        {
            nome: 'tortinha de maçã',
            preco: 'R$15,00',
            descricao: 'torta rechada com leite condensado canela e maçã',
            categoria: categorias[4],
            imagem: '',
            avaliacao: [
                {
                    "comentario": "otima torta, uma deliciosa opção para quem não aguenta comer a pizza doce!!",
                    "estrelas": 5
                },
                {
                    "comentario": "adorei essa opção de torta, muito deliciosa!!!!",
                    "estrelas": 5
                }
            ],
        },
        
        {
            nome: 'torta de banana',
            preco: 'R$15,00',
            descricao: 'torta recheada com leite condensado, com canela e banana',
            categoria: categorias[4],
            imagem: '',
            avaliacao: [
                {
                    "comentario": "adorei a torta, muito boa, os sabores são maravilhosos",
                    "estrelas": 5
                },
                {
                    "comentario": "muito boa a torta recomendo",
                    "estrelas": 5
                }
            ],
        },
        
        {
            nome: 'pizza de frutas vermelhas',
            preco: 'R$28,00',
            descricao: 'pizza rechada com chocolate branco, com frutas vermelhas e abacaxi',
            categoria: categorias[
                categorias[2],
                categorias[4]
            ],
            imagem: '',
            avaliacao: [
                {
                    "comentario": "adorei essa pizza, muito boa e a ideia dela é muito criativa",
                    "estrelas": 5
                },
                {
                    "comentario": "bem diferente, eu adorei",
                    "estrelas": 5
                }
            ],
        },
    ],

    sorvetes: [
        {
            nome: 'sorvete de chocolate branco',
            preco: 'R$17,00',
            descricao: 'um delicioso servete de chocolte branco com pequenos pedaços de chocolate',
            categoria: categorias[5],
            imagem: '',
        },
        
        {
            nome: 'sorvete de pistache ',
            preco: 'R$18,00',
            descricao: 'delicioso sorvete de pistache',
            categoria: categorias[5],
            imagem: '',
        },
        
        {
            nome: 'sorvete de frutas vermelhas',
            preco: 'R$14,00',
            descricao: 'delicioso sorvete de frutas vermelhas',
            categoria: categorias[5],
            imagem: '',
        },
        
        {
            nome: 'sorvete de abacaxi',
            preco: 'R$15,00',
            descricao: 'um delicioso sorvete de abacaxi',
            categoria: categorias[5],
            imagem: '',
        },
    ]
};

module.exports = {
    usuario,
    categoria,
    produtos
 }