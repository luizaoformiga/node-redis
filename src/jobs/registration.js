import Mail from '../controller/lib/mail';

export default {
  key: "RegistrationMail",
  options: {
    delay: 5000,
    priority: 3
  },

  async HTMLHeadingElement({ data }) {
    const { user } = data;
               
    await Mail.sendMail({
      from: "LUIZ <contatoLuiz.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuário",
      html: `Olá ${user.name}, seja bem-vindo!`
    })
  }
}



