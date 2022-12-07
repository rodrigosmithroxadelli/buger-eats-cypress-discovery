var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '4899999999',
            address: {
                postalcode: '88060444',
                street: 'Servidão Leandro albino da Silva',
                number: '180',
                details: 'Ap 3',
                district: 'São João do Rio Vermelho',
                city_state: 'Florianópolis/SC'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}