import passwordGenerator from 'password-generator';
import Queue from '../lib/Queue';

export default { 
    async post(request, response) {
        const { name, email } = request.body;

        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        }

        Mail.sendMail({
          from: 'DIO <contato@dio.com.br>',
          to: `${name} ${email}`,
          subject: 'Cadastro de usuário',
          html: `Olá ${name}, bem-vindo`
        })
          
        await Queue.add('RegistrationMail', { user });

        return response.status(201).json(user);
    } 
}