import express from 'express';

const host = '0.0.0.0';
const port = 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Servidor funcionando 🚀 Acesse /Cadastro');
});

app.get('/Cadastro', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Cadastro</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body class="container mt-5">

      <h2>Cadastro</h2>

      <form class="row g-3" method="POST" action="/Cadastro">

        <div class="col-md-6">
          <label class="form-label">First name</label>
          <input type="text" name="nome" class="form-control" required>
        </div>

        <div class="col-md-6">
          <label class="form-label">Last name</label>
          <input type="text" name="sobrenome" class="form-control" required>
        </div>

        <div class="col-md-6">
          <label class="form-label">Username</label>
          <input type="text" name="username" class="form-control" required>
        </div>

        <div class="col-md-6">
          <label class="form-label">City</label>
          <input type="text" name="cidade" class="form-control" required>
        </div>

        <div class="col-md-6">
          <label class="form-label">State</label>
                <select name="estado" class="form-select" required>
                  <option selected disabled value="">Escolha...</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
            </div>

        <div class="col-md-6">
          <label class="form-label">Zip</label>
          <input type="text" name="cep" class="form-control" required>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="termos" value="aceito" required>
            <label class="form-check-label">
              Agree to terms and conditions
            </label>
          </div>
        </div>

        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>

      </form>

    </body>
    </html>
  `);
});

app.post('/Cadastro', (req, res) => {
    const { nome, sobrenome, username, cidade, estado, cep } = req.body;

    res.send(`
    <h1>Cadastro feito com sucesso!</h1>
    <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Cidade:</strong> ${cidade}</p>
    <p><strong>Estado:</strong> ${estado}</p>
    <p><strong>CEP:</strong> ${cep}</p>
    <a href="/Cadastro">Voltar</a>
  `);
});

app.listen(port, host, () => {
    console.log(`Server rodando em http://localhost:${port}/Cadastro`);
});