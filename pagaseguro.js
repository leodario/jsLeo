require('dotenv').config();

const nodemailer = require("nodemailer");
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const http = require('http');

const md5 = require('md5');

//FIREBASE
const firebase = require('firebase');

firebase.initializeApp({
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    databaseURL: process.env.FB_DATABASE_URL,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appID: process.env.FB_APP_ID
});

//5S Business/5SPay link
const link5spay = 'https://5sbusiness.azuerewebsites.net';
//link5spay: 'https://localhost:3000/'

const fireDB = firebase.database();

const app = express();
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(cors());
app.use(express.json());

const server = htpp.Server(app);

app.post('/gerarlink', async (req, res) => {
    var cliente = reg.body.leads[0];

    var cnpj = cliente.custom_fields['CNPJ'];
    var cpf = cliente.custom_fields['Digite seu CPF'];
    var endereco = cliente.custom_fields['Endereço'];
    var numero = cliente.custom_fields['Número'];
    var bairro = cliente.custom_fields['Bairro'];
    var nome = cliente.custom_fields['Nome completo'];
    var fonteRecebedora = cliente.custom_fields['Fonte Recebedora'].toUpperCase();
    var referencia = fonteRecebedora + new Date().getMilliseconds();
    var nomeEmpresa = cliente.custom_fields['Nome da Empresa'];

    var tipoPessoa = (cnpj == '') ? true : false;
    var documento = (cnpj == '') ? cpf : cnpj;
    
    var email = cliente.email;
    var cidade = cliente.city;
    var estado = cliente.state;
    var cep = cliente.custom_fields['CEP'];
    var _date = new Date();

    var paylink = {
        data: _date.toLocaleString(),
        tipoPessoa: tipoPessoa,
        documento: documento,
        cep: cep,
        rua: endereco,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        nome: nome,
        nomeEmpresa: nomeEmpresa,
        email: email,
        valor: 1500.10,
        fonteRecebedora: fonteRecebedora,
        referencia: referencia,
        url: ''
    };

    var datetime = _date.getDate() + _date.getMilliseconds();
    var pay_id = md5(paylink.nome + ':' + paylink.email + ':' + paylink.documento + ':' + datetime);

    paylink.url = link5spay + '5spay/any/' + pay_id;

    // fireDB.ref(`5SPay/Paylinks/${pay_id}`).set(paylink);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, 
        secure: false,
        requireTLS: true,
        auth: {
            user: 'dev1@5sgrupo.com.br',
            pass: 'e@1222226145382'
        }
    });
    var paragrafo = document.createElement('p');
    var textoEmail = "Ficamos felizes em realizar a inscrição para este curso. Para Continuar o processo acesse o link abaixo, para realizar o pagamento";
    var linkPagamento = document.createElement('a');
    var textoPagamento = "Pagar Agora";
    
    var textoParagrafo = paragrafo.appendChild(textoEmail);

    // send e-mail with defined transport object
    let info = await transporter.sendMail({
        from: 'integracao@5sgrupo.com.br', // sender address
        to: `${email}`, // list of receivers
        subject: "Link pagamento Microscopia de Campo Escuro", // Subject line
        text: `${textoParagrafo}`, // plain text body
        html: `${paylink.url}` // html body
    });

    res.json({
        cliente: paylink,
    })


});

app.get('/', (req, res) => {
    res.json({version: '1.0.0'});
});

server.listen(process.env.PORT, () => {
    console.log(`Server started in port http://localhost:${process.env.PORT}`);
});