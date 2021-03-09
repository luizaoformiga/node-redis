import nodemailer from 'nodemailer';
import mailConfig from '../../config/config-mail';

export default nodemailer.createTransport(mailConfig);