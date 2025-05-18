import React, { useState } from 'react';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_r3276oq',
      'template_mw44q2l',
      form,
      '_auAsXIFPKtw2kVAh'
    ).then((result) => {
      setStatus('Mensagem enviada com sucesso!');
      setForm({ name: '', email: '', message: '' });
    }, (error) => {
      setStatus('Erro ao enviar. Tente novamente.');
    });
  };

  return (
    <div className="container">
      <div className="content">
        <img
          src="/MariIa-4.PNG"
          alt="logo"
          style={{
            display: 'block',
            margin: '0 auto',
            maxWidth: '300px',
            height: 'auto'
          }}
        />

        <p className="description">
          <h1>Cuidar de quem você ama não pode ser no escuro.</h1>
          Saiba, com certeza, se seu familiar está tomando os remédios certos na hora certa — mesmo à distância.
          <br /><br />
          Chega de incerteza e preocupação. Nosso app envia para você a confirmação em tempo real de que o idoso tomou a medicação corretamente.
          <br /><br />
          Para isso, desenvolvemos um sistema com dois aplicativos integrados:
          <br /><br />
          <strong>Um para o idoso</strong>, extremamente simples: o alarme toca na hora do remédio, o app abre sozinho a câmera, e ele só precisa tirar uma foto.
          <br /><br />
          <strong>E outro para o responsável</strong>, que recebe essa foto em tempo real — e sabe se foi tomada de verdade.
          <br /><br />
          Se o idoso esquecer ou mandar uma imagem aleatória, o responsável é avisado imediatamente.
          <br /><br />
          Nada de senhas, botões ou menus: a simplicidade é a chave, porque o idoso não precisa aprender tecnologia — só usar a câmera.
          <br /><br />
          Acompanhe os exemplos abaixo:
        </p>

        <div className="gallery">
          <img src="/tela1.jpeg" alt="Tela 1" />
          <img src="/tela2.jpeg" alt="Tela 2" />
          <img src="/tela3.jpeg" alt="Tela 3" />
          <img src="/tela4.jpeg" alt="Tela 4" />
          <img src="/tela5.jpeg" alt="Tela 5" />
          <img src="/tela6.jpeg" alt="Tela 6" />
        </div>


        <a
          href="https://wa.me/5548998154643?text=Olá!%20Tenho%20interesse%20no%20assistente%20Mari.IA"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <div className="whatsapp-icon">
            <svg viewBox="0 0 32 32">
              <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path>
            </svg>
          </div>

          Tire suas dúvidas no nosso whatsapp
        </a>


        <form className="form" onSubmit={sendEmail}>
          <h2>Faça sua reserva imediatamente</h2>
          <input
            type="text"
            placeholder="Seu nome"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Sua mensagem"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button type="submit">Enviar</button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
