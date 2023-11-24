var usuario = {
    informacoes:[
        {
            nome: 'fernando',
            telefone: '40028922',
            email: 'fernandoAS@gmail.com',
            endereço: 'rua jaguatirica, onde judas bateu as botas',
            senha: 'Azul400',
            imagem: './img/fernando.jpg'
        },

        {
            nome: 'Camila',
            telefone: '40962589',
            email: 'CamilaPS@gmail.com',
            endereço: 'rua tapaxanas, jardim angelica',
            senha: 'vermelho300',
            imagem: './img/camila.png'
        },

        {
            nome: 'Amanda',
            telefone: '95636357',
            email: 'AmandaLove@gmail.com',
            endereço: 'tiro pombo, Entrepelado',
            senha: 'amarelo8000',
            imgem: './img/amanda.jpg'
        },

        {
           nome: 'marcela',
           telefone: '93675971',
           email: 'marcelaCR@smail.com',
           endereço: 'rua sete portas, onde judas bateu as botas',
           senha: '4008',
           imagem: './img/marcela.jpg'
        }
    ]
}

var categoria = {
    categorias:[
        {
            nome: 'minhas pizzas',
            imagem: './img/Pizza (2).png',
        },

        {
            nome: 'bebidas',
            imagem: './bebidas.png',
        },

        {
            nome: 'frutas',
            imagem: './frutas.png',
        },

        {
            nome: 'pizzas',
            imagem: './Pizza.png',
        },

        {
            nome: 'sobremesa',
            imagem: './sobremesas.png',
        },

        {
            nome: 'sorvete',
            imagem: './sorvete.png',
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
                    "comentario": "pizza muito boa, muito macia e deliciosa amei" 
                },

                {
                    "comentario": "essa pizza é demais, recomendo!"
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
                    "comentario": "pizza super saborasa, adorei"
                },

                {
                    "comentario": "pizza é boa, mas seria melhor sem a azeitona"
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
                    "comentarios": "pizza muito boa, adorei!"
                },

                {
                    "comentarios": "pizza muito boa, remomendo muito!"
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
                    "comentarios": "pizza muito boa, os sabores são deliciosos"
                },

                {
                    "comentarios": "pizza maravilhosa, recomendo!"
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
                     "comentarios": "Melhor do que eu esperava, adorei!"
                },

                {
                    "comentarios": "que pizza boa, ja quero pedir novamente!!"
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
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
        },
        
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
        },
        
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
        },
        
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
        },
    ],

    sobremesas: [
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
            avaliacao: '',
        },
        
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
            avaliacao: '',
        },
        
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
            avaliacao: '',
        },
        
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
            avaliacao: '',
        },
        
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
            avaliacao: '',
        },
    ],

    sorvetes: [
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
            avaliacao: '',
        },
        
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
            avaliacao: '',
        },
        
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
            avaliacao: '',
        },
        
        {
            nome: '',
            preco: '',
            descricao: '',
            categoria: '',
            imagem: '',
            avaliacao: '',
        },
    ]
}