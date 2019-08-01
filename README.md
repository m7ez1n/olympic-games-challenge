# Projeto de uma API :octocat:

### Aqui vou falar uns negócio sobre o projeto :yum:

Esse é um desafio de uma vaga backend da empresa [Estante Virtual](https://github.com/estantevirtual), cujo o desafio consiste em criar uma API sobre alguns jogos olímpicos, aqui está o link do [desafio](https://github.com/estantevirtual/vagas/blob/master/desafios/backend.md) pra quem quiser dar uma olhada. A só pra lembrar, não to fazendo pra concorrer a vaga e sim para testar e fixar meu conhecimento em nodeJS. :shipit:

### Mais informações sobre o desafio :mag:

##### Jogos Olímpicos :flags:

Com a chegada dos jogos olímpicos, fomos designados para construir uma API REST para o COB (Comitê Olímico Brasileiro), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

- 100m rasos: Menor tempo vence
- Lançamento de Dardo: Maior distância vence

#### A API :rocket:

Através da API, deveremos ser capazes de:

1. - [ ] Criar uma competição
2. - [ ] Cadastrar resultados para uma competição (todos os campos são obrigatórios)

Segue os exemplos:

```
  {
    "competicao": "100m classificatoria 1",
    "atleta": "Joao das Neves",
    "value": "10.234",
    "unidade": "s"
  }
```

```
  {
    "competicao": "Dardo semifinal",
    "atleta": "Claudio",
    "value": "70.43",
    "unidade": "m"
  }
```

3. - [ ] Finalizar uma competição.
4. - [ ] Retornar o ranking da competição, exibindo a posição final de cada atleta.

#### Detalhes sobre a API :rage4:

- A API não deve aceitar cadastros de resultados se a competição já estiver encerrada.

- A API pode retornar o ranking/resultado parcial, caso a disputa ainda não estiver encerrada.

- No caso da competição do lançamento de dardos, cada atleta terá 3 chances, e o resultado da competição deverá levar em conta o lançamento mais distante de cada atleta.

- O Design da API, bem como input e output dos dados, fica a seu critério, sendo inclusive um dos pontos de avaliação.

- Testes são obrigatórios.

- Necessária criação de um Readme para informar o passo a passo de como rodar a API.

- Não é necessário criar um banco de dados, podendo manter os dados na memória. (hint: sqlite)

- Sugerimos a utilização do git para versionar a solução.

<h3 align="center">
  Acessem a He4rt :purple_heart:
</h3>

<h3 align="center">
  <img src="https://heartdevs.com/wp-content/uploads/2018/12/logo.png" width="215"><br>
    Visite nosso discord, vamo codar junto!! :godmode:
	<a href="https://discord.gg/J78z3FV" target="_blank">
	<img src="https://discordapp.com/api/guilds/452926217558163456/embed.png" alt="Discord server"/></a><br>
</h3>

[Twitter He4rt](https://twitter.com/He4rtDevs)

[My Twitter](https://twitter.com/m7Aei_He4rt)
