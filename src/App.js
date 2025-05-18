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
      <h1>Mari.IA</h1>
      <p>Uma assistente inteligente para ajudar idosos e seus responsáveis no acompanhamento de medicamentos e tratamentos.</p>

      <div className="form-section">
        <h2>Formulário de Interesse</h2>
        <form onSubmit={sendEmail}>
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
        </form>
        {status && <p className="status">{status}</p>}
      </div>
    </div>
  );
}

export default App;
